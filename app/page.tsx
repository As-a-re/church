import Header from '@/components/header';
import Footer from '@/components/footer';
import Link from 'next/link';
import {
  ArrowRight,
  Calendar,
  Clock,
  MapPin,
  Flame,
  Users,
  HandHeart,
  ChevronDown,
  Play,
} from 'lucide-react';
import { heroContent, events, sermons, churchInfo, corePillars, galleryImages, verses } from '@/lib/data';
import AuroraBackground from '@/components/aurora-background';
import HillDivider from '@/components/hill-divider';
import Reveal from '@/components/reveal';
import TiltCard from '@/components/tilt-card';
import StatCounter from '@/components/stat-counter';
import GalleryCarousel from '@/components/gallery-carousel';
import VideoSpotlight from '@/components/video-spotlight';
import VerseCarousel from '@/components/verse-carousel';

const pillarIcons = { Flame, Users, HandHeart };

const schedule = churchInfo.service.split('|').map((entry) => {
  const [day, ...rest] = entry.trim().split(':');
  return { day: day.trim(), detail: rest.join(':').trim() };
});

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* ================= HERO ================= */}
        <section className="relative overflow-hidden bg-night text-white">
          <AuroraBackground />
          <div className="relative z-10 container mx-auto px-4 pt-32 pb-28 md:pt-44 md:pb-36">
            <div className="mx-auto max-w-4xl text-center">
              <p className="eyebrow text-dawn mb-5 animate-float">
                Church of Christ · Hilltop, Kwabenya
              </p>
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-semibold leading-[1.08]">
                Where Faith
                <br />
                Finds Its{' '}
                <span className="text-gradient-dawn">Light</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
                {heroContent.subtitle}
              </p>
              <p className="mt-4 text-base md:text-lg text-white/60 max-w-2xl mx-auto">
                {heroContent.description}
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-dawn to-ember px-8 py-3.5 text-base font-semibold text-night shadow-xl shadow-dawn/25 transition hover:shadow-dawn/40 hover:-translate-y-0.5"
                >
                  {heroContent.primaryCta}
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/sermons"
                  className="glass inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-base font-semibold text-white transition hover:bg-white/10"
                >
                  <Play size={16} fill="currentColor" />
                  {heroContent.secondaryCta}
                </Link>
              </div>
            </div>

            {/* Floating service schedule card */}
            <Reveal delay={200} className="mx-auto mt-16 max-w-3xl">
              <div className="glass-card animate-float grid grid-cols-1 gap-6 rounded-3xl p-6 sm:grid-cols-3 sm:p-8">
                {schedule.map((item) => (
                  <div key={item.day} className="text-center sm:text-left">
                    <p className="eyebrow text-dawn-soft">{item.day}</p>
                    <p className="mt-2 text-sm text-white/85">{item.detail}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <div className="mt-16 flex justify-center text-white/40">
              <ChevronDown className="animate-float" />
            </div>
          </div>
          <HillDivider fill="var(--background)" backFill="var(--night)" />
        </section>

        {/* ================= WELCOME / PILLARS ================= */}
        <section className="relative py-20 md:py-28">
          <div className="container mx-auto px-4">
            <Reveal className="mx-auto max-w-3xl text-center">
              <p className="eyebrow text-dawn mb-4">Welcome Home</p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold">
                A family that worships, grows, and serves together
              </h2>
              <p className="mt-5 text-lg text-muted-foreground">{churchInfo.aboutUs}</p>
            </Reveal>

            <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
              {corePillars.map((pillar, i) => {
                const Icon = pillarIcons[pillar.icon as keyof typeof pillarIcons];
                return (
                  <Reveal key={pillar.title} delay={i * 120}>
                    <TiltCard className="h-full">
                      <div className="glass-card flex h-full flex-col items-center gap-4 rounded-3xl p-8 text-center">
                        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-dawn to-ember text-night">
                          <Icon size={26} />
                        </span>
                        <h3 className="font-display text-xl font-semibold">{pillar.title}</h3>
                        <p className="text-sm text-muted-foreground">{pillar.description}</p>
                      </div>
                    </TiltCard>
                  </Reveal>
                );
              })}
            </div>

            <Reveal delay={150} className="mt-20 grid grid-cols-1 gap-10 rounded-3xl border border-border bg-card/40 p-10 sm:grid-cols-3">
              <StatCounter value={3} label="Weekly Gatherings" />
              <StatCounter value={5} label="Ministry Teams" />
              <StatCounter value={100} suffix="%" label="Open To Everyone" />
            </Reveal>
          </div>
        </section>

        {/* ================= GALLERY ================= */}
        <section className="relative py-20 md:py-28 bg-secondary/40">
          <div className="container mx-auto px-4">
            <Reveal className="mx-auto max-w-2xl text-center mb-12">
              <p className="eyebrow text-dawn mb-4">Moments at Hilltop</p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold">
                Life, captured in worship
              </h2>
              <p className="mt-5 text-lg text-muted-foreground">
                A glimpse into the gatherings, voices, and faces that make Hilltop feel like home.
              </p>
            </Reveal>

            <Reveal delay={150} className="mx-auto max-w-4xl">
              <GalleryCarousel slides={galleryImages} />
            </Reveal>
          </div>
        </section>

        {/* ================= VIDEO SPOTLIGHT ================= */}
        <section className="relative py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
              <Reveal>
                <p className="eyebrow text-dawn mb-4">Worship With Us</p>
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold">
                  Can&apos;t join us in person? Worship is one click away
                </h2>
                <p className="mt-5 text-lg text-muted-foreground">
                  Watch our most recent message, &ldquo;{sermons[0].title}&rdquo; by {sermons[0].preacher},
                  on {sermons[0].scripture}. {sermons[0].description}
                </p>
                <Link
                  href="/sermons"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
                >
                  Browse Sermon Library
                  <ArrowRight size={16} />
                </Link>
              </Reveal>
              <Reveal delay={150}>
                <VideoSpotlight youtubeId={sermons[0].youtubeId} title={sermons[0].title} />
              </Reveal>
            </div>
          </div>
        </section>

        {/* ================= UPCOMING EVENTS ================= */}
        <section className="relative py-20 md:py-28 overflow-hidden bg-night text-white">
          <AuroraBackground className="opacity-50" />
          <HillDivider fill="var(--background)" flip className="absolute top-0" />
          <div className="relative z-10 container mx-auto px-4 pt-10">
            <Reveal className="mx-auto max-w-2xl text-center mb-14">
              <p className="eyebrow text-dawn mb-4">What&apos;s Happening</p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold">
                Gather with us this week
              </h2>
              <p className="mt-5 text-lg text-white/70">
                Worship, fellowship, and service — every week has a place for you.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {events.map((event, i) => (
                <Reveal key={event.id} delay={i * 100}>
                  <TiltCard>
                    <div className="glass-card h-full rounded-3xl p-7">
                      <h3 className="font-display text-xl font-semibold text-white">{event.title}</h3>
                      <div className="mt-4 space-y-2 text-sm text-white/70">
                        <p className="flex items-center gap-2">
                          <Calendar size={15} className="text-dawn" /> {event.date}
                        </p>
                        <p className="flex items-center gap-2">
                          <Clock size={15} className="text-dawn" /> {event.time}
                        </p>
                        <p className="flex items-center gap-2">
                          <MapPin size={15} className="text-dawn" /> {event.location}
                        </p>
                      </div>
                      <p className="mt-4 text-white/80">{event.description}</p>
                      <Link
                        href="/events"
                        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-dawn hover:text-dawn-soft"
                      >
                        Learn More <ArrowRight size={15} />
                      </Link>
                    </div>
                  </TiltCard>
                </Reveal>
              ))}
            </div>

            <div className="mt-14 text-center">
              <Link
                href="/events"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-dawn to-ember px-7 py-3 text-sm font-semibold text-night transition hover:-translate-y-0.5"
              >
                View All Events <ArrowRight size={16} />
              </Link>
            </div>
          </div>
          <HillDivider fill="var(--background)" backFill="var(--night)" className="mt-10" />
        </section>

        {/* ================= LATEST SERMONS ================= */}
        <section className="relative py-20 md:py-28">
          <div className="container mx-auto px-4">
            <Reveal className="mx-auto max-w-2xl text-center mb-14">
              <p className="eyebrow text-dawn mb-4">Latest Sermons</p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold">
                Messages to carry with you
              </h2>
              <p className="mt-5 text-lg text-muted-foreground">
                Catch up on the Word, wherever you are.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {sermons.map((sermon, i) => (
                <Reveal key={sermon.id} delay={i * 100}>
                  <TiltCard className="h-full">
                    <Link href={`/sermons/${sermon.id}`} className="glass-card group flex h-full flex-col overflow-hidden rounded-3xl">
                      <div className="relative aspect-video overflow-hidden bg-night">
                        <img
                          src={`https://img.youtube.com/vi/${sermon.youtubeId}/hqdefault.jpg`}
                          alt={sermon.title}
                          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-night/30 transition group-hover:bg-night/10" />
                        <span className="absolute inset-0 flex items-center justify-center">
                          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-dawn text-night shadow-lg transition group-hover:scale-110">
                            <Play size={18} fill="currentColor" />
                          </span>
                        </span>
                      </div>
                      <div className="flex flex-1 flex-col p-6">
                        <h3 className="font-display text-lg font-semibold">{sermon.title}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">by {sermon.preacher}</p>
                        <p className="mt-3 eyebrow text-dawn">{sermon.scripture}</p>
                        <p className="mt-3 text-sm text-muted-foreground line-clamp-2">{sermon.description}</p>
                        <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                          Watch Sermon <ArrowRight size={15} />
                        </span>
                      </div>
                    </Link>
                  </TiltCard>
                </Reveal>
              ))}
            </div>

            <div className="mt-14 text-center">
              <Link
                href="/sermons"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
              >
                View All Sermons <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* ================= WORDS TO LIVE BY ================= */}
        <section className="relative py-20 md:py-28 bg-secondary/40">
          <div className="container mx-auto px-4">
            <Reveal className="mx-auto max-w-2xl text-center mb-4">
              <p className="eyebrow text-dawn">Words To Live By</p>
            </Reveal>
            <Reveal delay={100}>
              <VerseCarousel verses={verses} />
            </Reveal>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="relative overflow-hidden bg-night text-white">
          <AuroraBackground />
          <div className="relative z-10 container mx-auto px-4 py-24 md:py-32 text-center">
            <Reveal>
              <p className="eyebrow text-dawn mb-4">Join Us This Sunday</p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-semibold max-w-3xl mx-auto">
                There&apos;s a seat on the hill waiting for you
              </h2>
              <p className="mt-6 text-lg md:text-xl text-white/75 max-w-2xl mx-auto">
                Whether you&apos;re exploring faith or deepening your walk, come as you are —
                we&apos;d love to welcome you home.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-dawn to-ember px-8 py-3.5 text-base font-semibold text-night shadow-xl shadow-dawn/25 transition hover:-translate-y-0.5"
                >
                  Plan Your Visit
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href="/about"
                  className="glass inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-base font-semibold text-white transition hover:bg-white/10"
                >
                  Learn About Us
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
