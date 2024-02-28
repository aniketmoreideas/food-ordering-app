"use client";
import Image from "next/image";
import { useState } from "react";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleFormSubmt(ev) {
    ev.preventDefault();
    fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-type": "application/json" },
    });
  }

  return (
    <section className="my-8 max-w-xs mx-auto">
      <h1 className="text-center text-primary text-3xl font-semibold">
        Register
      </h1>
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
        <button type="submit">Register</button>
      </form>
      <p className="text-center text-gray-500 py-3 text-sm italic">
        or login with Google
      </p>
      <button className="flex justify-center gap-2 items-center">
        <Image src={"/google.png"} alt="google" height={"16"} width={"16"} />
        Login with Google
      </button>
    </section>
  );
}
