import Header from '@/components/header';
import Footer from '@/components/footer';
import { sermons } from '@/lib/data';
import Link from 'next/link';
import { Calendar, User, BookMarked, Share2, Download, ArrowLeft } from 'lucide-react';
import { notFound } from 'next/navigation';

export default function SermonDetailPage({ params }: { params: { id: string } }) {
  const sermon = sermons.find((s) => s.id === parseInt(params.id));

  if (!sermon) {
    notFound();
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-8 md:py-16">
          <div className="container mx-auto px-4">
            <Link href="/sermons" className="flex items-center gap-2 opacity-80 hover:opacity-100 transition mb-4 w-fit">
              <ArrowLeft size={20} />
              Back to Sermons
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{sermon.title}</h1>
            <p className="text-xl opacity-90">A message by {sermon.preacher}</p>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                {/* Video Player */}
                <div className="aspect-video bg-black rounded-lg overflow-hidden mb-8 shadow-lg">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${sermon.youtubeId}`}
                    title={sermon.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>

                {/* Sermon Info */}
                <div className="space-y-6 mb-12">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-card p-4 rounded-lg border border-border">
                      <div className="flex items-center gap-2 text-muted-foreground mb-1">
                        <User size={16} className="text-accent" />
                        <span className="text-xs">Preacher</span>
                      </div>
                      <p className="font-semibold">{sermon.preacher}</p>
                    </div>
                    <div className="bg-card p-4 rounded-lg border border-border">
                      <div className="flex items-center gap-2 text-muted-foreground mb-1">
                        <Calendar size={16} className="text-accent" />
                        <span className="text-xs">Date</span>
                      </div>
                      <p className="font-semibold">{sermon.date}</p>
                    </div>
                    <div className="bg-card p-4 rounded-lg border border-border">
                      <div className="flex items-center gap-2 text-muted-foreground mb-1">
                        <BookMarked size={16} className="text-accent" />
                        <span className="text-xs">Scripture</span>
                      </div>
                      <p className="font-semibold text-sm">{sermon.scripture}</p>
                    </div>
                    <div className="bg-card p-4 rounded-lg border border-border">
                      <div className="flex items-center gap-2 text-muted-foreground mb-1">
                        <span className="text-xs">Duration</span>
                      </div>
                      <p className="font-semibold">{sermon.duration}</p>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="bg-card p-8 rounded-lg border border-border mb-8">
                  <h2 className="text-2xl font-bold mb-4">About This Sermon</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {sermon.description}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    This sermon explores the depths of Scripture and provides practical insights for applying 
                    God&apos;s Word in your daily life. Whether you&apos;re seeking spiritual growth, encouragement, 
                    or clarity on your faith journey, this message offers timeless wisdom and biblical truth.
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col md:flex-row gap-4">
                  <button className="flex items-center justify-center gap-2 flex-1 bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition">
                    <Share2 size={18} />
                    Share
                  </button>
                  <button className="flex items-center justify-center gap-2 flex-1 border-2 border-primary text-primary py-3 rounded-lg font-semibold hover:bg-primary/10 transition">
                    <Download size={18} />
                    Download
                  </button>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1 space-y-6">
                {/* Related Sermons */}
                <div className="bg-card p-6 rounded-lg border border-border">
                  <h3 className="text-xl font-bold mb-4">More Sermons</h3>
                  <div className="space-y-4">
                    {sermons
                      .filter((s) => s.id !== sermon.id)
                      .map((relatedSermon) => (
                        <Link
                          key={relatedSermon.id}
                          href={`/sermons/${relatedSermon.id}`}
                          className="block p-3 bg-background rounded-lg border border-border hover:shadow-lg transition"
                        >
                          <h4 className="font-semibold text-sm line-clamp-2 hover:text-accent">
                            {relatedSermon.title}
                          </h4>
                          <p className="text-xs text-muted-foreground mt-1">{relatedSermon.date}</p>
                        </Link>
                      ))}
                  </div>
                </div>

                {/* Scripture Reference */}
                <div className="bg-accent/10 border border-accent p-6 rounded-lg">
                  <h4 className="font-bold mb-2">Scripture Reference</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    This sermon is based on:
                  </p>
                  <p className="font-semibold text-accent text-lg">{sermon.scripture}</p>
                  <p className="text-xs text-muted-foreground mt-4">
                    Look up this passage to deepen your understanding of the message.
                  </p>
                </div>

                {/* Study Notes CTA */}
                <div className="bg-card p-6 rounded-lg border border-border text-center">
                  <h4 className="font-bold mb-3">Sermon Notes Available</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Download free study notes to go deeper into this message.
                  </p>
                  <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg font-semibold text-sm hover:opacity-90 transition">
                    Get Study Notes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
