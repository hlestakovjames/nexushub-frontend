'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import {
  getCurrentUser,
  type AuthUser,
} from '@/lib/api/auth';

export default function DepartmentsPage() {
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
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Administration
              </p>

              <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Departments
              </h1>

              <p className="mt-3 max-w-2xl leading-7 text-slate-600">
                Organize teams, responsibilities, and internal
                structures within the Nexus Hub ecosystem.
              </p>
            </div>

            <button
              type="button"
              disabled
              className="rounded-lg bg-[#050A30] px-5 py-3 text-sm font-semibold text-white opacity-50"
            >
              Add Department
            </button>
          </div>

          <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-8">
            <p className="text-sm font-semibold text-[#1266B6]">
              Department management
            </p>

            <h2 className="mt-3 text-2xl font-bold">
              Department records will appear here.
            </h2>

            <p className="mt-3 max-w-2xl leading-7 text-slate-600">
              This workspace will support department creation,
              editing, organization assignment, status management,
              and related structural configuration.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}