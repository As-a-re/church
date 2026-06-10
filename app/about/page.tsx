import Header from '@/components/header';
import Footer from '@/components/footer';
import { churchInfo } from '@/lib/data';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Church of Christ Hilltop</h1>
            <p className="text-xl opacity-90">Our History, Mission, and Community</p>
          </div>
        </section>

        {/* About Content */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                  Church of Christ Hilltop was founded in 1985 with a simple mission: to glorify God and 
                  serve our community with love and compassion. What started as a small gathering of believers 
                  has grown into a thriving church family of over 500 active members.
                </p>
                <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                  Over the past four decades, we&apos;ve remained steadfast in our commitment to biblical 
                  teaching, authentic worship, and meaningful community outreach. Our church has become a 
                  beacon of faith and hope in Springfield.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Today, we continue to grow spiritually and numerically as we reach out to those seeking 
                  God&apos;s love and purpose for their lives.
                </p>
              </div>
              <div className="bg-gradient-to-br from-primary to-primary/50 rounded-lg h-96"></div>
            </div>

            {/* Mission & Values */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-card p-8 rounded-lg border border-border">
                <h3 className="text-2xl font-bold mb-4 text-accent">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To spread the Gospel of Jesus Christ, nurture spiritual growth in our members, and serve 
                  our community with love, integrity, and compassion.
                </p>
              </div>
              <div className="bg-card p-8 rounded-lg border border-border">
                <h3 className="text-2xl font-bold mb-4 text-accent">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be a vibrant, Christ-centered community where every person experiences transformative 
                  faith and finds their purpose in serving others.
                </p>
              </div>
              <div className="bg-card p-8 rounded-lg border border-border">
                <h3 className="text-2xl font-bold mb-4 text-accent">Our Values</h3>
                <ul className="text-muted-foreground leading-relaxed space-y-2">
                  <li>• Biblical Truth</li>
                  <li>• Authentic Community</li>
                  <li>• Servant Leadership</li>
                  <li>• Compassionate Service</li>
                </ul>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-card p-8 rounded-lg border border-border mb-16">
              <h2 className="text-3xl font-bold mb-8">Contact & Visit Us</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="text-accent flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h4 className="font-bold text-lg mb-1">Location</h4>
                      <p className="text-muted-foreground">{churchInfo.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="text-accent flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h4 className="font-bold text-lg mb-1">Service Times</h4>
                      <p className="text-muted-foreground">Sundays: Celebration of the Lord's Day (8:30 AM - 11:00 AM)</p>
                      <p className="text-muted-foreground">Wednesdays: Bible Studies (7:00 PM - 8:00 PM)</p>
                      <p className="text-muted-foreground">Fridays: Prayers/Songs (7:00 PM - 8:00 PM)</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Phone className="text-accent flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h4 className="font-bold text-lg mb-1">Phone</h4>
                      <a href={`tel:${churchInfo.phone}`} className="text-accent hover:opacity-80 transition">
                        {churchInfo.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="text-accent flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h4 className="font-bold text-lg mb-1">Email</h4>
                      <a href={`mailto:${churchInfo.email}`} className="text-accent hover:opacity-80 transition">
                        {churchInfo.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Ministries */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Our Ministries</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-card p-6 rounded-lg border border-border">
                  <h3 className="text-xl font-bold mb-3 text-accent">Worship & Prayer</h3>
                  <p className="text-muted-foreground">
                    Experience transformative worship through contemporary and traditional music, corporate prayer, and intimate connection with God.
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg border border-border">
                  <h3 className="text-xl font-bold mb-3 text-accent">Sunday School & Classes</h3>
                  <p className="text-muted-foreground">
                    Grow in knowledge and community through our various Bible study classes for all ages and life stages.
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg border border-border">
                  <h3 className="text-xl font-bold mb-3 text-accent">Children & Youth</h3>
                  <p className="text-muted-foreground">
                    Dedicated programs to nurture the faith of our youngest members through age-appropriate teaching and activities.
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg border border-border">
                  <h3 className="text-xl font-bold mb-3 text-accent">Community Outreach</h3>
                  <p className="text-muted-foreground">
                    Serve our community through volunteer opportunities, food drives, mentoring programs, and compassionate ministry.
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg border border-border">
                  <h3 className="text-xl font-bold mb-3 text-accent">Small Groups</h3>
                  <p className="text-muted-foreground">
                    Connect deeply with others through home-based Bible studies, prayer circles, and accountability groups.
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg border border-border">
                  <h3 className="text-xl font-bold mb-3 text-accent">Counseling Services</h3>
                  <p className="text-muted-foreground">
                    Access compassionate pastoral counseling and prayer support during times of need and spiritual struggle.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
