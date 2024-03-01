"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProfilePage() {
  const session = useSession();
  const [userName, setUserName] = useState("");

  const { status } = session;

  useEffect(() => {
    if (status === "authenticated") {
      setUserName(session.data.user.name);
    }
  }, [session, status]);

  if (status === "loading") {
    return "Loading...";
  }
  if (status === "unauthenticated") {
    return redirect("/login");
  }

  const userImage = session.data.user.image;

  async function handleProfileInfoUpdate(ev) {
    ev.preventDefault();
    // console.log(ev);
    const response = await fetch("/api/profile", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: userName }),
    });
  }

  return (
    <section className="my-8 max-w-sm mx-auto">
      <h1 className="text-center text-primary text-3xl font-semibold">
        Profile
      </h1>
      <div className="flex gap-4 my-4 items-center">
        <div>
          <div>
            <Image
              src={userImage}
              width={200}
              height={200}
              className="w-full h-full rounded-lg"
            />
            <button type="button" className="mt-2">
              Edit
            </button>
          </div>
        </div>
        <div className="grow">
          <form onSubmit={handleProfileInfoUpdate}>
            <input
              type="text"
              name="name"
              placeholder="First Name and Last Name"
              value={userName}
              onChange={(ev) => setUserName(ev.target.value)}
              required="true"
            />
            <input
              type="email"
              value={session?.data?.user?.email}
              disabled={true}
              className="text-gray-500"
            />
            <button type="submit">Save</button>
          </form>
        </div>
      </div>
    </section>
  );
}
