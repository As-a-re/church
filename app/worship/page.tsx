import Header from '@/components/header';
import Footer from '@/components/footer';
import Link from 'next/link';
import { Calendar, Clock, MapPin, ArrowRight, Wifi, Smartphone, Headphones, Globe } from 'lucide-react';
import { churchInfo, sermons } from '@/lib/data';
import PageHero from '@/components/page-hero';
import Reveal from '@/components/reveal';
import TiltCard from '@/components/tilt-card';
import VideoSpotlight from '@/components/video-spotlight';

const requirements = [
  { icon: Wifi, text: 'A stable internet connection (high-speed recommended)' },
  { icon: Globe, text: 'A modern web browser — Chrome, Safari, Firefox or Edge' },
  { icon: Headphones, text: 'Speakers or headphones for clear audio' },
  { icon: Smartphone, text: 'Any computer, tablet, or smartphone' },
];

export default function LiveWorshipPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Live Worship"
          title="Worship From Anywhere"
          subtitle="Join us online — live every Sunday, or revisit a past service anytime."
        />

        {/* Stream / Spotlight Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <Reveal className="mb-16">
              <VideoSpotlight youtubeId={sermons[0].youtubeId} title="Watch our latest service" />
              <p className="mt-10 text-center text-sm text-muted-foreground">
                During live service hours, this space streams live on{' '}
                <a
                  href="https://www.youtube.com/channel/UCRv0JKLgsiaunzmfNHjmAcw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dawn hover:text-ember font-medium"
                >
                  our YouTube channel
                </a>
                . Outside of service hours, enjoy our most recent message above.
              </p>
            </Reveal>

            {/* Service Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <Reveal>
                <TiltCard className="h-full">
                  <div className="glass-card h-full p-6 text-center">
                    <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-dawn to-ember text-night">
                      <Calendar size={26} />
                    </span>
                    <h3 className="font-display font-semibold text-lg mb-2">Every Sunday</h3>
                    <p className="text-muted-foreground">Celebration of the Lord&apos;s Day — worship, prayer and teaching together.</p>
                  </div>
                </TiltCard>
              </Reveal>
              <Reveal delay={100}>
                <TiltCard className="h-full">
                  <div className="glass-card h-full p-6 text-center">
                    <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-dawn to-ember text-night">
                      <Clock size={26} />
                    </span>
                    <h3 className="font-display font-semibold text-lg mb-2">8:30 - 11:00 AM</h3>
                    <p className="text-muted-foreground">Available in person and streamed live online.</p>
                  </div>
                </TiltCard>
              </Reveal>
              <Reveal delay={200}>
                <TiltCard className="h-full">
                  <div className="glass-card h-full p-6 text-center">
                    <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-dawn to-ember text-night">
                      <MapPin size={26} />
                    </span>
                    <h3 className="font-display font-semibold text-lg mb-2">Main Sanctuary</h3>
                    <p className="text-muted-foreground">Kwabenya, Accra &middot; {churchInfo.address}</p>
                  </div>
                </TiltCard>
              </Reveal>
            </div>

            {/* How to Join */}
            <Reveal className="glass-card p-8 mb-16">
              <h2 className="font-display text-2xl md:text-3xl font-semibold mb-6">How to Join the Live Stream</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-5">
                  {[
                    { title: 'Visit this page', text: 'Come back here during service time (Sundays, 8:30 AM - 11:00 AM GMT).' },
                    { title: 'Press play', text: 'The live stream will appear above once the service begins.' },
                    { title: 'Worship with us', text: 'Sing, pray and listen along — from wherever you are.' },
                  ].map((step, i) => (
                    <div key={step.title} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-dawn to-ember text-night flex items-center justify-center font-bold">
                        {i + 1}
                      </div>
                      <div>
                        <h4 className="font-display font-semibold mb-1">{step.title}</h4>
                        <p className="text-muted-foreground">{step.text}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl bg-secondary/50 p-6">
                  <h4 className="font-display font-semibold mb-4">Good to Know</h4>
                  <ul className="space-y-2.5 text-sm text-muted-foreground">
                    {requirements.map((req) => {
                      const Icon = req.icon;
                      return (
                        <li key={req.text} className="flex items-start gap-2.5">
                          <Icon size={16} className="mt-0.5 text-dawn flex-shrink-0" />
                          {req.text}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </Reveal>

            {/* Sermon Archive */}
            <Reveal className="glass-card p-8 text-center">
              <h2 className="font-display text-2xl md:text-3xl font-semibold mb-4">Missed a Service?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                All our past services are archived and available on demand. Browse our full sermon library
                to watch any message you may have missed.
              </p>
              <Link
                href="/sermons"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-dawn to-ember px-6 py-3 font-semibold text-night transition hover:-translate-y-0.5"
              >
                View Sermon Archive <ArrowRight size={18} />
              </Link>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
