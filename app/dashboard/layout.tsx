'use client';

import {
  useEffect,
  useState,
  type ReactNode,
} from 'react';

import { useRouter } from 'next/navigation';

import {
  getCurrentUser,
  type AuthUser,
} from '@/lib/api/auth';

import SystemShell from '@/components/dashboard/SystemShell';
import { DashboardAuthProvider } from '@/components/dashboard/DashboardAuthContext';

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const router = useRouter();

  const [user, setUser] =
    useState<AuthUser | null>(null);

  const [isLoading, setIsLoading] =
    useState(true);

  useEffect(() => {
    async function verifyAuthentication() {
      const accessToken = localStorage.getItem(
        'nexus_hub_access_token',
      );

      if (!accessToken) {
        router.replace('/login');
        return;
      }

      try {
        const currentUser =
          await getCurrentUser(accessToken);

        setUser(currentUser);

        localStorage.setItem(
          'nexus_hub_user',
          JSON.stringify(currentUser),
        );
      } catch {
        localStorage.removeItem(
          'nexus_hub_access_token',
        );

        localStorage.removeItem(
          'nexus_hub_user',
        );

        localStorage.removeItem(
          'nexus_hub_remember',
        );

        router.replace('/login');
      } finally {
        setIsLoading(false);
      }
    }

    verifyAuthentication();
  }, [router]);

  if (isLoading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#F5F7FB]">
        <div className="text-center">
          <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-slate-200 border-t-[#1266B6]" />

          <p className="mt-4 text-sm text-slate-500">
            Verifying your account...
          </p>
        </div>
      </main>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <DashboardAuthProvider user={user}>
      <SystemShell>
        {children}
      </SystemShell>
    </DashboardAuthProvider>
  );
}