export default function UsersPage() {
  return (
    <div className="mx-auto max-w-[1500px] px-5 py-7 sm:px-6 lg:px-8 lg:py-9">
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
          Administration
        </p>

        <h2 className="mt-2 text-3xl font-bold tracking-tight">
          Users
        </h2>

        <p className="mt-3 max-w-2xl leading-7 text-slate-600">
          Manage Nexus Hub accounts, memberships, user status,
          and system access.
        </p>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {[
          ['Total Users', '—'],
          ['Active Users', '—'],
          ['Pending Users', '—'],
        ].map(([label, value]) => (
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
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold text-[#1266B6]">
          User directory
        </p>

        <h3 className="mt-2 text-2xl font-bold">
          User records will appear here.
        </h3>

        <p className="mt-3 max-w-2xl leading-7 text-slate-600">
          Search, filtering, account creation, activation,
          memberships, and role assignment will be connected to
          the backend.
        </p>
      </div>
    </div>
  );
}