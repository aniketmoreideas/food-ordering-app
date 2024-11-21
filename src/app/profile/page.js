"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function ProfilePage() {
  const session = useSession();
  // console.log(session);
  const [userName, setUserName] = useState("");
  const [userImage, setUserImage] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const { status } = session;

  useEffect(() => {
    if (status === "authenticated") {
      setUserName(session.data.user.name);
      setUserImage(session.data.user.image);
      fetch("api/profile").then((response) => {
        response.json().then((data) => {
          console.log(data);
          setCity(data.city);
          setCountry(data.country);
          setStreetAddress(data.streetAddress);
          setPhoneNumber(data.phoneNumber);
          setPostalCode(data.postalCode);
        });
      });
    }
  }, [session, status]);

  if (status === "loading") {
    return "Loading...";
  }
  if (status === "unauthenticated") {
    return redirect("/login");
  }

  async function handleProfileInfoUpdate(ev) {
    ev.preventDefault();
    // console.log(ev);
    const response = await fetch("/api/profile", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: userName,
        image: userImage,
        phoneNumber,
        streetAddress,
        postalCode,
        city,
        country,
      }),
    });
    if (response.ok) {
      toast.success("Saved...");
    }
  }

  const handleFileChange = async (ev) => {
    const files = ev.target.files;
    if (files?.length == 1) {
      const data = new FormData();
      data.set("file", files[0]);
      await toast.promise(
        fetch("api/upload", {
          method: "POST",
          body: data,
        }).then((response) => {
          if (response.ok) {
            return response.json().then((res) => {
              setUserImage(res);
            });
          }
          throw new Error("Something went wrong");
        }),
        {
          loading: "Uploading...",
          success: "Upload Complete",
          error: "Error!",
        }
      );
    }
  };

  return (
    <section className="my-8 max-w-sm mx-auto">
      <h1 className="text-center text-primary text-3xl font-semibold">
        Profile
      </h1>
      <div className="flex gap-4 my-4 ">
        <div>
          <div className="max-w-[120px] mt-3">
            {userImage && (
              <Image
                src={userImage}
                width={200}
                height={200}
                className="w-full h-full rounded-lg"
                alt="profile image"
              />
            )}
            <label>
              <input
                type="file"
                className="hidden"
                onChange={handleFileChange}
                accept=".jpg, .jpeg, .png"
              />
              <span className="p-2 rounded-lg border border-gray-400 text-sm text-center block mt-1 cursor-pointer">
                Edit
              </span>
            </label>
          </div>
        </div>
        <div className="grow">
          <form id="profileForm" onSubmit={handleProfileInfoUpdate}>
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
            <input
              type="tel"
              value={phoneNumber}
              onChange={(ev) => setPhoneNumber(ev.target.value)}
              placeholder="Phone Number"
            />
            <input
              type="text"
              value={streetAddress}
              onChange={(ev) => setStreetAddress(ev.target.value)}
              placeholder="Street Address"
            />
            <input
              type="text"
              value={postalCode}
              onChange={(ev) => setPostalCode(ev.target.value)}
              placeholder="Postal Code"
            />
            <input
              type="text"
              value={city}
              onChange={(ev) => setCity(ev.target.value)}
              placeholder="City"
            />
            <input
              type="text"
              value={country}
              onChange={(ev) => setCountry(ev.target.value)}
              placeholder="Country"
            />
            <button type="submit">Save</button>
          </form>
        </div>
      </div>
    </section>
  );
}
