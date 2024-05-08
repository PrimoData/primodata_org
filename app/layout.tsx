import '@/styles/globals.css';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { TailwindIndicator } from '@/components/tailwind-indicator';
import { ThemeProvider } from '@/components/theme-provider';
import { siteConfig } from '@/config/site';
import { fontSans } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import { Analytics } from '@vercel/analytics/react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://primodata.org'),
  title: 'The Hub for Blockchain Data | Primo Data',
  description:
    'The most comprehensive directory of blockchain data resources on the internet.',
  keywords:
    'Blockchain Data Analytics, Blockchain Data Companies, Crypto Data Analytics, Web3 Data Analytics, Blockchain Data',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'white' },
  ],
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    type: 'website',
    url: 'https://primodata.org',
    images: [
      {
        url: 'https://primodata.org/homepage.jpeg',
        type: 'image/jpeg',
        width: 1200,
        height: 540,
        alt: 'Primo Data homepage',
      },
    ],
    siteName: 'Primo Data',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image', // Type of Twitter card
    site: '@primo_data', // Your site's Twitter handle
    creator: '@primo_data', // The Twitter handle of the author/creator
    images: [
      {
        url: 'https://primodata.org/homepage.png', // URL of the image to be displayed
      },
    ],
  },
  authors: { name: siteConfig.author },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            'min-h-screen bg-background font-sans antialiased',
            fontSans.variable,
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
          >
            <div className="relative flex min-h-screen flex-col">
              <SiteHeader />
              <div className="flex-1">{children}</div>
              <SiteFooter />
            </div>
            <TailwindIndicator />
            <Analytics />
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
