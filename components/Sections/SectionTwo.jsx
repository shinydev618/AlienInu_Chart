import React from "react";

const SectionTwo = () => {
  return (
    <div className="grid lg:grid-cols-8 gap-5 mt-7 xl:mt-14">
      <div className="lg:col-span-3 space-y-8">
        {/* Help the invasion! */}
        <h3 className="font-black text-xl">Help the invasion! </h3>
        <div className="grid grid-cols-2 gap-5">
          <div className="rank-bg border border-brand-green rounded-2xl px-5 py-2">
            <p className="text-sm font-black">Alien Coin Vault</p>
            <div className="flex items-center space-x-5 py-3">
              <img className="w-10 h-10" src="/assets/coin.svg" alt="" />
              <span className="text-3xl font-myriad-pro">2</span>
            </div>
            <p className="text-sm text-brand-green"> Open vault</p>
          </div>

          <div className="rank-bg border border-brand-green rounded-2xl px-5 py-2">
            <p className="text-sm font-black">Mystery Box</p>
            <div className="flex items-center space-x-5 py-3">
              <img className="w-10 h-10" src="/assets/mystery-box.svg" alt="" />
              <span className="text-3xl font-myriad-pro">1</span>
            </div>
            <p className="text-sm text-brand-green">Redeem Mystery Box</p>
          </div>
        </div>

        {/* Mission Control */}
        <h3 className="font-black text-xl">Mission Control</h3>
        <div className="rank-bg border border-brand-green rounded-2xl px-5 py-1">
          <div className="flex items-center justify-between py-1">
            <p className="text-sm font-black">Alien Coins</p>
            <p className="flex items-center">
              <span className="font-myriad-pro">2</span>
              <img className="w-6 h-5" src="/assets/coin.svg" alt="" />
            </p>
          </div>
          <div className="py-3">
            <button
              type="button"
              className="w-full h-10 border border-brand-green rounded-xl text-sm text-center text-brand-green hover:bg-brand-green hover:text-black transition duration-200 space-x-2 px-3"
            >
              <span>Store Coins in Vault</span>
            </button>
          </div>
          <p className="text-sm mt-2">Store Coins in Vault</p>
        </div>

        {/* Daily Missions */}
        <h3 className="font-black text-xl">Daily Missions</h3>
        <div className="rank-bg border border-brand-green rounded-2xl">
          <div className="divide-y divide-stone-50 divide-opacity-5">
            <div className="flex items-center gap-5 xl:gap-8 p-5">
              <div>
                <img
                  src="/assets/daily-missions/icon-status-check.svg"
                  alt=""
                />
              </div>
              <div className="w-full">
                <p className="flex items-center">
                  <span className="inline-block bg-brand-dark-red border border-black shadow-badge rounded-full p-1"></span>
                  <span className="text-sm font-black ml-3">Status Check</span>
                </p>
                <div className="flex-1 flex items-center justify-between py-2">
                  <p className="text-sm">
                    <span className="text-brand-green">Click here</span>{" "}
                    <span className="hidden md:inline">
                      to complete your <br /> Status Check Mission
                    </span>
                  </p>
                  <p className="flex items-center space-x-1">
                    <span className="text-xl font-myriad-pro">+2</span>
                    <img className="w-5 h-5" src="/assets/coin.svg" alt="" />
                  </p>
                </div>
                <p className="text-xs">Next Mission in 12h</p>
              </div>
            </div>
            <div className="flex items-center gap-5 xl:gap-8 p-5">
              <div>
                <img src="/assets/daily-missions/icon-dextools.svg" alt="" />
              </div>
              <div className="w-full">
                <p className="flex items-center">
                  <span className="inline-block bg-brand-dark-red border border-black shadow-badge rounded-full p-1"></span>
                  <span className="text-sm font-black ml-3">Dextools</span>
                </p>
                <div className="flex-1 flex items-center justify-between py-2">
                  <p className="text-sm">
                    <span className="text-brand-green">Visit Deaxtools</span>{" "}
                    <span className="hidden md:inline">
                      Make sure Dextools <br /> is Alien aware!
                    </span>
                  </p>
                  <p className="flex items-center space-x-1">
                    <span className="text-xl font-myriad-pro">+2</span>
                    <img className="w-5 h-5" src="/assets/coin.svg" alt="" />
                  </p>
                </div>
                <p className="text-xs">Next Mission in 12h</p>
              </div>
            </div>
            <div className="flex items-center gap-5 xl:gap-8 p-5">
              <div>
                <img src="/assets/daily-missions/coinmarketcap.svg" alt="" />
              </div>
              <div className="w-full">
                <p className="flex items-center">
                  <span className="inline-block bg-brand-dark-red border border-black shadow-badge rounded-full p-1"></span>
                  <span className="text-sm font-black ml-3">CoinMarketCap</span>
                </p>
                <div className="flex-1 flex items-center justify-between py-2">
                  <p className="text-sm">
                    <span className="text-brand-green">
                      Vote Good on CoinMvarketCap
                    </span>{" "}
                    <span className="hidden md:inline">
                      <br />
                      Fly tao CoinMarketCap website
                      <br /> and vote Good
                    </span>
                  </p>
                  <p className="flex items-center space-x-1">
                    <span className="text-xl font-myriad-pro">+2</span>
                    <img className="w-5 h-5" src="/assets/coin.svg" alt="" />
                  </p>
                </div>
                <p className="text-xs">Next Mission in 12h</p>
              </div>
            </div>
            <div className="flex items-center gap-5 xl:gap-8 p-5">
              <div>
                <img src="/assets/daily-missions/icon-coingecko.svg" alt="" />
              </div>
              <div className="w-full">
                <p className="flex items-center">
                  <span className="inline-block bg-brand-dark-red border border-black shadow-badge rounded-full p-1"></span>
                  <span className="text-sm font-black ml-3">Coingecko</span>
                </p>
                <div className="flex-1 flex items-center justify-between py-2">
                  <p className="text-sm">
                    <span className="text-brand-green">
                      Vote Good on Coingecko
                    </span>{" "}
                    <span className="hidden md:inline">
                      <br />
                      Fly to Coingecko website
                      <br />
                      and vote Good
                    </span>
                  </p>
                  <p className="flex items-center space-x-1">
                    <span className="text-xl font-myriad-pro">+2</span>
                    <img className="w-5 h-5" src="/assets/coin.svg" alt="" />
                  </p>
                </div>
                <p className="text-xs">Next Mission in 12h</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:col-span-5 space-y-8">
        {/* Play to earn */}
        <h3 className="font-black text-xl">Play to earn</h3>
        <div className="rank-bg border border-brand-green rounded-2xl px-6 py-8">
          <p className="text-xl font-black uppercase">
            play games & get crypto
          </p>
          <div className="grid lg:grid-cols-3 gap-9 mt-9">
            <div className="flex items-center lg:items-start space-x-2">
              <p className="text-7xl font-black">1</p>
              <div>
                <p className="text-xl font-black uppercase">play</p>
                <p className="leading-5">
                  From our collection of web and mobile games
                </p>
              </div>
            </div>
            <div className="flex items-center lg:items-start space-x-2">
              <p className="text-7xl font-black">2</p>
              <div>
                <p className="text-xl font-black uppercase">earn</p>
                <p className="leading-5">
                  Points and cash from playing and competing
                </p>
              </div>
            </div>
            <div className="flex items-center lg:items-start space-x-2">
              <p className="text-7xl font-black">3</p>
              <div>
                <p className="text-xl font-black uppercase">cash out</p>
                <p className="leading-5">
                  Your Alien tokens or prize money from challenges
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Game of the week */}
        <h3 className="font-black text-xl">Game of the week</h3>
        <div className="rank-bg border border-brand-green rounded-2xl px-6 py-8">
          <div>
            <h4 className="text-xl font-black uppercase">Safemoon Inu</h4>
            <p className="text-sm">safemooninu.com</p>
          </div>
          <div className="h-72 md:h-80 relative overflow-hidden rounded-2xl drop-shadow-2xl mt-5">
            <div className="relative h-full ">
              <img
                className="w-full h-full object-cover"
                src="/assets/video.png"
                alt=""
              />
            </div>
          </div>
          <div className="relative bg-brand-green w-16 h-16 text-center rounded-xl font-black drop-shadow-2xl pb-2 pt-1 -mt-8 ml-12 z-10">
            <span className="block md:text-lg leading-5 text-shadow">rank</span>
            <span className="block text-2xl md:text-3xl text-shadow">#1</span>
          </div>
          <p className="my-9">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
          <div className="flex items-center justify-end">
            <button
              type="button"
              className="h-11 flex items-center font-black border border-brand-green rounded-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300 px-6"
            >
              Play now
              <span className="pl-10">
                <img src="/assets/alien-arcade.svg" alt="" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
