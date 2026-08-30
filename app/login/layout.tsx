import type { ReactNode } from 'react';

export default function LoginLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#050A30]">
      {children}
    </div>
  );
}