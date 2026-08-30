export default function OrganizationsPage() {
  return (
    <div className="mx-auto max-w-[1500px] px-5 py-7 sm:px-6 lg:px-8 lg:py-9">
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
          Administration
        </p>

        <h2 className="mt-2 text-3xl font-bold tracking-tight">
          Organizations
        </h2>

        <p className="mt-3 max-w-2xl leading-7 text-slate-600">
          Manage organizations connected to the Nexus Hub system,
          including their structure, memberships, and access.
        </p>
      </div>

      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-semibold text-[#1266B6]">
              Organization management
            </p>

            <h3 className="mt-2 text-2xl font-bold">
              Organization directory
            </h3>

            <p className="mt-3 max-w-2xl leading-7 text-slate-600">
              Real organization records, creation, editing, status,
              memberships, and structure will be connected here.
            </p>
          </div>

          <button
            type="button"
            disabled
            className="rounded-lg bg-[#050A30] px-5 py-3 text-sm font-semibold text-white opacity-50"
          >
            Add Organization
          </button>
        </div>
      </div>
    </div>
  );
}