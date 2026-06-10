import Header from '@/components/header';
import Footer from '@/components/footer';
import { events } from '@/lib/data';
import Link from 'next/link';
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';

export default function EventsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Church Events</h1>
            <p className="text-xl opacity-90">Join us for worship, fellowship, and spiritual growth</p>
          </div>
        </section>

        {/* Events Grid */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {events.map((event) => (
                <div
                  key={event.id}
                  className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="h-48 bg-gradient-to-r from-accent to-accent/50 relative flex items-center justify-center">
                    <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-4 py-2 rounded-lg font-bold">
                      Featured
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-4">{event.title}</h3>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Calendar size={18} className="text-accent flex-shrink-0" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Clock size={18} className="text-accent flex-shrink-0" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <MapPin size={18} className="text-accent flex-shrink-0" />
                        <span>{event.location}</span>
                      </div>
                    </div>

                    <p className="text-foreground mb-6 leading-relaxed">
                      {event.description}
                    </p>

                    <button className="w-full bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition flex items-center justify-center gap-2">
                      Register Interest <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Info Section */}
            <div className="bg-card p-8 rounded-lg border border-border text-center">
              <h2 className="text-2xl font-bold mb-4">Can&apos;t Find What You&apos;re Looking For?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                If you have questions about any of our events or would like to suggest a new ministry or activity, 
                please don&apos;t hesitate to reach out to us.
              </p>
              <Link
                href="/contact"
                className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition inline-flex items-center gap-2"
              >
                Get in Touch <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
