'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import {
  getCurrentUser,
  type AuthUser,
} from '@/lib/api/auth';

export default function AccessPage() {
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
              Administration
            </p>

            <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Roles &amp; Permissions
            </h1>

            <p className="mt-3 max-w-2xl leading-7 text-slate-600">
              Define system roles and control the capabilities
              available to each role.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-8">
              <p className="text-sm font-semibold text-[#1266B6]">
                Roles
              </p>

              <h2 className="mt-3 text-2xl font-bold">
                Role management
              </h2>

              <p className="mt-3 leading-7 text-slate-600">
                Create and manage system roles such as Global Admin,
                organizational roles, and other access levels.
              </p>

              <button
                type="button"
                disabled
                className="mt-6 rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-400"
              >
                Manage Roles
              </button>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-8">
              <p className="text-sm font-semibold text-[#1266B6]">
                Permissions
              </p>

              <h2 className="mt-3 text-2xl font-bold">
                Permission management
              </h2>

              <p className="mt-3 leading-7 text-slate-600">
                Control the actions and capabilities available to
                different roles across the Nexus Hub system.
              </p>

              <button
                type="button"
                disabled
                className="mt-6 rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-400"
              >
                Manage Permissions
              </button>
            </div>
          </div>

          <div className="mt-6 rounded-2xl bg-[#050A30] p-8 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
              Current Access
            </p>

            <h2 className="mt-3 text-2xl font-bold">
              {user.role}
            </h2>

            <p className="mt-3 max-w-2xl leading-7 text-white/55">
              Your current permissions are determined by the role
              assigned to your account in the Nexus Hub backend.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}