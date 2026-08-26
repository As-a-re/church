import Header from '@/components/header';
import Footer from '@/components/footer';
import PageHero from '@/components/page-hero';
import Reveal from '@/components/reveal';
import { articles, cocNews } from '@/lib/data';
import { ArrowUpRight, BookOpen, CalendarDays, Newspaper } from 'lucide-react';

export default function ArticlesPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Articles & COC News"
          title="Encouragement, Spiritual Growth & News"
          subtitle="Thoughtful articles, and practical lessons for growing in faith and daily living. Stay connected with the church through the latest news, announcements."
        />
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-5xl">
            {articles.map((article) => (
              <Reveal key={article.id}>
                <article className="glass-card p-8 md:p-12">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-dawn to-ember text-night mb-6">
                    <BookOpen size={25} />
                  </div>
                  <p className="eyebrow text-dawn mb-3">{article.category}</p>
                  <h1 className="font-display text-3xl md:text-5xl font-semibold">Ten Ps for Achievement</h1>
                  <p className="mt-6 text-lg md:text-xl leading-relaxed text-muted-foreground">
                    Every year, people set goals and look for practical ways to make meaningful progress. Achievement requires more than good intentions; it calls for purposeful habits, discipline, preparation, and consistent action.
                  </p>
                  <div className="mt-8 rounded-2xl bg-secondary/50 border border-border p-6">
                    <h2 className="font-display text-2xl font-semibold mb-3">Introduction</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Achievement is built through deliberate choices repeated over time. The principles in this article provide a practical framework for approaching goals with focus, responsibility, perseverance, and faith.
                    </p>
                  </div>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href={article.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:opacity-90"
                    >
                      Read Full Article <ArrowUpRight size={17} />
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>
        {/* COC News */}
        <section className="py-16 md:py-24 bg-secondary/30 border-y border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10">
                <div>
                  <p className="eyebrow text-dawn mb-3">Church of Christ News</p>
                  <h2 className="font-display text-3xl md:text-5xl font-semibold">COC News</h2>
                  <p className="mt-4 text-muted-foreground max-w-2xl">
                    Keep up with announcements, ministry highlights, church activities, and important updates from Hilltop Church of Christ, Kwabenya.
                  </p>
                </div>
                <div className="hidden md:flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-dawn to-ember text-night shrink-0">
                  <Newspaper size={26} />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cocNews.map((news, index) => (
                  <Reveal key={news.id} delay={(index % 3) * 100}>
                    <article className="glass-card h-full p-7 flex flex-col">
                      <div className="flex items-center justify-between gap-4 mb-5">
                        <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                          {news.category}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs text-muted-foreground whitespace-nowrap">
                          <CalendarDays size={14} />
                          {news.date}
                        </span>
                      </div>

                      <h3 className="font-display text-2xl font-semibold mb-3">
                        {news.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed flex-1">
                        {news.summary}
                      </p>
                    </article>
                  </Reveal>
                ))}
              </div>

              <div className="mt-10 rounded-2xl border border-dawn/30 bg-night text-white p-6 md:p-8 text-center">
                <p className="font-semibold text-dawn mb-2">COC News Updates</p>
                <p className="text-white/75 max-w-2xl mx-auto">
                  Get latest news from the church<code className="text-dawn">. COC News. </code> Stay connected and informed.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
