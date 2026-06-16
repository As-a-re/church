'use client';

import Header from '@/components/header';
import Footer from '@/components/footer';
import { prayerRequestCategories } from '@/lib/data';
import { Heart, Send, Check, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import PageHero from '@/components/page-hero';
import Reveal from '@/components/reveal';

const prayerFeatures = [
  'Confidential handling',
  'Weekly prayer meetings',
  'Community intercession',
  'Dedicated prayer team',
];

const prayerSteps = [
  'Your request is reviewed by our prayer coordinator',
  'It is shared with our prayer team and circle',
  'Intercessors pray specifically for your situation',
  'Follow-up support and encouragement is provided',
];

export default function PrayerPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'Personal Health',
    request: '',
    isPublic: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      setFormData((prev) => ({ ...prev, [name]: (e.target as HTMLInputElement).checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Prayer request submitted:', formData);
    alert('Thank you for your prayer request. Our prayer team will intercede for you.');
    setFormData({ name: '', email: '', category: 'Personal Health', request: '', isPublic: false });
  };

  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Prayer Ministry"
          title="Share Your Prayer Request"
          subtitle="Our community is here to lift you up — submit a request and let us intercede with you."
        />

        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Prayer Form */}
              <Reveal className="lg:col-span-2">
                <h2 className="font-display text-2xl font-semibold mb-8">Submit a Prayer Request</h2>
                <form onSubmit={handleSubmit} className="space-y-6 glass-card p-6 sm:p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-border rounded-xl bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-dawn"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-border rounded-xl bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-dawn"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Prayer Category</label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-xl bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-dawn"
                    >
                      {prayerRequestCategories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Your Prayer Request</label>
                    <textarea
                      name="request"
                      value={formData.request}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-border rounded-xl bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-dawn resize-none"
                      placeholder="Share your prayer request in detail..."
                    ></textarea>
                  </div>

                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="isPublic"
                      name="isPublic"
                      checked={formData.isPublic}
                      onChange={handleChange}
                      className="w-4 h-4 rounded cursor-pointer accent-dawn"
                    />
                    <label htmlFor="isPublic" className="text-sm cursor-pointer">
                      Share with the prayer community (optional)
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-dawn to-ember text-night py-3.5 font-semibold transition hover:-translate-y-0.5"
                  >
                    Submit Prayer Request <Send size={18} />
                  </button>
                </form>
              </Reveal>

              {/* Prayer Info Sidebar */}
              <div className="space-y-6">
                <Reveal delay={100}>
                  <div className="glass-card p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-dawn to-ember text-night">
                        <Heart size={20} />
                      </span>
                      <h3 className="font-display text-xl font-semibold">Prayer Ministry</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Our dedicated prayer team intercedes for every request submitted to our church. We
                      believe in the power of prayer and the strength of community intercession.
                    </p>
                    <ul className="space-y-2 text-sm">
                      {prayerFeatures.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <Check size={16} className="text-dawn mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>

                <Reveal delay={150}>
                  <div className="glass-card p-6">
                    <h4 className="font-display font-semibold mb-4">How We Pray</h4>
                    <ol className="space-y-3 text-sm text-muted-foreground">
                      {prayerSteps.map((step, i) => (
                        <li key={step} className="flex items-start gap-3">
                          <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-dawn/20 text-xs font-bold text-dawn">
                            {i + 1}
                          </span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </Reveal>

                <Reveal delay={200}>
                  <div className="glass-card border-dawn/30 p-6">
                    <h4 className="font-display font-semibold mb-2">Pastoral Care Available</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      For urgent prayer needs, please contact our pastoral care team directly.
                    </p>
                    <a
                      href="/contact"
                      className="text-dawn font-semibold hover:text-ember transition text-sm inline-flex items-center gap-1.5"
                    >
                      Contact a Pastor <ArrowRight size={14} />
                    </a>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
