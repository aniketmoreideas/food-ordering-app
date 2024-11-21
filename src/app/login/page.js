"use client";
import Image from "next/image";
import { useState } from "react";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleFormSubmt(ev) {
    ev.preventDefault();
    await signIn("credentials", { email, password });
  }

  return (
    <section className="my-8 max-w-xs mx-auto">
      <h1 className="text-center text-primary text-3xl font-semibold">Login</h1>
      <form onSubmit={handleFormSubmt}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
          required={true}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          required={true}
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <p className="text-center text-gray-500 py-3 text-sm italic">
        or login with Google
      </p>
      <button
        onClick={() => signIn("google", { callbackUrl: "/" })}
        type="button"
        className="flex justify-center gap-2 items-center"
      >
        <Image src={"/google.png"} alt="google" height={"16"} width={"16"} />
        Login with Google
      </button>
    </section>
  );
}
