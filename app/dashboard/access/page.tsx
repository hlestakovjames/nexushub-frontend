export default function AccessPage() {
  return (
    <div className="mx-auto max-w-[1500px] px-5 py-7 sm:px-6 lg:px-8 lg:py-9">
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
          Administration
        </p>

        <h2 className="mt-2 text-3xl font-bold tracking-tight">
          Roles &amp; Permissions
        </h2>

        <p className="mt-3 max-w-2xl leading-7 text-slate-600">
          Define system roles and control the capabilities available
          to each role.
        </p>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold text-[#1266B6]">
            Roles
          </p>

          <h3 className="mt-2 text-2xl font-bold">
            Role management
          </h3>

          <p className="mt-3 leading-7 text-slate-600">
            Create, edit, assign, and manage system roles.
          </p>

          <button
            type="button"
            disabled
            className="mt-6 rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-400"
          >
            Manage Roles
          </button>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold text-[#1266B6]">
            Permissions
          </p>

          <h3 className="mt-2 text-2xl font-bold">
            Permission management
          </h3>

          <p className="mt-3 leading-7 text-slate-600">
            Control which actions and capabilities are available to
            different system roles.
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
    </div>
  );
}