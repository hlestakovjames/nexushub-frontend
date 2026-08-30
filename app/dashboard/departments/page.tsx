export default function DepartmentsPage() {
  return (
    <div className="mx-auto max-w-[1500px] px-5 py-7 sm:px-6 lg:px-8 lg:py-9">
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
          Administration
        </p>

        <h2 className="mt-2 text-3xl font-bold tracking-tight">
          Departments
        </h2>

        <p className="mt-3 max-w-2xl leading-7 text-slate-600">
          Organize teams, responsibilities, and internal structures
          within Nexus Hub organizations.
        </p>
      </div>

      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold text-[#1266B6]">
          Department management
        </p>

        <h3 className="mt-2 text-2xl font-bold">
          Department records will appear here.
        </h3>

        <p className="mt-3 max-w-2xl leading-7 text-slate-600">
          Department creation, organization assignment, editing,
          status management, and structural relationships will be
          connected here.
        </p>

        <button
          type="button"
          disabled
          className="mt-6 rounded-lg bg-[#050A30] px-5 py-3 text-sm font-semibold text-white opacity-50"
        >
          Add Department
        </button>
      </div>
    </div>
  );
}