import { Heart, Smartphone, ShieldCheck, Copy } from 'lucide-react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import AuroraBackground from '@/components/aurora-background';
import HillDivider from '@/components/hill-divider';
import Reveal from '@/components/reveal';

export default function GivingPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-night text-white">
        <AuroraBackground />
        <div className="relative z-10 container mx-auto px-4 pt-28 pb-24 md:pt-36 md:pb-32 text-center">
          <span className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-dawn to-ember text-night animate-float">
            <Heart size={28} />
          </span>
          <p className="eyebrow text-dawn mb-4">Cheerful Giving</p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">
            Support the Work of the Church
          </h1>
          <p className="mt-5 text-lg md:text-xl max-w-2xl mx-auto text-white/75">
            Your generosity helps us spread the Gospel, support ministries, serve our community, and
            continue the work God has entrusted to us.
          </p>
        </div>
        <HillDivider fill="var(--background)" backFill="var(--night)" />
      </section>

      {/* Giving Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Reveal>
              <div className="glass-card p-8 md:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-dawn to-ember text-night">
                    <Smartphone size={22} />
                  </span>
                  <h2 className="font-display text-2xl font-semibold">Mobile Money Giving</h2>
                </div>

                <div className="space-y-5 text-lg text-foreground/90">
                  <p>Send your donation via Mobile Money &mdash; quick, simple, and secure.</p>

                  <div className="rounded-2xl border border-dawn/30 bg-secondary/50 p-6">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Mobile Money Number</p>
                        <p className="font-display text-2xl font-semibold text-dawn tracking-wide">0545015488</p>
                      </div>
                      <Copy size={20} className="text-muted-foreground" />
                    </div>
                    <div className="mt-4 border-t border-border pt-4">
                      <p className="text-sm text-muted-foreground mb-1">Recipient</p>
                      <p className="font-semibold">Church Finance Team</p>
                    </div>
                  </div>

                  <p className="flex items-start gap-2.5 text-base text-muted-foreground">
                    <ShieldCheck size={20} className="text-sage mt-0.5 flex-shrink-0" />
                    After sending, the church leadership manually verifies receipt from the Mobile Money
                    account &mdash; no online payment gateway or technical verification is required.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Scripture Card */}
            <Reveal delay={150} className="mt-10">
              <div className="rounded-3xl bg-gradient-to-br from-night via-primary to-night-deep p-10 text-center text-white">
                <blockquote className="font-display text-xl md:text-2xl italic leading-relaxed">
                  &ldquo;Each one must give as he has decided in his heart, not reluctantly or under
                  compulsion, for God loves a cheerful giver.&rdquo;
                </blockquote>
                <p className="mt-5 eyebrow text-dawn">2 Corinthians 9:7</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
