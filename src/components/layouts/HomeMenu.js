import Image from "next/image";
export default function HomeMenu() {
  return (
    <section className="py-4">
      <div className="absolute left-0 right-0 h-full">
        <div className="absolute left-0 ">
          <Image
            src={"/sallad1.png"}
            width={"109"}
            height={"189"}
          />
        </div>
        <div className="absolute -top-28 right-0">
          <Image
            src={"/sallad2.png"}
            width={"107"}
            height={"196"}
          />
        </div>
      </div>
      <div className="text-center ">
        <h3 className="leading-4 uppercase text-xl font-semibold text-gray-500">
          Check Out
        </h3>
        <h2 className="text-4xl font-bold text-primary italic">Menu</h2>
      </div>
    </section>
  );
}
