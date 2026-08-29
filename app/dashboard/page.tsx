'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

type AuthUser = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  role: string;
};

export default function DashboardPage() {
  const router = useRouter();

  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem(
      'nexus_hub_user',
    );

    const token = localStorage.getItem(
      'nexus_hub_access_token',
    );

    if (!storedUser || !token) {
      router.replace('/login');
      return;
    }

    try {
      setUser(JSON.parse(storedUser));
    } catch {
      localStorage.removeItem('nexus_hub_user');
      localStorage.removeItem(
        'nexus_hub_access_token',
      );

      router.replace('/login');
      return;
    }

    setIsLoading(false);
  }, [router]);

  function handleLogout() {
    localStorage.removeItem(
      'nexus_hub_access_token',
    );

    localStorage.removeItem(
      'nexus_hub_user',
    );

    router.replace('/login');
  }

  if (isLoading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50">
        <p className="text-sm text-slate-500">
          Loading your dashboard...
        </p>
      </main>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <main className="min-h-screen bg-slate-50 text-[#050A30]">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link
            href="/"
            className="text-lg font-bold"
          >
            Nexus Hub
          </Link>

          <button
            type="button"
            onClick={handleLogout}
            className="rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-[#1266B6] hover:text-[#1266B6]"
          >
            Sign Out
          </button>
        </div>
      </header>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="rounded-2xl bg-[#050A30] p-8 text-white lg:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
              Nexus Hub Dashboard
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Welcome, {user.first_name}.
            </h1>

            <p className="mt-4 text-lg text-white/65">
              You are signed in as{' '}
              <span className="font-semibold text-white">
                {user.role}
              </span>
              .
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-7">
              <p className="text-sm text-slate-500">
                Name
              </p>

              <p className="mt-2 text-xl font-bold">
                {user.first_name} {user.last_name}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-7">
              <p className="text-sm text-slate-500">
                Email
              </p>

              <p className="mt-2 break-all text-xl font-bold">
                {user.email}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-7">
              <p className="text-sm text-slate-500">
                Role
              </p>

              <p className="mt-2 text-xl font-bold">
                {user.role}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}