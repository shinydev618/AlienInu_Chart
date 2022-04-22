import Image from "next/image";
import TopFiveAlienArtists from "./TopFiveAlienArtists";
const GalaticMarket = () => {
  return (
    <div className="my-16">
      <h3 className="font-black text-3xl">A glimpse of our Galactic Market</h3>
      <p className="text-xl mt-6">Alien art of the week!</p>

      <div className="grid lg:grid-cols-5 gap-8 py-10">
        <div className="lg:col-span-3 grid md:grid-cols-3 gap-5 xl:gap-8">
          <div className="md:col-span-2">
            <div className="h-[330px] md:h-[440px] relative rounded-xl overflow-hidden border border-brand-green shadow-sidebar-button">
              <Image src="/assets/alient-image-01.png" layout="fill" />
            </div>
          </div>
          <div className="flex md:flex-col h-full gap-6">
            <div className="w-full h-40 md:h-auto flex-1">
              <button
                type="button"
                className="relative h-full w-full rounded-xl overflow-hidden border border-transparent hover:border-brand-green shadow-sidebar-button transition duration-200"
              >
                <Image src="/assets/alient-image-02.png" layout="fill" />
              </button>
            </div>
            <div className="w-full h-40 md:h-auto flex-1">
              <button
                type="button"
                className="relative h-full w-full rounded-xl overflow-hidden border border-transparent hover:border-brand-green shadow-sidebar-button transition duration-200"
              >
                <Image src="/assets/alient-image-02.png" layout="fill" />
              </button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <TopFiveAlienArtists />
        </div>
      </div>
    </div>
  );
};

export default GalaticMarket;
