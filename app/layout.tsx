import type { Metadata, Viewport } from "next";
import { Playfair_Display, Montserrat, Inter } from "next/font/google";
import "./globals.css";
import StructuredData from './components/StructuredData.js';
import { ThemeProvider } from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Lazy load components
const Navbar = dynamic(() => import('./components/Navbar'), {
  loading: () => <div className="h-16 bg-white/90 backdrop-blur-md shadow-lg" />
});

const Footer = dynamic(() => import('./components/Footer'), {
  loading: () => <div className="h-20 bg-gray-900" />
});

const FloatingButtons = dynamic(() => import('./components/FloatingButtons'), {
  ssr: false
});

// Optimize font loading
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#8a2be2',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://vasudevconvention.com'),
  title: {
    default: 'Vasudev Convention | A Legacy of Luxury & Elegance',
    template: '%s | Vasudev Convention'
  },
  description: 'Vasudev Convention - Your Premier Venue for Weddings, Corporate Gatherings & Celebrations. Experience Luxury, Excellence & Unforgettable Moments.',
  keywords: ['wedding venue', 'convention center', 'event space', 'corporate events', 'wedding hall', 'party venue', 'luxury venue', 'Vasudev convention'],
  authors: [{ name: 'Vasudev Convention' }],
  creator: 'Vasudev Convention',
  publisher: 'VasudevConvention',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vasudevconvention.com',
    siteName: 'Vasudev Convention',
    title: 'Vasudev Convention | Premier Wedding & Event Venue',
    description: 'Your premier destination for weddings, corporate events, and special occasions. Luxury venues, professional services, and unforgettable experiences.',
    images: [
      {
        url: '/',
        width: 1200,
        height: 630,
        alt: 'Vasudev Convention Wedding Venue',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vasudev Convention | Premier Wedding & Event Venue',
    description: 'Your premier destination for weddings, corporate events, and special occasions.',
    images: ['/images/'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification',
  },
};

// Organization structured data
const organizationData = {
  '@type': 'LocalBusiness',
  name: 'Vasudev Convention',
  url: 'https://vasudevconvention.com',
  description: 'Premier wedding and event venue offering luxury facilities and professional services.',
  image: 'https://vasudevconvention.com/images/optimized/wedding_stage.jpg',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Your Street Address',
    addressLocality: 'Your City',
    addressRegion: 'Your State',
    postalCode: 'Your Postal Code',
    addressCountry: 'IN'
  }
};

// Website structured data
const websiteData = {
  '@type': 'WebSite',
  name: 'Vasudev Convention',
  url: 'https://vasudevconvention.com',
  description: 'Premier wedding and event venue offering luxury facilities and professional services.',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://vasudevconvention.com/search?q={search_term_string}'
    },
    'query-input': 'required name=search_term_string'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${montserrat.variable} ${inter.className}`} suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <StructuredData type="LocalBusiness" data={organizationData} />
        <StructuredData type="WebSite" data={websiteData} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme') || 
                    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                  document.documentElement.classList.remove('light', 'dark');
                  document.documentElement.classList.add(theme);
                } catch (e) {
                  console.error('Theme initialization error:', e);
                }
              })();
            `,
          }}
        />
      </head>
      <body className={`${montserrat.className} antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300`}>
        <ThemeProvider>
          <ThemeToggle />
          <Suspense fallback={<div className="h-16 bg-white/90 backdrop-blur-md shadow-lg" />}>
            <Navbar />
          </Suspense>
          {children}
          <Suspense fallback={<div className="h-20 bg-gray-900" />}>
            <Footer />
          </Suspense>
          <FloatingButtons />
        </ThemeProvider>
      </body>
    </html>
  );
}
