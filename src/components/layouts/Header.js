"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Header() {
  const session = useSession();
  const status = session.status;

  return (
    <header className="flex items-center justify-between">
      <nav className="flex gap-8 text-gray-500 font-semibold items-center">
        <Link className="text-primary font-semibold text-2xl" href="/">
          HOT PIZZA
        </Link>
        <Link href={"/"}>Home</Link>
        <Link href={""}>About</Link>
        <Link href={""}>Menu</Link>
        <Link href={""}>Contact</Link>
      </nav>
      <nav className="flex gap-4 text-gray-500 font-semibold items-center">
        {status !== "authenticated" && (
          <>
            <Link href="/login">Login</Link>
            <Link
              href={"/register"}
              className="bg-primary rounded-full px-8 py-2 text-white"
            >
              Register
            </Link>
          </>
        )}
        {status === "authenticated" && (
          <button
            onClick={() => signOut()}
            className="bg-primary border-0 rounded-full px-8 py-2 text-white"
          >
            Logout
          </button>
        )}
      </nav>
    </header>
  );
}
