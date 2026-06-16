import Header from '@/components/header';
import Footer from '@/components/footer';
import { events } from '@/lib/data';
import Link from 'next/link';
import { Calendar, Clock, MapPin, ArrowRight, Flame, BookOpen, HandHeart, Music2 } from 'lucide-react';
import PageHero from '@/components/page-hero';
import Reveal from '@/components/reveal';
import TiltCard from '@/components/tilt-card';

const eventIcons = [Flame, BookOpen, Music2, HandHeart];

export default function EventsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Get Together"
          title="Church Events"
          subtitle="Join us for worship, fellowship, and spiritual growth — every week on the hill."
        />

        {/* Events Grid */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {events.map((event, i) => {
                const Icon = eventIcons[i % eventIcons.length];
                return (
                  <Reveal key={event.id} delay={(i % 3) * 100}>
                    <TiltCard className="h-full">
                      <div className="glass-card h-full overflow-hidden">
                        <div className="relative h-40 bg-gradient-to-br from-night via-primary to-dawn/50 flex items-center justify-center">
                          <Icon className="h-12 w-12 text-dawn/80" strokeWidth={1.25} />
                          {i === 0 && (
                            <span className="absolute top-4 right-4 rounded-full bg-gradient-to-r from-dawn to-ember px-3 py-1 text-xs font-bold text-night">
                              Featured
                            </span>
                          )}
                        </div>
                        <div className="p-6">
                          <h3 className="font-display text-2xl font-semibold mb-4">{event.title}</h3>

                          <div className="space-y-3 mb-6">
                            <div className="flex items-center gap-3 text-muted-foreground">
                              <Calendar size={18} className="text-dawn flex-shrink-0" />
                              <span>{event.date}</span>
                            </div>
                            <div className="flex items-center gap-3 text-muted-foreground">
                              <Clock size={18} className="text-dawn flex-shrink-0" />
                              <span>{event.time}</span>
                            </div>
                            <div className="flex items-center gap-3 text-muted-foreground">
                              <MapPin size={18} className="text-dawn flex-shrink-0" />
                              <span>{event.location}</span>
                            </div>
                          </div>

                          <p className="text-foreground/90 mb-6 leading-relaxed">{event.description}</p>

                          <Link
                            href="/contact"
                            className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-dawn to-ember px-4 py-2.5 font-semibold text-night transition hover:-translate-y-0.5"
                          >
                            Register Interest <ArrowRight size={16} />
                          </Link>
                        </div>
                      </div>
                    </TiltCard>
                  </Reveal>
                );
              })}
            </div>

            {/* Additional Info Section */}
            <Reveal className="glass-card p-8 text-center">
              <h2 className="font-display text-2xl md:text-3xl font-semibold mb-4">Can&apos;t Find What You&apos;re Looking For?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                If you have questions about any of our events or would like to suggest a new ministry or activity,
                please don&apos;t hesitate to reach out to us.
              </p>
              <Link
                href="/contact"
                className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:opacity-90 transition inline-flex items-center gap-2"
              >
                Get in Touch <ArrowRight size={18} />
              </Link>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
