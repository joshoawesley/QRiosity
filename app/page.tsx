export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden min-h-screen w-64 bg-slate-950 p-6 text-white md:block">
          <h1 className="text-2xl font-bold">QRiosity</h1>
          <p className="mt-1 text-sm text-slate-400">Voices Heard. Solutions Earned.</p>

          <nav className="mt-10 space-y-3 text-sm">
            {[
              "Dashboard",
              "Feedback",
              "Analytics",
              "Alerts",
              "Locations",
              "Reports",
              "Settings",
            ].map((item) => (
              <div
                key={item}
                className={`rounded-xl px-4 py-3 ${
                  item === "Dashboard"
                    ? "bg-white text-slate-950"
                    : "text-slate-300 hover:bg-slate-800"
                }`}
              >
                {item}
              </div>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <section className="flex-1 p-6 md:p-10">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h2 className="text-3xl font-bold">Executive Overview</h2>
              <p className="mt-1 text-slate-600">
                Real-time customer experience insights across your service organization.
              </p>
            </div>

            <button className="rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white">
              Export Report
            </button>
          </div>

          {/* KPI Cards */}
          <div className="grid gap-5 md:grid-cols-5">
            <KpiCard title="NPS" value="+62" note="Strong loyalty" />
            <KpiCard title="CSAT" value="4.7/5" note="Customer satisfaction" />
            <KpiCard title="CES" value="2.1" note="Lower is better" />
            <KpiCard title="Responses" value="248" note="Last 30 days" />
            <KpiCard title="Open Alerts" value="6" note="Needs attention" />
          </div>

          {/* Middle Section */}
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            <div className="rounded-2xl bg-white p-6 shadow-sm lg:col-span-2">
              <h3 className="text-xl font-semibold">Customer Experience Trend</h3>
              <p className="mt-1 text-sm text-slate-500">NPS, CSAT, and response volume over time</p>

              <div className="mt-8 flex h-64 items-center justify-center rounded-xl border border-dashed border-slate-300 bg-slate-50 text-slate-500">
                Chart placeholder
              </div>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold">AI Insights</h3>
              <div className="mt-5 space-y-4 text-sm text-slate-700">
                <Insight text="Scheduling delays are the most common negative feedback theme." />
                <Insight text="Technician professionalism is consistently rated highly." />
                <Insight text="Communication before arrival is trending as an improvement opportunity." />
              </div>
            </div>
          </div>

          {/* Recent Alerts */}
          <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm">
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-xl font-semibold">Recent Alerts</h3>
              <button className="text-sm font-semibold text-slate-700">View All</button>
            </div>

            <div className="space-y-4">
              <AlertRow
                customer="Anonymous Customer"
                issue="Low CSAT score tied to delayed follow-up."
                score="CSAT 2/5"
                status="Open"
              />
              <AlertRow
                customer="Northside Lab"
                issue="Customer mentioned unclear arrival communication."
                score="NPS 4"
                status="Open"
              />
              <AlertRow
                customer="West Region Account"
                issue="Positive feedback: technician was professional and thorough."
                score="CSAT 5/5"
                status="Resolved"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function KpiCard({
  title,
  value,
  note,
}: {
  title: string;
  value: string;
  note: string;
}) {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm">
      <p className="text-sm font-medium text-slate-500">{title}</p>
      <p className="mt-3 text-3xl font-bold">{value}</p>
      <p className="mt-2 text-sm text-slate-500">{note}</p>
    </div>
  );
}

function Insight({ text }: { text: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
      {text}
    </div>
  );
}

function AlertRow({
  customer,
  issue,
  score,
  status,
}: {
  customer: string;
  issue: string;
  score: string;
  status: string;
}) {
  return (
    <div className="grid gap-3 rounded-xl border border-slate-200 p-4 md:grid-cols-4 md:items-center">
      <div className="font-semibold">{customer}</div>
      <div className="md:col-span-2 text-sm text-slate-600">{issue}</div>
      <div className="flex items-center justify-between gap-3">
        <span className="text-sm font-semibold">{score}</span>
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            status === "Open"
              ? "bg-red-100 text-red-700"
              : "bg-green-100 text-green-700"
          }`}
        >
          {status}
        </span>
      </div>
    </div>
  );
}
