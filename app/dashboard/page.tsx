'use client';

import Link from 'next/link';

import { useDashboardAuth } from '@/components/dashboard/DashboardAuthContext';

const quickActions = [
  {
    title: 'Organizations',
    description:
      'Manage organizations and their system relationships.',
    href: '/dashboard/organizations',
    label: 'Open Organizations',
  },
  {
    title: 'Users',
    description:
      'Manage accounts, memberships, and access.',
    href: '/dashboard/users',
    label: 'Open Users',
  },
  {
    title: 'Access Control',
    description:
      'Manage roles and permissions across the system.',
    href: '/dashboard/access',
    label: 'Manage Access',
  },
];

export default function DashboardPage() {
  const { user } = useDashboardAuth();

  return (
    <div className="mx-auto max-w-[1500px] px-5 py-7 sm:px-6 lg:px-8 lg:py-9">
      {/* WELCOME */}
      <section className="overflow-hidden rounded-3xl bg-[#050A30] text-white shadow-xl">
        <div className="relative p-7 sm:p-9 lg:p-11">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#1266B6]/20 blur-3xl" />

          <div className="absolute -bottom-24 right-24 h-72 w-72 rounded-full bg-[#5FC9E6]/10 blur-3xl" />

          <div className="relative">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#5FC9E6]">
              System Overview
            </p>

            <div className="mt-5 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <div>
                <h2 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                  Welcome back, {user.first_name}.
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">
                  Manage your Nexus Hub workspace, organizations,
                  people, and system access from one central place.
                </p>
              </div>

              <div className="w-fit rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
                <p className="text-[10px] uppercase tracking-[0.18em] text-white/35">
                  Current role
                </p>

                <p className="mt-2 text-sm font-semibold text-white">
                  {user.role}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="mt-7">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {[
            ['Organizations', '—', 'Connected organizations'],
            ['Users', '—', 'System users'],
            ['Roles', '—', 'Configured roles'],
          ].map(([label, value, description]) => (
            <div
              key={label}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                {label}
              </p>

              <p className="mt-3 text-3xl font-bold">
                {value}
              </p>

              <p className="mt-1 text-xs text-slate-400">
                {description}
              </p>
            </div>
          ))}

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
              API Status
            </p>

            <p className="mt-3 text-xl font-bold text-emerald-600">
              Operational
            </p>

            <p className="mt-1 text-xs text-slate-400">
              Authentication verified
            </p>
          </div>
        </div>
      </section>

      {/* ACTIONS + ACCOUNT */}
      <section className="mt-10 grid gap-7 xl:grid-cols-[1.45fr_0.75fr]">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
            Quick Actions
          </p>

          <h2 className="mt-2 text-2xl font-bold tracking-tight">
            Manage your workspace
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {quickActions.map((action) => (
              <Link
                key={action.href}
                href={action.href}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#1266B6]/40 hover:shadow-lg"
              >
                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#1266B6]">
                  System
                </span>

                <h3 className="mt-3 text-lg font-bold transition group-hover:text-[#1266B6]">
                  {action.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {action.description}
                </p>

                <span className="mt-5 inline-flex text-xs font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                  {action.label} →
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
            Account
          </p>

          <h2 className="mt-2 text-2xl font-bold tracking-tight">
            Your account
          </h2>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#050A30] text-sm font-bold text-white">
                {user.first_name?.charAt(0) ?? ''}
                {user.last_name?.charAt(0) ?? ''}
              </div>

              <div className="min-w-0">
                <p className="truncate font-semibold">
                  {user.first_name} {user.last_name}
                </p>

                <p className="truncate text-sm text-slate-400">
                  {user.role}
                </p>
              </div>
            </div>

            <div className="mt-6 border-t border-slate-100 pt-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                Email
              </p>

              <p className="mt-2 break-all text-sm font-medium text-slate-600">
                {user.email}
              </p>
            </div>

            <div className="mt-5 flex items-center justify-between rounded-xl bg-emerald-50 px-4 py-3">
              <div>
                <p className="text-xs font-semibold text-emerald-700">
                  Session active
                </p>

                <p className="mt-0.5 text-[11px] text-emerald-600">
                  Account successfully verified
                </p>
              </div>

              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </div>
          </div>
        </div>
      </section>

      {/* ACTIVITY + STATUS */}
      <section className="mt-10 grid gap-7 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-100 px-6 py-5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Recent Activity
            </p>

            <h2 className="mt-2 text-xl font-bold">
              System activity
            </h2>
          </div>

          <div className="divide-y divide-slate-100">
            <div className="flex items-start gap-4 px-6 py-5">
              <span className="mt-1 h-2 w-2 rounded-full bg-[#1266B6]" />

              <div>
                <p className="text-sm font-semibold">
                  Authentication verified
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  Your current session was successfully verified.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 px-6 py-5">
              <span className="mt-1 h-2 w-2 rounded-full bg-slate-300" />

              <div>
                <p className="text-sm font-semibold text-slate-600">
                  Activity integration ready
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  Audit events will appear here once connected.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-[#050A30] p-7 text-white shadow-sm">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
            System Status
          </p>

          <h2 className="mt-3 text-xl font-bold">
            Nexus Hub infrastructure
          </h2>

          <div className="mt-7 space-y-4">
            <div className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3">
              <span className="text-sm text-white/60">
                Authentication
              </span>

              <span className="text-xs font-semibold text-emerald-400">
                Operational
              </span>
            </div>

            <div className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3">
              <span className="text-sm text-white/60">
                API
              </span>

              <span className="text-xs font-semibold text-emerald-400">
                Operational
              </span>
            </div>

            <div className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3">
              <span className="text-sm text-white/60">
                Database
              </span>

              <span className="text-xs font-semibold text-emerald-400">
                Connected
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}