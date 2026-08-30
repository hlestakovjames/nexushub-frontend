'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import {
  getCurrentUser,
  type AuthUser,
} from '@/lib/api/auth';

export default function SecurityPage() {
  const router = useRouter();
  const [user, setUser] = useState<AuthUser | null>(null);

  useEffect(() => {
    async function verify() {
      const token = localStorage.getItem(
        'nexus_hub_access_token',
      );

      if (!token) {
        router.replace('/login');
        return;
      }

      try {
        const currentUser = await getCurrentUser(token);
        setUser(currentUser);
      } catch {
        localStorage.removeItem(
          'nexus_hub_access_token',
        );
        localStorage.removeItem('nexus_hub_user');
        router.replace('/login');
      }
    }

    verify();
  }, [router]);

  if (!user) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50">
        <p className="text-sm text-slate-500">
          Verifying access...
        </p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 text-[#050A30]">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
          <Link
            href="/dashboard"
            className="text-sm font-semibold text-[#1266B6]"
          >
            ← Nexus Hub System
          </Link>

          <span className="text-sm text-slate-500">
            {user.role}
          </span>
        </div>
      </header>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Security
            </p>

            <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Security &amp; Audit
            </h1>

            <p className="mt-3 max-w-2xl leading-7 text-slate-600">
              Monitor authentication activity, security events,
              and audit information across the Nexus Hub system.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
                Authentication
              </p>

              <p className="mt-3 text-xl font-bold text-emerald-600">
                Operational
              </p>

              <p className="mt-1 text-sm text-slate-500">
                Current session verified
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
                Audit Events
              </p>

              <p className="mt-3 text-3xl font-bold">—</p>

              <p className="mt-1 text-sm text-slate-500">
                Backend events will appear here
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
                Security Alerts
              </p>

              <p className="mt-3 text-3xl font-bold">—</p>

              <p className="mt-1 text-sm text-slate-500">
                Security monitoring will be connected here
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-8">
            <p className="text-sm font-semibold text-[#1266B6]">
              Audit activity
            </p>

            <h2 className="mt-3 text-2xl font-bold">
              Security events will appear here.
            </h2>

            <p className="mt-3 max-w-2xl leading-7 text-slate-600">
              The backend already records authentication and security
              events. This workspace will later provide filtering,
              investigation, audit history, and security monitoring.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}