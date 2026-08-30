'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import {
  getCurrentUser,
  type AuthUser,
} from '@/lib/api/auth';

const navigation = [
  {
    label: 'Overview',
    href: '/dashboard',
  },
  {
    label: 'Organizations',
    href: '/dashboard/organizations',
  },
  {
    label: 'Users',
    href: '/dashboard/users',
  },
  {
    label: 'Departments',
    href: '/dashboard/departments',
  },
  {
    label: 'Roles & Permissions',
    href: '/dashboard/access',
  },
  {
    label: 'Security & Audit',
    href: '/dashboard/security',
  },
];

export default function DashboardPage() {
  const router = useRouter();

  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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

        router.replace('/login');
      } finally {
        setIsLoading(false);
      }
    }

    verifyAuthentication();
  }, [router]);

  function handleLogout() {
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
  }

  if (isLoading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50">
        <div className="text-center">
          <div className="mx-auto h-9 w-9 animate-spin rounded-full border-2 border-slate-200 border-t-[#1266B6]" />

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
    <main className="min-h-screen bg-slate-50 text-[#050A30]">
      {/* MOBILE OVERLAY */}
      {isSidebarOpen && (
        <button
          type="button"
          aria-label="Close navigation"
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-[#050A30]/40 lg:hidden"
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r border-white/10 bg-[#050A30] text-white transition-transform duration-300 lg:translate-x-0 ${
          isSidebarOpen
            ? 'translate-x-0'
            : '-translate-x-full'
        }`}
      >
        <div className="flex h-20 items-center justify-between border-b border-white/10 px-6">
          <Link
            href="/dashboard"
            onClick={() => setIsSidebarOpen(false)}
            className="flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#5FC9E6] text-sm font-black text-[#050A30]">
              N
            </div>

            <div>
              <p className="text-sm font-bold">
                Nexus Hub
              </p>

              <p className="text-[11px] text-white/40">
                System
              </p>
            </div>
          </Link>

          <button
            type="button"
            onClick={() => setIsSidebarOpen(false)}
            className="rounded-lg px-2 py-1 text-white/50 hover:bg-white/5 hover:text-white lg:hidden"
            aria-label="Close navigation"
          >
            ✕
          </button>
        </div>

        <div className="px-6 py-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
            Workspace
          </p>

          <p className="mt-2 text-sm text-white/45">
            {user.role}
          </p>
        </div>

        <nav className="flex-1 px-3">
          <div className="space-y-1">
            {navigation.map((item) => {
              const active =
                item.href === '/dashboard';

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() =>
                    setIsSidebarOpen(false)
                  }
                  className={`flex items-center rounded-xl px-4 py-3 text-sm font-medium transition ${
                    active
                      ? 'bg-white/10 text-white'
                      : 'text-white/55 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span
                    className={`mr-3 h-2 w-2 rounded-full ${
                      active
                        ? 'bg-[#5FC9E6]'
                        : 'bg-white/20'
                    }`}
                  />

                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>

        <div className="border-t border-white/10 p-4">
          <div className="rounded-xl bg-white/5 p-4">
            <p className="truncate text-sm font-semibold">
              {user.first_name} {user.last_name}
            </p>

            <p className="mt-1 truncate text-xs text-white/40">
              {user.email}
            </p>

            <button
              type="button"
              onClick={handleLogout}
              className="mt-4 w-full rounded-lg border border-white/10 px-3 py-2 text-sm font-semibold text-white/70 transition hover:bg-white/5 hover:text-white"
            >
              Sign Out
            </button>
          </div>
        </div>
      </aside>

      {/* MAIN AREA */}
      <div className="lg:pl-72">
        {/* TOP BAR */}
        <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
          <div className="flex min-h-20 items-center justify-between px-5 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() =>
                  setIsSidebarOpen(true)
                }
                className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 lg:hidden"
                aria-label="Open navigation"
              >
                ☰
              </button>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1266B6]">
                  Nexus Hub System
                </p>

                <p className="mt-1 text-sm font-medium text-slate-500">
                  Administration workspace
                </p>
              </div>
            </div>

            <div className="hidden items-center gap-3 sm:flex">
              <div className="text-right">
                <p className="text-sm font-semibold">
                  {user.first_name} {user.last_name}
                </p>

                <p className="text-xs text-slate-400">
                  {user.role}
                </p>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#050A30] text-sm font-bold text-white">
                {user.first_name.charAt(0)}
                {user.last_name.charAt(0)}
              </div>
            </div>
          </div>
        </header>

        {/* CONTENT */}
        <div className="mx-auto max-w-7xl px-5 py-8 sm:px-6 lg:px-8 lg:py-10">
          {/* WELCOME */}
          <section className="rounded-3xl bg-[#050A30] p-7 text-white sm:p-9 lg:p-10">
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
                  Overview
                </p>

                <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                  Welcome, {user.first_name}.
                </h1>

                <p className="mt-4 max-w-2xl text-base leading-7 text-white/55 sm:text-lg">
                  Your Nexus Hub system workspace is ready. Manage
                  organizations, users, access, and system activity
                  from one place.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
                <p className="text-xs uppercase tracking-[0.15em] text-white/35">
                  Current Role
                </p>

                <p className="mt-2 text-sm font-semibold text-white">
                  {user.role}
                </p>
              </div>
            </div>
          </section>

          {/* ACCOUNT SUMMARY */}
          <section className="mt-8">
            <div className="grid gap-5 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
                  Account
                </p>

                <p className="mt-3 text-lg font-bold">
                  {user.first_name} {user.last_name}
                </p>

                <p className="mt-1 break-all text-sm text-slate-500">
                  {user.email}
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
                  Access Level
                </p>

                <p className="mt-3 text-lg font-bold">
                  {user.role}
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Assigned system role
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
                  Session
                </p>

                <p className="mt-3 text-lg font-bold text-emerald-600">
                  Active
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Backend authentication verified
                </p>
              </div>
            </div>
          </section>

          {/* MODULES */}
          <section className="mt-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Administration
              </p>

              <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                System management
              </h2>

              <p className="mt-3 max-w-2xl leading-7 text-slate-600">
                These modules form the foundation of the Nexus Hub
                administration system. Additional capabilities can
                be added without changing the core workspace.
              </p>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              <Link
                href="/dashboard/organizations"
                className="group rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-[#1266B6]/40 hover:shadow-lg"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#1266B6]">
                  01
                </span>

                <h3 className="mt-4 text-xl font-bold transition group-hover:text-[#1266B6]">
                  Organizations
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Manage organizations, memberships, structures, and
                  their relationship with the Nexus Hub system.
                </p>

                <span className="mt-6 inline-flex text-sm font-semibold text-[#1266B6]">
                  Open Module →
                </span>
              </Link>

              <Link
                href="/dashboard/users"
                className="group rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-[#1266B6]/40 hover:shadow-lg"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#1266B6]">
                  02
                </span>

                <h3 className="mt-4 text-xl font-bold transition group-hover:text-[#1266B6]">
                  Users
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Manage accounts, user status, memberships, and
                  access across the system.
                </p>

                <span className="mt-6 inline-flex text-sm font-semibold text-[#1266B6]">
                  Open Module →
                </span>
              </Link>

              <Link
                href="/dashboard/departments"
                className="group rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-[#1266B6]/40 hover:shadow-lg"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#1266B6]">
                  03
                </span>

                <h3 className="mt-4 text-xl font-bold transition group-hover:text-[#1266B6]">
                  Departments
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Manage organizational departments, teams,
                  responsibilities, and internal structures.
                </p>

                <span className="mt-6 inline-flex text-sm font-semibold text-[#1266B6]">
                  Open Module →
                </span>
              </Link>

              <Link
                href="/dashboard/access"
                className="group rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-[#1266B6]/40 hover:shadow-lg"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#1266B6]">
                  04
                </span>

                <h3 className="mt-4 text-xl font-bold transition group-hover:text-[#1266B6]">
                  Roles &amp; Permissions
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Control roles, permissions, and access capabilities
                  across the Nexus Hub system.
                </p>

                <span className="mt-6 inline-flex text-sm font-semibold text-[#1266B6]">
                  Open Module →
                </span>
              </Link>

              <Link
                href="/dashboard/security"
                className="group rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-[#1266B6]/40 hover:shadow-lg"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#1266B6]">
                  05
                </span>

                <h3 className="mt-4 text-xl font-bold transition group-hover:text-[#1266B6]">
                  Security &amp; Audit
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Review authentication events, security activity,
                  and system audit information.
                </p>

                <span className="mt-6 inline-flex text-sm font-semibold text-[#1266B6]">
                  Open Module →
                </span>
              </Link>

              <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-7">
                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
                  06
                </span>

                <h3 className="mt-4 text-xl font-bold text-slate-500">
                  More Modules
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Additional Nexus Hub capabilities will be added
                  to the workspace as the platform grows.
                </p>

                <span className="mt-6 inline-flex text-sm font-semibold text-slate-400">
                  Coming Later
                </span>
              </div>
            </div>
          </section>

          {/* SYSTEM STATUS */}
          <section className="mt-12">
            <div className="rounded-2xl border border-slate-200 bg-white p-7">
              <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#1266B6]">
                    System Status
                  </p>

                  <h2 className="mt-2 text-xl font-bold">
                    Authentication services operational
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Your account has been verified through the Nexus
                    Hub backend authentication service.
                  </p>
                </div>

                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />

                  <span className="text-sm font-semibold text-emerald-700">
                    Operational
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}