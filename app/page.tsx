"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e: any) {
    e.preventDefault();

    // TEMP LOGIN (we will replace with Supabase next)
    if (email && password) {
      router.push("/dashboard");
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
      <div className="w-full max-w-md rounded-3xl bg-white/5 p-8 shadow-xl backdrop-blur">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold">QRiosity</h1>
          <p className="mt-2 text-sm text-slate-400">
            Voices Heard. Solutions Earned.
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm outline-none placeholder:text-slate-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm outline-none placeholder:text-slate-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full rounded-xl bg-white py-3 text-sm font-semibold text-slate-900"
          >
            Log In
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-slate-500">
          Forgot password? (Coming soon)
        </p>
      </div>
    </main>
  );
}
