'use client';

import Header from '@/components/header';
import Footer from '@/components/footer';
import { prayerRequestCategories } from '@/lib/data';
import { Heart, Send } from 'lucide-react';
import { useState } from 'react';

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
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Prayer Requests</h1>
            <p className="text-xl opacity-90">Share your prayer requests and receive intercession from our community</p>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Prayer Form */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold mb-8">Submit a Prayer Request</h2>
                <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-lg border border-border">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
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
                        className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
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
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
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
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
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
                      className="w-4 h-4 rounded cursor-pointer"
                    />
                    <label htmlFor="isPublic" className="text-sm cursor-pointer">
                      Share with the prayer community (optional)
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition flex items-center justify-center gap-2"
                  >
                    Submit Prayer Request <Send size={18} />
                  </button>
                </form>
              </div>

              {/* Prayer Info Sidebar */}
              <div className="space-y-6">
                <div className="bg-card p-6 rounded-lg border border-border">
                  <div className="flex items-center gap-3 mb-4">
                    <Heart className="text-accent" size={28} />
                    <h3 className="text-xl font-bold">Prayer Ministry</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Our dedicated prayer team intercedes for all prayer requests submitted to our church. We believe in the 
                    power of prayer and the importance of community intercession.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">✓</span>
                      <span>24/7 prayer coverage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">✓</span>
                      <span>Confidential handling</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">✓</span>
                      <span>Weekly prayer meetings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">✓</span>
                      <span>Community support</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card p-6 rounded-lg border border-border">
                  <h4 className="font-bold mb-4">How We Pray</h4>
                  <ol className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-accent flex-shrink-0">1.</span>
                      <span>Your request is reviewed by our prayer coordinator</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-accent flex-shrink-0">2.</span>
                      <span>Request is shared with our prayer team and circle</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-accent flex-shrink-0">3.</span>
                      <span>Intercessors pray specifically for your situation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-accent flex-shrink-0">4.</span>
                      <span>Follow-up support and encouragement provided</span>
                    </li>
                  </ol>
                </div>

                <div className="bg-accent/10 border border-accent p-6 rounded-lg">
                  <h4 className="font-bold mb-2">Pastoral Care Available</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    For urgent prayer needs, please contact our pastoral care team directly.
                  </p>
                  <a
                    href="/contact"
                    className="text-accent font-semibold hover:opacity-80 transition text-sm inline-block"
                  >
                    Contact a Pastor →
                  </a>
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
