"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    // Temporary login until Supabase is connected
    if (username && password) {
      router.push("/dashboard");
    }
  }

  return (
    <main className="min-h-screen bg-[#121212] text-white">
      <section className="flex min-h-screen flex-col items-center justify-center px-6">
        {/* Logo / Hero area */}
        <div className="flex w-full max-w-5xl flex-1 items-end justify-center pt-10">
          <div className="text-center">
            <div className="mx-auto mb-6 flex h-56 w-56 items-center justify-center rounded-3xl border border-white/20 bg-gradient-to-br from-slate-800 to-black shadow-2xl md:h-72 md:w-72">
              <div className="text-center">
                <div className="mx-auto mb-4 h-24 w-24 rounded-xl border-4 border-white/70 bg-white/10 shadow-[0_0_40px_rgba(34,197,94,0.45)]" />
                <p className="text-sm tracking-[0.35em] text-green-400">
                  QR
                </p>
              </div>
            </div>

            <h1 className="text-5xl font-bold tracking-[0.18em] md:text-7xl">
              <span className="text-green-500">QR</span>iosity
            </h1>
            <p className="mt-3 text-sm tracking-[0.35em] text-slate-400">
              VOICES HEARD. SOLUTIONS EARNED.
            </p>
          </div>
        </div>

        {/* Login area */}
        <form
          onSubmit={handleLogin}
          className="w-full max-w-5xl flex-1 pt-10"
        >
          <div className="grid gap-5 md:grid-cols-[1fr_1fr_auto] md:items-end">
            <div>
              <label className="mb-2 block text-sm font-semibold">
                Username
              </label>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="h-12 w-full rounded-full border-2 border-white/80 bg-slate-100 px-5 text-slate-900 outline-none focus:border-green-400"
                type="text"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold">
                Password
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12 w-full rounded-full border-2 border-white/80 bg-slate-100 px-5 text-slate-900 outline-none focus:border-green-400"
                type="password"
              />
            </div>

            <button
              type="submit"
              className="h-12 rounded-full border-2 border-white px-10 text-sm font-bold tracking-[0.2em] transition hover:bg-white hover:text-slate-950"
            >
              LOG IN
            </button>
          </div>

          <div className="mt-6 text-center">
            <button
              type="button"
              className="text-sm font-semibold text-slate-300 hover:text-green-400"
            >
              Forgot username or password?
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
