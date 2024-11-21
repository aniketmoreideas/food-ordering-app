import Image from "next/image";
import MenuItem from "../menu/MenuItem";
import SectionHeaders from "./SectionHeaders";
export default function HomeMenu() {
  return (
    <section className="py-4">
      <div className="absolute left-0 right-0">
        <div className="absolute left-0 -z-10">
          <Image src={"/sallad1.png"} width={"109"} height={"189"} />
        </div>
        <div className="absolute -top-28 right-0">
          <Image src={"/sallad2.png"} width={"107"} height={"196"} />
        </div>
      </div>
      <div className="text-center my-8">
        <SectionHeaders subHeader={"Check Out"} mainHeader={"Menu"} />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </section>
  );
}
