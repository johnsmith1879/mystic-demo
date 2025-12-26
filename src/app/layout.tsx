import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: 'Mystic Custom Fabrication | Broadcast Studios & Scenic Fabrication',
    template: '%s | Mystic Custom Fabrication',
  },
  description: 'A full-service fabrication and design partner delivering broadcast-ready environments and high-finish builds—engineered to perform on-site and on air.',
  keywords: [
    'broadcast studio fabrication',
    'scenic fabrication',
    'TV studio design',
    'museum exhibits',
    'custom fabrication',
    'set design',
    'LED integration',
  ],
  authors: [{ name: 'Mystic Custom Fabrication' }],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mystic-demo.vercel.app',
    siteName: 'Mystic Custom Fabrication',
    title: 'Mystic Custom Fabrication | Broadcast Studios & Scenic Fabrication',
    description: 'A full-service fabrication and design partner delivering broadcast-ready environments and high-finish builds.',
    images: [
      {
        url: '/images/og/default.jpg',
        width: 1200,
        height: 630,
        alt: 'Mystic Custom Fabrication',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mystic Custom Fabrication',
    description: 'A full-service fabrication and design partner delivering broadcast-ready environments and high-finish builds.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col">
        <Header variant="light" />
        <main className="flex-1 pt-20">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
