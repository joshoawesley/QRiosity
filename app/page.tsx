const metrics = [
  { label: "NPS", value: "+62", detail: "Promoter strength", trend: "+8% this month" },
  { label: "CSAT", value: "4.7", detail: "Average satisfaction", trend: "+4% this month" },
  { label: "CES", value: "2.1", detail: "Customer effort", trend: "Lower is better" },
  { label: "Responses", value: "248", detail: "Last 30 days", trend: "+31 new" },
];

const nav = ["Dashboard", "Feedback", "Analytics", "Alerts", "Locations", "Reports", "Settings"];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F6F8FB] text-slate-900">
      <div className="flex min-h-screen">
        <aside className="hidden w-72 bg-white px-6 py-8 shadow-sm lg:block">
          <div className="mb-10">
            <h1 className="text-3xl font-bold tracking-tight">QRiosity</h1>
            <p className="mt-1 text-sm text-slate-500">Voices Heard. Solutions Earned.</p>
          </div>

          <nav className="space-y-2">
            {nav.map((item) => (
              <div
                key={item}
                className={`rounded-2xl px-4 py-3 text-sm font-medium ${
                  item === "Dashboard"
                    ? "bg-slate-900 text-white"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                {item}
              </div>
            ))}
          </nav>
        </aside>

        <section className="flex-1 px-6 py-8 lg:px-10">
          <header className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                Client Portal
              </p>
              <h2 className="mt-1 text-4xl font-bold tracking-tight">Executive Overview</h2>
              <p className="mt-2 text-slate-600">
                Monitor customer sentiment, service quality, and action items in one place.
              </p>
            </div>

            <div className="flex gap-3">
              <button className="rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold shadow-sm">
                Last 30 Days
              </button>
              <button className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm">
                Export Report
              </button>
            </div>
          </header>

          <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {metrics.map((metric) => (
              <div key={metric.label} className="rounded-3xl bg-white p-6 shadow-sm">
                <p className="text-sm font-medium text-slate-500">{metric.label}</p>
                <div className="mt-4 flex items-end justify-between">
                  <p className="text-4xl font-bold">{metric.value}</p>
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                    {metric.trend}
                  </span>
                </div>
                <p className="mt-3 text-sm text-slate-500">{metric.detail}</p>
              </div>
            ))}
          </section>

          <section className="mt-8 grid gap-6 xl:grid-cols-3">
            <div className="rounded-3xl bg-white p-6 shadow-sm xl:col-span-2">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold">Customer Experience Trends</h3>
                  <p className="mt-1 text-sm text-slate-500">NPS, CSAT, CES, and response volume</p>
                </div>
                <button className="rounded-xl bg-slate-100 px-4 py-2 text-sm font-semibold">
                  View Analytics
                </button>
              </div>

              <div className="mt-8 flex h-72 items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-slate-50">
                <div className="text-center">
                  <p className="text-lg font-semibold text-slate-700">Chart Area</p>
                  <p className="mt-1 text-sm text-slate-500">Live trend graph will appear here</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-slate-900 p-6 text-white shadow-sm">
              <h3 className="text-xl font-bold">AI Insights</h3>
              <p className="mt-1 text-sm text-slate-300">Priority themes from recent feedback</p>

              <div className="mt-6 space-y-4">
                {[
                  "Scheduling delays are appearing in multiple negative comments.",
                  "Technician professionalism is the strongest positive driver.",
                  "Customers want clearer communication before arrival windows.",
                ].map((text) => (
                  <div key={text} className="rounded-2xl bg-white/10 p-4 text-sm leading-6">
                    {text}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mt-8 grid gap-6 xl:grid-cols-3">
            <div className="rounded-3xl bg-white p-6 shadow-sm xl:col-span-2">
              <h3 className="text-xl font-bold">Recent Feedback</h3>

              <div className="mt-5 space-y-4">
                {[
                  ["Northside Lab", "Technician was professional and explained the repair clearly.", "CSAT 5/5"],
                  ["West Region Account", "Delayed arrival with limited communication.", "NPS 4"],
                  ["Anonymous Customer", "Service was completed, but follow-up took longer than expected.", "CES 3.8"],
                ].map(([name, comment, score]) => (
                  <div key={name} className="rounded-2xl border border-slate-100 p-4">
                    <div className="flex items-center justify-between gap-4">
                      <p className="font-semibold">{name}</p>
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold">
                        {score}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-slate-600">{comment}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold">Open Alerts</h3>
              <p className="mt-1 text-sm text-slate-500">Issues needing attention</p>

              <div className="mt-6 space-y-4">
                {["Low CSAT", "Detractor Response", "Negative Sentiment"].map((alert) => (
                  <div key={alert} className="rounded-2xl border border-red-100 bg-red-50 p-4">
                    <p className="font-semibold text-red-800">{alert}</p>
                    <p className="mt-1 text-sm text-red-700">Follow-up recommended</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}
