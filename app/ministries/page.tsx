import Header from '@/components/header';
import Footer from '@/components/footer';
import PageHero from '@/components/page-hero';
import Reveal from '@/components/reveal';
import TiltCard from '@/components/tilt-card';
import { ministries } from '@/lib/data';
import { ArrowRight, Heart, Users, BookOpen } from 'lucide-react';

const icons = [Heart, BookOpen, Users];

export default function MinistriesPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Get Involved"
          title="Our Ministries"
          subtitle="Discover the different ministries serving the church, strengthening our members, and reaching the wider community."
        />
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ministries.map((ministry, i) => {
                const Icon = icons[i % icons.length];
                return (
                  <Reveal key={ministry.title} delay={(i % 3) * 80}>
                    <TiltCard className="h-full">
                      <div className="glass-card h-full p-7">
                        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-dawn to-ember text-night mb-5">
                          <Icon size={22} />
                        </span>
                        <h2 className="font-display text-xl font-semibold mb-3">{ministry.title}</h2>
                        <p className="text-muted-foreground leading-relaxed">{ministry.description}</p>
                        <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                          Learn about this ministry <ArrowRight size={15} />
                        </div>
                      </div>
                    </TiltCard>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
