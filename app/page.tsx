import Header from '@/components/header';
import Footer from '@/components/footer';
import Link from 'next/link';
import { ArrowRight, Heart, Users, BookOpen } from 'lucide-react';
import { heroContent, events, sermons } from '@/lib/data';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary to-primary/80 text-primary-foreground py-20 md:py-32">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {heroContent.title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              {heroContent.subtitle}
            </p>
            <p className="text-lg mb-12 max-w-2xl mx-auto opacity-85">
              {heroContent.description}
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition flex items-center justify-center gap-2"
              >
                {heroContent.primaryCta}
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/sermons"
                className="border-2 border-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary-foreground/10 transition"
              >
                {heroContent.secondaryCta}
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-lg bg-card">
                <Heart className="w-12 h-12 mx-auto mb-4 text-accent" />
                <h3 className="text-xl font-bold mb-2">Spiritual Growth</h3>
                <p className="text-muted-foreground">
                  Deepen your faith through worship, teaching, and community.
                </p>
              </div>
              <div className="text-center p-6 rounded-lg bg-card">
                <Users className="w-12 h-12 mx-auto mb-4 text-accent" />
                <h3 className="text-xl font-bold mb-2">Strong Community</h3>
                <p className="text-muted-foreground">
                  Connect with others on a shared spiritual journey.
                </p>
              </div>
              <div className="text-center p-6 rounded-lg bg-card">
                <BookOpen className="w-12 h-12 mx-auto mb-4 text-accent" />
                <h3 className="text-xl font-bold mb-2">Inspiring Teaching</h3>
                <p className="text-muted-foreground">
                  Explore Scripture and discover God's love and purpose for your life.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-16 md:py-24 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Upcoming Events</h2>
              <p className="text-muted-foreground text-lg">Join us for worship and fellowship</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {events.slice(0, 4).map((event) => (
                <div
                  key={event.id}
                  className="bg-background border border-border rounded-lg overflow-hidden hover:shadow-lg transition"
                >
                  <div className="h-40 bg-gradient-to-r from-accent to-accent/50"></div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                    <div className="space-y-2 text-sm text-muted-foreground mb-4">
                      <p>📅 {event.date}</p>
                      <p>🕐 {event.time}</p>
                      <p>📍 {event.location}</p>
                    </div>
                    <p className="text-foreground mb-4">{event.description}</p>
                    <Link
                      href="/events"
                      className="text-accent font-semibold hover:opacity-80 transition flex items-center gap-2"
                    >
                      Learn More <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                href="/events"
                className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition inline-flex items-center gap-2"
              >
                View All Events <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>

        {/* Latest Sermons */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Sermons</h2>
              <p className="text-muted-foreground text-lg">Inspiring messages for your faith journey</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {sermons.map((sermon) => (
                <div
                  key={sermon.id}
                  className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition"
                >
                  <div className="h-40 bg-gradient-to-r from-primary to-primary/50"></div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-2">{sermon.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      by {sermon.preacher}
                    </p>
                    <p className="text-sm text-accent font-semibold mb-4">{sermon.scripture}</p>
                    <p className="text-sm text-foreground mb-4 line-clamp-2">
                      {sermon.description}
                    </p>
                    <Link
                      href={`/sermons/${sermon.id}`}
                      className="text-primary font-semibold hover:opacity-80 transition flex items-center gap-2"
                    >
                      Watch Sermon <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                href="/sermons"
                className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition inline-flex items-center gap-2"
              >
                View All Sermons <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Join Our Community?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Whether you&apos;re exploring faith or deepening your spiritual journey, we welcome you with open arms.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition"
              >
                Get in Touch
              </Link>
              <Link
                href="/about"
                className="border-2 border-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary-foreground/10 transition"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
