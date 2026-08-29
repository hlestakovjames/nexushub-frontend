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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError('');

    const normalizedEmail = email.trim().toLowerCase();

    if (!normalizedEmail || !password) {
      setError('Please enter your email address and password.');
      return;
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters long.');
      return;
    }

    try {
      setIsSubmitting(true);

      const response = await login(
        normalizedEmail,
        password,
      );

      /*
       * Temporary staging authentication storage.
       *
       * We are deliberately keeping this isolated so it can later
       * be replaced with a more secure HTTP-only cookie/session flow.
       */
      localStorage.setItem(
        'nexus_hub_access_token',
        response.access_token,
      );

      localStorage.setItem(
        'nexus_hub_user',
        JSON.stringify(response.user),
      );

      router.push('/dashboard');
    } catch (err) {
      if (err instanceof Error) {
        if (err.message.includes('401')) {
          setError('Invalid email or password.');
        } else {
          setError(
            'Unable to sign in right now. Please try again.',
          );
        }
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
    <main className="min-h-[calc(100vh-4rem)] bg-slate-50 text-[#050A30]">
      <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl lg:grid-cols-2">
        {/* BRAND PANEL */}
        <section className="hidden bg-[#050A30] px-10 py-16 text-white lg:flex lg:flex-col lg:justify-between lg:px-14">
          <div>
            <Link
              href="/"
              className="text-sm font-semibold text-[#5FC9E6] transition hover:opacity-80"
            >
              ← Nexus Hub
            </Link>

            <div className="mt-20 max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#5FC9E6]">
                Member Access
              </p>

              <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight">
                Welcome back.
              </h1>

              <p className="mt-6 text-lg leading-8 text-white/65">
                Sign in to access your Nexus Hub account and the
                capabilities available to you.
              </p>
            </div>
          </div>

          <p className="text-sm text-white/35">
            Connecting Ideas Through Digital Innovation.
          </p>
        </section>

        {/* LOGIN PANEL */}
        <section className="flex items-center justify-center px-6 py-14 sm:px-8 lg:px-12">
          <div className="w-full max-w-md">
            <div className="lg:hidden">
              <Link
                href="/"
                className="text-sm font-semibold text-[#1266B6]"
              >
                ← Nexus Hub
              </Link>
            </div>

            <div className="mt-8 lg:mt-0">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Sign In
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Access your account.
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Enter your credentials to continue.
              </p>
            </div>

            {error && (
              <div
                role="alert"
                className="mt-7 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm leading-6 text-red-700"
              >
                {error}
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-6"
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
                  value={email}
                  onChange={(event) =>
                    setEmail(event.target.value)
                  }
                  placeholder="you@example.com"
                  disabled={isSubmitting}
                  required
                  className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-[#050A30] outline-none transition placeholder:text-slate-400 focus:border-[#1266B6] focus:ring-2 focus:ring-[#1266B6]/15 disabled:cursor-not-allowed disabled:bg-slate-100"
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

                  <span className="text-xs text-slate-400">
                    Minimum 8 characters
                  </span>
                </div>

                <div className="relative mt-2">
                  <input
                    id="password"
                    name="password"
                    type={
                      showPassword ? 'text' : 'password'
                    }
                    autoComplete="current-password"
                    value={password}
                    onChange={(event) =>
                      setPassword(event.target.value)
                    }
                    placeholder="Enter your password"
                    disabled={isSubmitting}
                    required
                    minLength={8}
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 pr-20 text-sm text-[#050A30] outline-none transition placeholder:text-slate-400 focus:border-[#1266B6] focus:ring-2 focus:ring-[#1266B6]/15 disabled:cursor-not-allowed disabled:bg-slate-100"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword((visible) => !visible)
                    }
                    disabled={isSubmitting}
                    className="absolute right-3 top-1/2 -translate-y-1/2 px-2 py-1 text-xs font-semibold text-[#1266B6] transition hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {showPassword ? 'Hide' : 'Show'}
                  </button>
                </div>
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-xl bg-[#050A30] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#1266B6] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? 'Signing in...' : 'Sign In'}
              </button>
            </form>

            <div className="mt-8 rounded-xl border border-slate-200 bg-white px-5 py-4">
              <p className="text-sm leading-6 text-slate-600">
                Account access is currently provided through the
                Nexus Hub authentication system.
              </p>
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/"
                className="text-sm font-semibold text-[#1266B6] transition hover:opacity-80"
              >
                Return to Nexus Hub →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}