import Header from '@/components/header';
import Footer from '@/components/footer';
import PageHero from '@/components/page-hero';
import Reveal from '@/components/reveal';
import TiltCard from '@/components/tilt-card';
import { churchInfo } from '@/lib/data';
import { MapPin, Phone, Mail, Clock, Flame, BookOpen, Users, HandHeart, Heart, MessageCircle } from 'lucide-react';

const ministries = [
  {
    title: 'Worship & Prayer',
    icon: Flame,
    description:
      'Experience transformative worship through contemporary and traditional song, corporate prayer, and intimate connection with God.',
  },
  {
    title: 'Bible Study & Classes',
    icon: BookOpen,
    description:
      'Grow in knowledge and community through our Wednesday Bible studies and discussion groups for all ages and stages.',
  },
  {
    title: 'Children & Youth',
    icon: Users,
    description:
      'Dedicated programs that nurture the faith of our youngest members through age-appropriate teaching and activities.',
  },
  {
    title: 'Community Outreach',
    icon: HandHeart,
    description:
      'Serve Kwabenya and the wider community through volunteer outreach, support drives and compassionate ministry.',
  },
  {
    title: 'Small Groups',
    icon: Heart,
    description:
      'Connect deeply with others through fellowship circles, prayer partnerships and accountability groups.',
  },
  {
    title: 'Counseling & Care',
    icon: MessageCircle,
    description:
      'Access compassionate pastoral support and prayer during seasons of need, change, or spiritual struggle.',
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Our Story"
          title="About Hilltop"
          subtitle="Our history, our mission, and the community we're building together on the hill in Kwabenya."
        />

        {/* Story */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
              <Reveal>
                <p className="eyebrow text-dawn mb-4">Who We Are</p>
                <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6">A family rooted in faith</h2>
                <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                  Church of Christ Hilltop is a welcoming community in Kwabenya, dedicated to spreading the
                  Gospel, fostering spiritual growth, and serving our neighbors with love and compassion.
                </p>
                <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                  Every week we gather to worship, study God&apos;s Word, and pray together — building a
                  family where faith is lived out, not just spoken about.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Wherever you are on your journey, there&apos;s a place for you here on the hill.
                </p>
              </Reveal>
              <Reveal delay={150}>
                <div className="relative aspect-square rounded-3xl bg-gradient-to-br from-night via-primary to-dawn/40 glass-card overflow-hidden flex items-center justify-center">
                  <svg viewBox="0 0 200 200" className="h-2/3 w-2/3 opacity-80">
                    <circle cx="120" cy="60" r="34" fill="var(--dawn)" opacity="0.9" />
                    <path d="M0,140 C40,90 80,160 120,110 C150,70 180,130 200,100 L200,200 L0,200 Z" fill="var(--night-deep)" />
                  </svg>
                </div>
              </Reveal>
            </div>

            {/* Mission / Vision / Values */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
              <Reveal>
                <div className="glass-card h-full p-8">
                  <h3 className="font-display text-2xl font-semibold mb-4 text-dawn">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To spread the Gospel of Jesus Christ, nurture spiritual growth in our members, and serve
                    our community with love, integrity, and compassion.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <div className="glass-card h-full p-8">
                  <h3 className="font-display text-2xl font-semibold mb-4 text-dawn">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To be a vibrant, Christ-centered community where every person experiences transformative
                    faith and finds their purpose in serving others.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={200}>
                <div className="glass-card h-full p-8">
                  <h3 className="font-display text-2xl font-semibold mb-4 text-dawn">Our Values</h3>
                  <ul className="text-muted-foreground leading-relaxed space-y-2">
                    <li>Biblical Truth</li>
                    <li>Authentic Community</li>
                    <li>Servant Leadership</li>
                    <li>Compassionate Service</li>
                  </ul>
                </div>
              </Reveal>
            </div>

            {/* Contact / Visit */}
            <Reveal className="glass-card p-8 md:p-10 mb-20">
              <h2 className="font-display text-3xl font-semibold mb-8">Contact &amp; Visit Us</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-dawn to-ember text-night">
                      <MapPin size={20} />
                    </span>
                    <div>
                      <h4 className="font-display text-lg font-semibold mb-1">Location</h4>
                      <p className="text-muted-foreground">Kwabenya, Accra &middot; {churchInfo.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-dawn to-ember text-night">
                      <Clock size={20} />
                    </span>
                    <div>
                      <h4 className="font-display text-lg font-semibold mb-1">Service Times</h4>
                      <p className="text-muted-foreground">Sundays: Celebration of the Lord&apos;s Day (8:30 AM - 11:00 AM)</p>
                      <p className="text-muted-foreground">Wednesdays: Bible Studies (7:00 PM - 8:00 PM)</p>
                      <p className="text-muted-foreground">Fridays: Prayers/Songs (7:00 PM - 8:00 PM)</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-dawn to-ember text-night">
                      <Phone size={20} />
                    </span>
                    <div>
                      <h4 className="font-display text-lg font-semibold mb-1">Phone</h4>
                      <a href={`tel:${churchInfo.phone.split(' / ')[0]}`} className="text-dawn hover:text-ember transition">
                        {churchInfo.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-dawn to-ember text-night">
                      <Mail size={20} />
                    </span>
                    <div>
                      <h4 className="font-display text-lg font-semibold mb-1">Email</h4>
                      <a href={`mailto:${churchInfo.email}`} className="text-dawn hover:text-ember transition break-all">
                        {churchInfo.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Ministries */}
            <div>
              <Reveal className="text-center mb-10">
                <p className="eyebrow text-dawn mb-4">Get Involved</p>
                <h2 className="font-display text-3xl md:text-4xl font-semibold">Our Ministries</h2>
              </Reveal>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {ministries.map((ministry, i) => {
                  const Icon = ministry.icon;
                  return (
                    <Reveal key={ministry.title} delay={(i % 3) * 100}>
                      <TiltCard className="h-full">
                        <div className="glass-card h-full p-6">
                          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-dawn to-ember text-night mb-4">
                            <Icon size={22} />
                          </span>
                          <h3 className="font-display text-xl font-semibold mb-3">{ministry.title}</h3>
                          <p className="text-muted-foreground">{ministry.description}</p>
                        </div>
                      </TiltCard>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
