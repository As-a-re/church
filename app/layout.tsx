import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Fraunces, Plus_Jakarta_Sans, Geist_Mono } from 'next/font/google'
import AIAssistant from '@/components/ai-assistant'
import SplashIntro from '@/components/splash-intro'
import PageTransition from '@/components/page-transition'
import './globals.css'

const fraunces = Fraunces({
  variable: '--font-fraunces',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const jakarta = Plus_Jakarta_Sans({
  variable: '--font-jakarta',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Church of Christ Hilltop - Community, Faith & Worship',
  description: 'Welcome to Church of Christ Hilltop. Join us for worship, spiritual growth, and community service. Find events, sermons, and ways to give.',
  keywords: 'church, worship, faith, community, sermons, events',
  icons: {
    icon: [
      {
        url: '/bg.ico',
      },
    ],
  },
}

export const viewport: Viewport = {
  themeColor: '#141b2e',
  userScalable: true,
}

// Runs before paint to avoid a flash of the wrong theme.
const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem('hilltop-theme');
    var theme = stored || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    if (theme === 'dark') document.documentElement.classList.add('dark');
  } catch (e) {}
})();
`

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`bg-background ${fraunces.variable} ${jakarta.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="font-sans antialiased">
        <SplashIntro />
        <PageTransition>{children}</PageTransition>
        <AIAssistant />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
