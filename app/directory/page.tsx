import Header from '@/components/header';
import Footer from '@/components/footer';
import { directoryStaff } from '@/lib/data';
import { Mail, Phone } from 'lucide-react';

export default function DirectoryPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Church Directory</h1>
            <p className="text-xl opacity-90">Meet our leadership and staff</p>
          </div>
        </section>

        {/* Directory */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {directoryStaff.map((staff) => (
                <div
                  key={staff.id}
                  className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  {/* Avatar Placeholder */}
                  <div className="h-48 bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center">
                    <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center text-3xl font-bold text-accent-foreground">
                      {staff.name.charAt(0)}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{staff.name}</h3>
                    <p className="text-accent font-semibold mb-4">{staff.title}</p>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3">
                        <Mail size={18} className="text-muted-foreground flex-shrink-0" />
                        <a
                          href={`mailto:${staff.email}`}
                          className="text-sm text-accent hover:opacity-80 transition break-all"
                        >
                          {staff.email}
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone size={18} className="text-muted-foreground flex-shrink-0" />
                        <a
                          href={`tel:${staff.phone}`}
                          className="text-sm text-accent hover:opacity-80 transition"
                        >
                          {staff.phone}
                        </a>
                      </div>
                    </div>

                    <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg font-semibold hover:opacity-90 transition text-sm">
                      Schedule Meeting
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="bg-card p-8 rounded-lg border border-border text-center mt-16">
              <h2 className="text-2xl font-bold mb-4">Need Something Specific?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                If you can&apos;t find what you&apos;re looking for or would like to connect with a specific ministry, 
                please don&apos;t hesitate to reach out to our main office.
              </p>
              <a
                href="/contact"
                className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition inline-block"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
