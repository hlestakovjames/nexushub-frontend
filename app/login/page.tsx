'use client';

import { FormEvent, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { login } from '@/lib/api/auth';

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    setError('');

    const normalizedEmail = email.trim().toLowerCase();

    if (!normalizedEmail || !password) {
      setError(
        'Please enter your email address and password.',
      );
      return;
    }

    if (password.length < 8) {
      setError(
        'Password must be at least 8 characters long.',
      );
      return;
    }

    try {
      setIsSubmitting(true);

      const response = await login(
        normalizedEmail,
        password,
      );

      localStorage.setItem(
        'nexus_hub_access_token',
        response.access_token,
      );

      localStorage.setItem(
        'nexus_hub_user',
        JSON.stringify(response.user),
      );

      if (rememberMe) {
        localStorage.setItem(
          'nexus_hub_remember',
          'true',
        );
      } else {
        localStorage.removeItem(
          'nexus_hub_remember',
        );
      }

      router.push('/dashboard');
    } catch (err) {
      if (
        err instanceof Error &&
        err.message.includes('401')
      ) {
        setError('Invalid email or password.');
      } else {
        setError(
          'Unable to sign in right now. Please try again.',
        );
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050A30] text-[#050A30]">
      {/* BACKGROUND ACCENTS */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#1266B6]/20 blur-3xl" />

        <div className="absolute -bottom-40 -right-20 h-[28rem] w-[28rem] rounded-full bg-[#5FC9E6]/10 blur-3xl" />
      </div>

      <div className="relative z-10 flex min-h-screen items-center justify-center px-5 py-10 sm:px-8 lg:px-10">
        <div className="w-full max-w-6xl">
          {/* TOP BAR */}
          <div className="mb-6 flex items-center justify-between">
            <Link
              href="/"
              className="text-sm font-semibold text-white/65 transition hover:text-white"
            >
              ← Nexus Hub
            </Link>

            <span className="text-xs font-medium uppercase tracking-[0.18em] text-white/35">
              Secure Access
            </span>
          </div>

          {/* APPLICATION CARD */}
          <div className="grid overflow-hidden rounded-3xl border border-white/10 bg-white shadow-2xl lg:grid-cols-[0.9fr_1.1fr]">
            {/* BRAND SIDE */}
            <section className="relative hidden overflow-hidden bg-[#07123F] p-10 text-white lg:flex lg:flex-col lg:justify-between xl:p-12">
              <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#1266B6]/25 blur-3xl" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#5FC9E6] text-lg font-black text-[#050A30]">
                    N
                  </div>

                  <div>
                    <p className="text-lg font-bold tracking-tight">
                      Nexus Hub
                    </p>

                    <p className="text-xs text-white/40">
                      System
                    </p>
                  </div>
                </div>

                <div className="mt-20 max-w-md">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#5FC9E6]">
                    Nexus Hub System
                  </p>

                  <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight xl:text-5xl">
                    Your central access point to the Nexus Hub ecosystem.
                  </h1>

                  <p className="mt-6 text-base leading-7 text-white/55">
                    Access the tools, information, and capabilities
                    available to your account based on your assigned
                    role.
                  </p>
                </div>

                <div className="mt-10 space-y-3">
                  <div className="flex items-center gap-3 text-sm text-white/60">
                    <span className="h-2 w-2 rounded-full bg-[#5FC9E6]" />
                    Secure account access
                  </div>

                  <div className="flex items-center gap-3 text-sm text-white/60">
                    <span className="h-2 w-2 rounded-full bg-[#5FC9E6]" />
                    Role-based capabilities
                  </div>

                  <div className="flex items-center gap-3 text-sm text-white/60">
                    <span className="h-2 w-2 rounded-full bg-[#5FC9E6]" />
                    Centralized platform experience
                  </div>
                </div>
              </div>

              <p className="relative z-10 text-xs text-white/30">
                Connecting Ideas Through Digital Innovation.
              </p>
            </section>

            {/* FORM SIDE */}
            <section className="bg-slate-50 px-6 py-10 sm:px-10 sm:py-12 lg:px-14 xl:px-16">
              {/* MOBILE BRAND */}
              <div className="lg:hidden">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#050A30] text-base font-black text-[#5FC9E6]">
                    N
                  </div>

                  <div>
                    <p className="font-bold text-[#050A30]">
                      Nexus Hub
                    </p>

                    <p className="text-xs text-slate-400">
                      System
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 lg:mt-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                  Sign In
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  Welcome back.
                </h2>

                <p className="mt-3 max-w-md text-sm leading-6 text-slate-500 sm:text-base">
                  Sign in to continue to your Nexus Hub account.
                </p>
              </div>

              {/* ERROR */}
              {error && (
                <div
                  role="alert"
                  className="mt-7 rounded-xl border border-red-200 bg-red-50 px-4 py-3.5"
                >
                  <p className="text-sm font-medium leading-6 text-red-700">
                    {error}
                  </p>
                </div>
              )}

              {/* FORM */}
              <form
                onSubmit={handleSubmit}
                className="mt-8 space-y-5"
              >
                {/* EMAIL */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-[#050A30]"
                  >
                    Email address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(event) =>
                      setEmail(event.target.value)
                    }
                    disabled={isSubmitting}
                    required
                    className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-sm text-[#050A30] outline-none transition placeholder:text-slate-400 focus:border-[#1266B6] focus:ring-4 focus:ring-[#1266B6]/10 disabled:cursor-not-allowed disabled:bg-slate-100"
                  />
                </div>

                {/* PASSWORD */}
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-semibold text-[#050A30]"
                    >
                      Password
                    </label>

                    <Link
                      href="/contact"
                      className="text-xs font-semibold text-[#1266B6] transition hover:opacity-75"
                    >
                      Need help?
                    </Link>
                  </div>

                  <div className="relative mt-2">
                    <input
                      id="password"
                      name="password"
                      type={
                        showPassword
                          ? 'text'
                          : 'password'
                      }
                      autoComplete="current-password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(event) =>
                        setPassword(event.target.value)
                      }
                      disabled={isSubmitting}
                      required
                      minLength={8}
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 pr-20 text-sm text-[#050A30] outline-none transition placeholder:text-slate-400 focus:border-[#1266B6] focus:ring-4 focus:ring-[#1266B6]/10 disabled:cursor-not-allowed disabled:bg-slate-100"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword(
                          (visible) => !visible,
                        )
                      }
                      disabled={isSubmitting}
                      className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md px-2 py-1 text-xs font-semibold text-[#1266B6] transition hover:bg-slate-100 disabled:opacity-50"
                      aria-label={
                        showPassword
                          ? 'Hide password'
                          : 'Show password'
                      }
                    >
                      {showPassword ? 'Hide' : 'Show'}
                    </button>
                  </div>
                </div>

                {/* REMEMBER */}
                <div className="flex items-center justify-between gap-4">
                  <label className="flex cursor-pointer items-center gap-2">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(event) =>
                        setRememberMe(
                          event.target.checked,
                        )
                      }
                      disabled={isSubmitting}
                      className="h-4 w-4 rounded border-slate-300 text-[#1266B6] focus:ring-[#1266B6]"
                    />

                    <span className="text-sm text-slate-600">
                      Remember me
                    </span>
                  </label>

                  <span className="text-xs text-slate-400">
                    Protected access
                  </span>
                </div>

                {/* SUBMIT */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#050A30] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#1266B6] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <span>
                    {isSubmitting
                      ? 'Signing in...'
                      : 'Sign In'}
                  </span>

                  {!isSubmitting && (
                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  )}
                </button>
              </form>

              {/* ACCESS INFORMATION */}
              <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-sm font-semibold text-[#050A30]">
                  Account access
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Access to Nexus Hub capabilities depends on your
                  account and assigned role.
                </p>

                <Link
                  href="/contact"
                  className="mt-4 inline-flex text-sm font-semibold text-[#1266B6] transition hover:translate-x-0.5"
                >
                  Contact Nexus Hub →
                </Link>
              </div>

              <div className="mt-8 text-center">
                <Link
                  href="/"
                  className="text-sm font-semibold text-slate-500 transition hover:text-[#1266B6]"
                >
                  Return to the public website
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}