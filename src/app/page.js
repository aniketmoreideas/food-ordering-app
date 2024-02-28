import Header from "@/components/layouts/Header";
import Hero from "@/components/layouts/Hero";
import HomeMenu from "@/components/layouts/HomeMenu";
import SectionHeaders from "@/components/layouts/SectionHeaders";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HomeMenu />
      <section>
        <div className="text-center my-8">
          <SectionHeaders mainHeader={'About us'} subHeader={'Our Story'} />
        </div>
        <div className="max-w-xl mx-auto text-center text-gray-600 flex-col gap-4 flex">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto eos consequuntur quasi officia recusandae ipsa est enim tenetur consectetur, ratione, ipsam id perferendis. Sequi quidem quia commodi. Aliquid, officiis exercitationem.</p>
          <p>Iusto eos consequuntur quasi officia recusandae ipsa est enim tenetur consectetur, ratione, ipsam id perferendis. Sequi quidem quia commodi. Aliquid, officiis exercitationem.</p>
        </div>
      </section>
    </>
  );
}
