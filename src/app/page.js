import Hero from "@/components/layouts/Hero";
import HomeMenu from "@/components/layouts/HomeMenu";
import SectionHeaders from "@/components/layouts/SectionHeaders";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu id="menu" />
      <section>
        <div className="text-center my-8">
          <SectionHeaders mainHeader={"About us"} subHeader={"Our Story"} />
        </div>
        <div className="max-w-xl mx-auto text-center text-gray-600 flex-col gap-4 flex">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto eos
            consequuntur quasi officia recusandae ipsa est enim tenetur
            consectetur, ratione, ipsam id perferendis. Sequi quidem quia
            commodi. Aliquid, officiis exercitationem.
          </p>
          <p>
            Iusto eos consequuntur quasi officia recusandae ipsa est enim
            tenetur consectetur, ratione, ipsam id perferendis. Sequi quidem
            quia commodi. Aliquid, officiis exercitationem.
          </p>
        </div>
      </section>
      <section className="my-12 text-center" id="contactus">
        <div className="">
          <SectionHeaders
            mainHeader={"Contact us"}
            subHeader={"Don't hesitate"}
          />
        </div>
        <div className="mt-4">
          <a
            className="text-gray-600 text-3xl underline italic"
            href="tel:0528384100"
          >
            +971 52 838 4100
          </a>
        </div>
      </section>
      
    </>
  );
}
