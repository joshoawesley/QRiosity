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
    <main className="min-h-screen bg-[#111111] text-white">
      <section className="flex min-h-screen flex-col items-center justify-center px-8">
        <div className="mb-10 flex w-full justify-center">
          <img
            src="/logo.png"
            alt="QRiosity Logo"
            className="h-[360px] w-auto max-w-[760px] object-contain"
          />
        </div>

        <form onSubmit={handleLogin} className="w-full max-w-5xl">
          <div className="grid gap-6 md:grid-cols-[1fr_1fr_auto] md:items-start">
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

            <div>
              <label className="mb-2 block text-sm font-bold">Password</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="h-14 w-full rounded-full bg-slate-100 px-6 text-slate-900 outline-none"
              />
            </div>

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
