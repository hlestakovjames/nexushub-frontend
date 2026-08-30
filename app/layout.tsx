import type { Metadata } from 'next';

import './globals.css';

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
      <body className="min-h-screen bg-white text-[#050A30] antialiased">
        {children}
      </body>
    </html>
  );
}