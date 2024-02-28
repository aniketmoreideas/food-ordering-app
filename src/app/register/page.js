import Image from "next/image";
export default function Register() {
  return (
    <section className="my-8 max-w-xs mx-auto">
      <h1 className="text-center text-primary text-3xl font-semibold">
        Register
      </h1>
      <form action="">
        <input type="email" name="email" id="email" placeholder="Email" />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
        <button type="submit">Register</button>
      </form>
      <p className="text-center text-gray-500 py-3 text-sm italic">or login with Google</p>
      <button className="flex justify-center gap-2 items-center">
        <Image src={"/google.png"} height={"16"} width={"16"} />
        Login with Google
      </button>
    </section>
  );
}
