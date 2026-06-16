import Header from '@/components/header';
import Footer from '@/components/footer';
import { sermons } from '@/lib/data';
import Link from 'next/link';
import { Calendar, User, BookMarked, Share2, Download, ArrowLeft, ArrowRight, Play } from 'lucide-react';
import { notFound } from 'next/navigation';
import AuroraBackground from '@/components/aurora-background';
import HillDivider from '@/components/hill-divider';
import Reveal from '@/components/reveal';

export default async function SermonDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const sermon = sermons.find((s) => s.id === parseInt(id));

  if (!sermon) {
    notFound();
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-night text-white">
          <AuroraBackground />
          <div className="relative z-10 container mx-auto px-4 pt-28 pb-16 md:pt-36 md:pb-20">
            <Link href="/sermons" className="inline-flex items-center gap-2 text-white/70 hover:text-dawn transition mb-6 w-fit">
              <ArrowLeft size={18} />
              Back to Sermons
            </Link>
            <p className="eyebrow text-dawn mb-3">{sermon.scripture}</p>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight max-w-3xl">
              {sermon.title}
            </h1>
            <p className="mt-4 text-lg text-white/75">A message by {sermon.preacher}</p>
          </div>
          <HillDivider fill="var(--background)" backFill="var(--night)" />
        </section>

        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                {/* Video Player */}
                <Reveal>
                  <div className="glass-card overflow-hidden p-2 sm:p-3 mb-8">
                    <div className="relative aspect-video overflow-hidden rounded-2xl bg-night">
                      <iframe
                        className="absolute inset-0 h-full w-full"
                        src={`https://www.youtube.com/embed/${sermon.youtubeId}`}
                        title={sermon.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </Reveal>

                {/* Sermon Info */}
                <Reveal delay={100}>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    <div className="glass-card p-4">
                      <div className="flex items-center gap-2 text-muted-foreground mb-1">
                        <User size={16} className="text-dawn" />
                        <span className="text-xs">Preacher</span>
                      </div>
                      <p className="font-semibold">{sermon.preacher}</p>
                    </div>
                    <div className="glass-card p-4">
                      <div className="flex items-center gap-2 text-muted-foreground mb-1">
                        <Calendar size={16} className="text-dawn" />
                        <span className="text-xs">Date</span>
                      </div>
                      <p className="font-semibold">{sermon.date}</p>
                    </div>
                    <div className="glass-card p-4">
                      <div className="flex items-center gap-2 text-muted-foreground mb-1">
                        <BookMarked size={16} className="text-dawn" />
                        <span className="text-xs">Scripture</span>
                      </div>
                      <p className="font-semibold text-sm">{sermon.scripture}</p>
                    </div>
                    <div className="glass-card p-4">
                      <div className="flex items-center gap-2 text-muted-foreground mb-1">
                        <span className="text-xs">Duration</span>
                      </div>
                      <p className="font-semibold">{sermon.duration}</p>
                    </div>
                  </div>
                </Reveal>

                {/* Description */}
                <Reveal delay={150}>
                  <div className="glass-card p-8 mb-8">
                    <h2 className="font-display text-2xl font-semibold mb-4">About This Sermon</h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">{sermon.description}</p>
                    <p className="text-muted-foreground leading-relaxed">
                      This sermon explores the depths of Scripture and offers practical encouragement for
                      applying God&apos;s Word in daily life. Wherever you are on your journey, we hope this
                      message brings clarity, comfort, and renewed faith.
                    </p>
                  </div>
                </Reveal>

                {/* Action Buttons */}
                <div className="flex flex-col md:flex-row gap-4">
                  <button className="flex items-center justify-center gap-2 flex-1 rounded-full bg-gradient-to-r from-dawn to-ember text-night py-3 font-semibold transition hover:-translate-y-0.5">
                    <Share2 size={18} />
                    Share
                  </button>
                  <button className="flex items-center justify-center gap-2 flex-1 rounded-full border-2 border-primary text-primary py-3 font-semibold hover:bg-primary/10 transition">
                    <Download size={18} />
                    Download
                  </button>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1 space-y-6">
                {/* Related Sermons */}
                <Reveal>
                  <div className="glass-card p-6">
                    <h3 className="font-display text-xl font-semibold mb-4">More Sermons</h3>
                    <div className="space-y-3">
                      {sermons
                        .filter((s) => s.id !== sermon.id)
                        .map((relatedSermon) => (
                          <Link
                            key={relatedSermon.id}
                            href={`/sermons/${relatedSermon.id}`}
                            className="group flex gap-3 rounded-xl p-2 transition hover:bg-dawn/10"
                          >
                            <div className="relative h-14 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-night">
                              <img
                                src={`https://img.youtube.com/vi/${relatedSermon.youtubeId}/hqdefault.jpg`}
                                alt={relatedSermon.title}
                                className="h-full w-full object-cover"
                              />
                              <span className="absolute inset-0 flex items-center justify-center bg-night/30">
                                <Play size={14} className="text-white" fill="currentColor" />
                              </span>
                            </div>
                            <div>
                              <h4 className="font-semibold text-sm line-clamp-2 group-hover:text-dawn transition">
                                {relatedSermon.title}
                              </h4>
                              <p className="text-xs text-muted-foreground mt-1">{relatedSermon.date}</p>
                            </div>
                          </Link>
                        ))}
                    </div>
                  </div>
                </Reveal>

                {/* Scripture Reference */}
                <Reveal delay={100}>
                  <div className="glass-card p-6 border-dawn/30">
                    <h4 className="font-display font-semibold mb-2">Scripture Reference</h4>
                    <p className="text-sm text-muted-foreground mb-4">This sermon is based on:</p>
                    <p className="font-display font-semibold text-dawn text-lg">{sermon.scripture}</p>
                    <p className="text-xs text-muted-foreground mt-4">
                      Look up this passage to deepen your understanding of the message.
                    </p>
                  </div>
                </Reveal>

                {/* All Sermons CTA */}
                <Reveal delay={150}>
                  <div className="glass-card p-6 text-center">
                    <h4 className="font-display font-semibold mb-3">Want More?</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Explore the full sermon library for more messages from Hilltop.
                    </p>
                    <Link
                      href="/sermons"
                      className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground py-2.5 font-semibold text-sm transition hover:opacity-90"
                    >
                      Browse Library <ArrowRight size={15} />
                    </Link>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
