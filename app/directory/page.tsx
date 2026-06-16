import Header from '@/components/header';
import Footer from '@/components/footer';
import { directoryStaff } from '@/lib/data';
import { Mail, Phone } from 'lucide-react';
import PageHero from '@/components/page-hero';
import Reveal from '@/components/reveal';
import TiltCard from '@/components/tilt-card';

export default function DirectoryPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Meet The Team"
          title="Church Directory"
          subtitle="The people who lead, serve, and shepherd our Hilltop family."
        />

        {/* Directory */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {directoryStaff.map((staff, i) => (
                <Reveal key={staff.id} delay={(i % 3) * 100}>
                  <TiltCard className="h-full">
                    <div className="glass-card h-full overflow-hidden">
                      {/* Avatar Placeholder */}
                      <div className="h-40 bg-gradient-to-br from-night via-primary to-dawn/40 flex items-center justify-center">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-dawn to-ember flex items-center justify-center text-3xl font-display font-semibold text-night shadow-lg">
                          {staff.name.charAt(0)}
                        </div>
                      </div>

                      <div className="p-6">
                        <h3 className="font-display text-xl font-semibold mb-1">{staff.name}</h3>
                        <p className="text-dawn font-semibold mb-4">{staff.title}</p>

                        <div className="space-y-3 mb-6">
                          <div className="flex items-center gap-3">
                            <Mail size={18} className="text-muted-foreground flex-shrink-0" />
                            <a
                              href={`mailto:${staff.email}`}
                              className="text-sm text-dawn hover:text-ember transition break-all"
                            >
                              {staff.email}
                            </a>
                          </div>
                          <div className="flex items-center gap-3">
                            <Phone size={18} className="text-muted-foreground flex-shrink-0" />
                            <a
                              href={`tel:${staff.phone}`}
                              className="text-sm text-dawn hover:text-ember transition"
                            >
                              {staff.phone}
                            </a>
                          </div>
                        </div>

                        <a
                          href="/contact"
                          className="w-full inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground py-2.5 font-semibold hover:opacity-90 transition text-sm"
                        >
                          Get In Touch
                        </a>
                      </div>
                    </div>
                  </TiltCard>
                </Reveal>
              ))}
            </div>

            {/* Additional Info */}
            <Reveal className="glass-card p-8 text-center mt-16">
              <h2 className="font-display text-2xl md:text-3xl font-semibold mb-4">Need Something Specific?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                If you can&apos;t find what you&apos;re looking for or would like to connect with a specific ministry,
                please don&apos;t hesitate to reach out to our main office.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-dawn to-ember px-6 py-3 font-semibold text-night transition hover:-translate-y-0.5"
              >
                Contact Us
              </a>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
