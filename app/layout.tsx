import type { Metadata } from 'next';

import './globals.css';

import Footer from '@/components/navigation/Footer';
import GlobalNav from '@/components/navigation/GlobalNav';

export const metadata: Metadata = {
  title: {
    default: 'Nexus Hub',
    template: '%s | Nexus Hub',
  },
  description:
    'Nexus Hub connects ideas through digital innovation, media, and business.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#050A30] text-white antialiased">
        <GlobalNav />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}