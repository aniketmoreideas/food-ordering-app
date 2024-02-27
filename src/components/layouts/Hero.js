import Image from "next/image";
import Right from "../icons/Right";
export default function Hero() {
  return (
    <section className="hero">
      <div className="py-12">
        <h1 className="font-semibold text-5xl leading-[1.2]">
          Everything is
          <br />
          better with a<br />
          <span className="text-primary">Pizza</span>
        </h1>
        <p className="text-md italic text-gray-600 py-7">
          Pizza is the missing piece that make every day complete, a simple yet
          delicious joy in life
        </p>
        <div className="flex gap-3 items-center">
          <button className="bg-primary py-2 rounded-full text-white px-4 flex uppercase items-center gap-2 shadow-lg">
            Order now
            <Right />
          </button>
          <button className="text-gray-500 font-semibold flex items-center gap-2">
            Learn more <Right />
          </button>
        </div>
      </div>
      <div className="relative">
        <Image
          src={"/pizza.png"}
          layout={"fill"}
          objectFit={"contain"}
          alt={"pizza"}
          className="spinning-image"
        />
      </div>
    </section>
  );
}
