export default function SecurityPage() {
  return (
    <div className="mx-auto max-w-[1500px] px-5 py-7 sm:px-6 lg:px-8 lg:py-9">
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
          Security
        </p>

        <h2 className="mt-2 text-3xl font-bold tracking-tight">
          Security &amp; Audit
        </h2>

        <p className="mt-3 max-w-2xl leading-7 text-slate-600">
          Monitor authentication activity, security events, and
          audit information across the Nexus Hub system.
        </p>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
            Authentication
          </p>

          <p className="mt-3 text-xl font-bold text-emerald-600">
            Operational
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
            Audit Events
          </p>

          <p className="mt-3 text-3xl font-bold">—</p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
            Security Alerts
          </p>

          <p className="mt-3 text-3xl font-bold">—</p>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold text-[#1266B6]">
          Audit activity
        </p>

        <h3 className="mt-2 text-2xl font-bold">
          Security events will appear here.
        </h3>

        <p className="mt-3 max-w-2xl leading-7 text-slate-600">
          Audit history, authentication events, investigation tools,
          and security monitoring will be connected to the backend.
        </p>
      </div>
    </div>
  );
}