import { Heart, Smartphone } from 'lucide-react';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function GivingPage() {
  return (
    <main className="min-h-screen">
        <Header />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <Heart className="mx-auto mb-4 h-16 w-16" />
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Support the Work of the Church
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
            Your generosity helps us spread the Gospel, support ministries,
            serve our community, and continue the work God has entrusted to us.
          </p>
        </div>
      </section>

      {/* Giving Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            <div className="bg-card border border-border rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <Smartphone className="h-8 w-8 text-primary" />
                <h2 className="text-2xl font-bold">
                  Mobile Money Giving
                </h2>
              </div>

              <div className="space-y-4 text-lg">
                <p>
                  Send your donation via Mobile Money.
                </p>

                <div className="bg-muted rounded-xl p-6">
                  <p>
                    <strong>Number:</strong> 0545015488
                  </p>

                  <p>
                    <strong>Recipient:</strong> Church Finance Team
                  </p>
                </div>

                <p>
                  After sending, the church leadership can manually verify
                  receipt from the Mobile Money account.
                </p>

                <p>
                  No online payment gateway or technical verification is
                  required.
                </p>
              </div>
            </div>

            {/* Scripture Card */}
            <div className="mt-10 bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
              <blockquote className="text-xl italic">
                "Each one must give as he has decided in his heart,
                not reluctantly or under compulsion, for God loves
                a cheerful giver."
              </blockquote>

              <p className="mt-4 font-semibold">
                — 2 Corinthians 9:7
              </p>
            </div>

          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}