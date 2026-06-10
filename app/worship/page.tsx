import Header from '@/components/header';
import Footer from '@/components/footer';
import Link from 'next/link';
import { Calendar, Clock, MapPin, PlayCircle, ArrowRight } from 'lucide-react';

export default function LiveWorshipPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Live Worship Center</h1>
            <p className="text-xl opacity-90">Join us online for live worship experiences</p>
          </div>
        </section>

        {/* Live Stream Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            {/* Stream Player */}
            <div className="bg-black rounded-lg overflow-hidden mb-12 shadow-xl">
              <div className="aspect-video bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center">
                <div className="text-center">
                  <PlayCircle size={80} className="text-accent mx-auto mb-4 opacity-80" />
                  <p className="text-white text-xl font-semibold">
                    Next Service: Sunday 8:00 AM
                  </p>
                  <p className="text-white/70 mt-2">
                    Click to join the live stream when service begins
                  </p>
                </div>
              </div>
            </div>

            {/* Service Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <div className="bg-card p-6 rounded-lg border border-border text-center">
                <Calendar className="w-12 h-12 mx-auto mb-4 text-accent" />
                <h3 className="font-bold text-lg mb-2">Every Sunday</h3>
                <p className="text-muted-foreground">Join us for two worship services</p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border text-center">
                <Clock className="w-12 h-12 mx-auto mb-4 text-accent" />
                <h3 className="font-bold text-lg mb-2">8:00 AM & 10:00 AM</h3>
                <p className="text-muted-foreground">Services available in-person and online</p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border text-center">
                <MapPin className="w-12 h-12 mx-auto mb-4 text-accent" />
                <h3 className="font-bold text-lg mb-2">Main Sanctuary</h3>
                <p className="text-muted-foreground">456 Faith Avenue, Springfield, IL</p>
              </div>
            </div>

            {/* How to Join */}
            <div className="bg-card p-8 rounded-lg border border-border mb-16">
              <h2 className="text-3xl font-bold mb-6">How to Join the Live Stream</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Visit our website</h4>
                      <p className="text-muted-foreground">Go to this page during service time (8:00 AM or 10:00 AM)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Click the play button</h4>
                      <p className="text-muted-foreground">The live stream will appear above and play automatically</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Enjoy worship</h4>
                      <p className="text-muted-foreground">Experience the service from home in high quality</p>
                    </div>
                  </div>
                </div>

                <div className="bg-background p-6 rounded-lg border border-border">
                  <h4 className="font-bold mb-4">System Requirements</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✓ Internet connection (high-speed recommended)</li>
                    <li>✓ Modern web browser (Chrome, Safari, Firefox, Edge)</li>
                    <li>✓ Speakers or headphones for audio</li>
                    <li>✓ Computer, tablet, or smartphone</li>
                  </ul>
                  <p className="text-xs text-muted-foreground mt-4">
                    For best experience, ensure your internet speed is at least 5 Mbps for HD quality.
                  </p>
                </div>
              </div>
            </div>

            {/* Sermon Archive */}
            <div className="bg-card p-8 rounded-lg border border-border">
              <h2 className="text-3xl font-bold mb-4">Missed a Service?</h2>
              <p className="text-muted-foreground mb-6">
                All our past services are archived and available on-demand. Browse our full sermon library to watch any 
                message you may have missed.
              </p>
              <Link
                href="/sermons"
                className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition inline-flex items-center gap-2"
              >
                View Sermon Archive <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
