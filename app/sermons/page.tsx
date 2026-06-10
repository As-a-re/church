import Header from '@/components/header';
import Footer from '@/components/footer';
import { sermons } from '@/lib/data';
import Link from 'next/link';
import { Calendar, User, BookMarked, ArrowRight } from 'lucide-react';

export default function SermonsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Sermon Library</h1>
            <p className="text-xl opacity-90">Inspiring messages for your spiritual journey</p>
          </div>
        </section>

        {/* Sermons Grid */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sermons.map((sermon) => (
                <div
                  key={sermon.id}
                  className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  {/* Video Thumbnail */}
                  <div className="relative w-full pt-[56.25%] bg-gradient-to-br from-primary to-primary/50">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                        <div className="w-0 h-0 border-l-8 border-l-accent-foreground border-t-5 border-t-transparent border-b-5 border-b-transparent ml-1"></div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 line-clamp-2">{sermon.title}</h3>

                    <div className="space-y-2 mb-6">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <User size={16} className="text-accent flex-shrink-0" />
                        <span>{sermon.preacher}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar size={16} className="text-accent flex-shrink-0" />
                        <span>{sermon.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <BookMarked size={16} className="text-accent flex-shrink-0" />
                        <span>{sermon.scripture}</span>
                      </div>
                    </div>

                    <p className="text-foreground text-sm mb-4 line-clamp-2">
                      {sermon.description}
                    </p>

                    <Link
                      href={`/sermons/${sermon.id}`}
                      className="text-accent font-semibold hover:opacity-80 transition flex items-center gap-2 text-sm"
                    >
                      Watch Full Sermon <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="bg-card p-8 rounded-lg border border-border text-center mt-16">
              <h2 className="text-2xl font-bold mb-4">Subscribe to Our Messages</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Stay updated with the latest sermons and spiritual content. Subscribe to our email list or follow us on social media.
              </p>
              <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition">
                Subscribe Now
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
