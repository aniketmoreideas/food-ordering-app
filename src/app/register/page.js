"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [creatingUser, setCreatingUser] = useState(false);
  const [userCreated, setUserCreated] = useState(false);
  const [error, setError] = useState(false);

  async function handleFormSubmt(ev) {
    ev.preventDefault();
    setCreatingUser(true);
    setError(false);
    setUserCreated(false);
    const response = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-type": "application/json" },
    });
    setCreatingUser(false);
    // console.log(response);
    if (response.ok) {
      setUserCreated(true);
    } else {
      setError(true);
    }
  }

  return (
    <section className="my-8 max-w-xs mx-auto">
      <h1 className="text-center text-primary text-3xl font-semibold">
        Register
      </h1>
      {userCreated && (
        <div className="text-sm text-center text-gray-800 my-3">
          User created successfully <br />
          Now you can{" "}
          <Link href={"/login"} className="underline italic">
            Login &raquo;
          </Link>
        </div>
      )}
      {error && (
        <div className="text-sm text-center text-gray-800 my-3">
          Error! Please try again!
        </div>
      )}

      <form onSubmit={handleFormSubmt}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
          required={true}
          disabled={creatingUser}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          required={true}
          onChange={(ev) => setPassword(ev.target.value)}
          disabled={creatingUser}
        />
        <button type="submit" disabled={creatingUser}>
          Register
        </button>
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

      <div className="text-center my-4 text-sm text-gray-800">
        Existing account?{" "}
        <Link href={"/login"} className="underline italic">
          Login here &raquo;
        </Link>
      </div>
    </section>
  );
}
