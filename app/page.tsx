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
    <main className="relative min-h-screen bg-[#111111] text-white overflow-hidden">
      {/* Background Logo */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <img
          src="/logo.png"
          alt="background"
          className="w-[900px] max-w-none opacity-20 blur-sm"
        />
      </div>
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-8">
        
        {/* FORM */}
        <form onSubmit={handleLogin} className="w-full max-w-5xl">
          <div className="grid gap-6 md:grid-cols-[1fr_1fr_auto] md:items-start">
            
            {/* USERNAME */}
            <div>
              <label className="mb-2 block text-sm font-bold">Username</label>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                className="h-14 w-full rounded-full bg-slate-100 px-6 text-slate-900 outline-none"
              />

              <button
                type="button"
                className="mt-4 text-sm font-bold text-slate-200 hover:text-green-400"
              >
                Forgot username or password?
              </button>
            </div>

            {/* PASSWORD */}
            <div>
              <label className="mb-2 block text-sm font-bold">Password</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="h-14 w-full rounded-full bg-slate-100 px-6 text-slate-900 outline-none"
              />
            </div>

            {/* LOGIN BUTTON */}
            <button
              type="submit"
              className="mt-7 h-14 rounded-full border-2 border-white px-12 text-sm font-bold tracking-[0.25em] transition hover:bg-white hover:text-black"
            >
              LOG IN
            </button>

          </div>
        </form>
      </section>
    </main>
  );
}
