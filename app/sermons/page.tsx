import Header from '@/components/header';
import Footer from '@/components/footer';
import { sermons, churchInfo } from '@/lib/data';
import Link from 'next/link';
import { Calendar, User, BookMarked, ArrowRight, Play } from 'lucide-react';
import PageHero from '@/components/page-hero';
import Reveal from '@/components/reveal';
import TiltCard from '@/components/tilt-card';

export default function SermonsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Sermon Library"
          title="Messages To Carry With You"
          subtitle="Inspiring messages for your spiritual journey — watch anytime, anywhere."
        />

        {/* Sermons Grid */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sermons.map((sermon, i) => (
                <Reveal key={sermon.id} delay={(i % 3) * 100}>
                  <TiltCard className="h-full">
                    <Link href={`/sermons/${sermon.id}`} className="glass-card group flex h-full flex-col overflow-hidden">
                      {/* Video Thumbnail */}
                      <div className="relative aspect-video overflow-hidden bg-night">
                        <img
                          src={`https://img.youtube.com/vi/${sermon.youtubeId}/hqdefault.jpg`}
                          alt={sermon.title}
                          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-night/30 transition group-hover:bg-night/10" />
                        <span className="absolute inset-0 flex items-center justify-center">
                          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-dawn text-night shadow-lg transition group-hover:scale-110">
                            <Play size={20} fill="currentColor" />
                          </span>
                        </span>
                      </div>

                      <div className="flex flex-1 flex-col p-6">
                        <h3 className="font-display text-xl font-semibold mb-3 line-clamp-2">{sermon.title}</h3>

                        <div className="space-y-2 mb-6">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <User size={16} className="text-dawn flex-shrink-0" />
                            <span>{sermon.preacher}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar size={16} className="text-dawn flex-shrink-0" />
                            <span>{sermon.date}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <BookMarked size={16} className="text-dawn flex-shrink-0" />
                            <span>{sermon.scripture}</span>
                          </div>
                        </div>

                        <p className="text-foreground/80 text-sm mb-4 line-clamp-2">{sermon.description}</p>

                        <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-primary">
                          Watch Full Sermon <ArrowRight size={16} />
                        </span>
                      </div>
                    </Link>
                  </TiltCard>
                </Reveal>
              ))}
            </div>

            {/* Additional Info */}
            <Reveal className="glass-card p-8 text-center mt-16">
              <h2 className="font-display text-2xl md:text-3xl font-semibold mb-4">Never Miss a Message</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                New sermons are posted after every Sunday celebration. Subscribe on YouTube or follow us on
                social media to be notified the moment a new message goes live.
              </p>
              <a
                href="https://www.youtube.com/channel/UCRv0JKLgsiaunzmfNHjmAcw"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-dawn to-ember px-6 py-3 font-semibold text-night transition hover:-translate-y-0.5"
              >
                Subscribe on YouTube <ArrowRight size={18} />
              </a>
              <p className="mt-4 text-sm text-muted-foreground">
                Or reach the media team directly at {churchInfo.email}
              </p>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
