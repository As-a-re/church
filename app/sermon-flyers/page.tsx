import Header from '@/components/header';
import Footer from '@/components/footer';
import PageHero from '@/components/page-hero';
import Reveal from '@/components/reveal';
import TiltCard from '@/components/tilt-card';
import { sermonFlyers } from '@/lib/data';
import { Image as ImageIcon } from 'lucide-react';

export default function SermonFlyersPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Sermon Flyers"
          title="Share the Message"
          subtitle="A dedicated place for sermon and programme flyers. Replace the placeholders with the church's actual flyers."
        />
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {sermonFlyers.map((flyer, i) => (
                <Reveal key={flyer.id} delay={(i % 3) * 100}>
                  <TiltCard className="h-full">
                    <div className="glass-card h-full overflow-hidden">
                      <div className="aspect-[3/2] overflow-hidden bg-night">
                        <img src={flyer.image} alt={flyer.title} className="h-full w-full object-cover" />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-2 text-dawn mb-3">
                          <ImageIcon size={18} />
                          <span className="eyebrow">Flyer</span>
                        </div>
                        <h2 className="font-display text-xl font-semibold">{flyer.title}</h2>
                        <p className="mt-2 text-sm text-muted-foreground">{flyer.subtitle}</p>
                      </div>
                    </div>
                  </TiltCard>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
