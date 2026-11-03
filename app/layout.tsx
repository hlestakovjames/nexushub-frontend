import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://nexushubgroup.vercel.app'),
  title: {
    default: 'Nexus Hub | Technology, Innovation & Enterprise',
    template: '%s | Nexus Hub',
  },
  description:
    'Nexus Hub brings together technology, innovation, media and enterprise, empowering businesses through innovative digital solutions.',
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
