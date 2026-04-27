"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (username && password) router.push("/dashboard");
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0d0d0d] text-white">
      {/* Background logo */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <img
          src="/logo.png"
          alt="QRiosity background"
          className="w-[1150px] max-w-none opacity-45 blur-[3px]"
        />
      </div>

      {/* Premium overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/80 via-black/25 to-black/80" />

      <section className="relative z-10 flex min-h-screen flex-col px-10 py-10">
        <div className="mx-auto w-full max-w-6xl">
          {/* Brand */}
          <div className="mb-8">
            <h1 className="text-3xl font-black tracking-[0.18em]">
              <span className="text-green-500">QR</span>iosity
            </h1>
            <p className="mt-1 text-xs tracking-[0.35em] text-slate-400">
              VOICES HEARD : SOLUTIONS EARNED
            </p>
          </div>

          {/* Trust cue */}
          <p className="mb-4 text-xs tracking-[0.3em] text-green-400">
            SECURE CLIENT PORTAL
          </p>

          {/* Login panel */}
          <form
            onSubmit={handleLogin}
            className="rounded-[2rem] bg-black/20 p-6 shadow-2xl backdrop-blur-sm"
          >
            <div className="grid gap-5 md:grid-cols-[1fr_1fr_auto] md:items-start">
              {/* Username */}
              <div>
                <label className="mb-2 block text-sm font-bold text-white">
                  Username
                </label>
                <input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  type="text"
                  className="h-14 w-full rounded-full bg-white/90 backdrop-blur-sm px-6 text-slate-950 outline-none transition-all duration-200 focus:scale-[1.01] focus:ring-4 focus:ring-green-400/30"
                />

                <button
                  type="button"
                  className="mt-4 text-sm font-bold text-slate-300 transition hover:text-green-400"
                >
                  Forgot username or password?
                </button>
              </div>

              {/* Password */}
              <div>
                <label className="mb-2 block text-sm font-bold text-white">
                  Password
                </label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  className="h-14 w-full rounded-full bg-white/90 backdrop-blur-sm px-6 text-slate-950 outline-none transition-all duration-200 focus:scale-[1.01] focus:ring-4 focus:ring-green-400/30"
                />
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="mt-7 h-14 rounded-full border-2 border-white px-12 text-sm font-black tracking-[0.25em] text-white transition-all duration-200 hover:bg-white hover:text-black active:scale-95"
              >
                LOG IN
              </button>
            </div>
          </form>
        </div>

        {/* Footer line */}
        <div className="flex flex-1 items-end justify-center pb-10">
          <p className="text-xs tracking-[0.3em] text-white/35">
            ENTERPRISE CUSTOMER EXPERIENCE INTELLIGENCE
          </p>
        </div>
      </section>
    </main>
  );
}
