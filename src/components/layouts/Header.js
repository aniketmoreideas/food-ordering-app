"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Header() {
  const session = useSession();
  const status = session.status;
  let userName = session.data?.user?.name || session.data?.user?.email;
  if (userName && userName.includes(" ")) {
    userName = userName.split(" ")[0];
  }
  // console.log(session);

  return (
    <header className="flex items-center justify-between">
      <nav className="flex gap-8 text-gray-500 font-semibold items-center">
        <Link className="text-primary font-semibold text-2xl" href="/">
          HOT PIZZA
        </Link>
        <Link href={"/"}>Home</Link>
        <Link href={"#contactus"}>About</Link>
        <Link href={"#menu"}>Menu</Link>
        <Link href={"#contactus"}>Contact</Link>
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
          <>
            <Link href={"/profile"} className="whitespace-nowrap">Hello, {userName}</Link>
            <button
              onClick={() => signOut()}
              className="bg-primary border-0 rounded-full px-8 py-2 text-white"
            >
              Logout
            </button>
          </>
        )}
      </nav>
    </header>
  );
}
