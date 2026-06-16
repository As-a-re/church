'use client';

import Header from '@/components/header';
import Footer from '@/components/footer';
import { churchInfo, directoryStaff } from '@/lib/data';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import PageHero from '@/components/page-hero';
import Reveal from '@/components/reveal';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to a backend
    console.log('Form submitted:', formData);
    alert('Thank you for reaching out! We will be in touch soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Get In Touch"
          title="We'd Love To Hear From You"
          subtitle="Whether it's a question, a prayer request, or just to say hello — reach out anytime."
        />

        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
              {/* Contact Info */}
              <Reveal>
                <h2 className="font-display text-2xl font-semibold mb-8">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-dawn to-ember text-night">
                      <MapPin size={20} />
                    </span>
                    <div>
                      <h4 className="font-display font-semibold mb-1">Location</h4>
                      <p className="text-muted-foreground">Kwabenya, Accra &middot; {churchInfo.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-dawn to-ember text-night">
                      <Phone size={20} />
                    </span>
                    <div>
                      <h4 className="font-display font-semibold mb-1">Phone</h4>
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
                      <h4 className="font-display font-semibold mb-1">Email</h4>
                      <a href={`mailto:${churchInfo.email}`} className="text-dawn hover:text-ember transition break-all">
                        {churchInfo.email}
                      </a>
                    </div>
                  </div>
                </div>

                <h3 className="font-display text-xl font-semibold mt-12 mb-6">Leadership</h3>
                <div className="space-y-3">
                  {directoryStaff.slice(0, 3).map((staff) => (
                    <div key={staff.id} className="glass-card p-4">
                      <p className="font-semibold">{staff.name}</p>
                      <p className="text-sm text-muted-foreground">{staff.title}</p>
                    </div>
                  ))}
                </div>
              </Reveal>

              {/* Contact Form */}
              <Reveal delay={100} className="lg:col-span-2">
                <div className="glass-card p-6 sm:p-10">
                  <h2 className="font-display text-2xl font-semibold mb-8">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold mb-2">Full Name</label>
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
                        <label className="block text-sm font-semibold mb-2">Email</label>
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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold mb-2">Phone</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-border rounded-xl bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-dawn"
                          placeholder="024 XXX XXXX"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2">Subject</label>
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-border rounded-xl bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-dawn"
                          placeholder="Subject"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-border rounded-xl bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-dawn resize-none"
                        placeholder="Your message here..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-dawn to-ember text-night py-3.5 font-semibold transition hover:-translate-y-0.5"
                    >
                      <Send size={18} />
                      Send Message
                    </button>
                  </form>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
