import React from "react";
import RankItem from "./RankItem";
import Image from "next/image";
import { ChevronRightIcon } from "@heroicons/react/outline";

const ranks = [
  {
    name: "Galactic Space Emperor",
    amount: "250+",
  },
  {
    name: "Galactic  Emperor",
    amount: "249 - 225",
  },
  {
    name: "Space Conqueror",
    amount: "224 - 200",
  },
  {
    name: "Galactic General",
    amount: "199 - 150",
  },
  {
    name: "Space General",
    amount: "149 - 100",
  },
  {
    name: "Galactic Space Emperor",
    amount: "250+",
  },
  {
    name: "Galactic  Emperor",
    amount: "249 - 225",
  },
  {
    name: "Space Conqueror",
    amount: "224 - 200",
  },
  {
    name: "Galactic General",
    amount: "199 - 150",
  },
  {
    name: "Space General",
    amount: "149 - 100",
  },
  {
    name: "Galactic  Emperor",
    amount: "249 - 225",
  },
];

const RankList = () => {
  return (
    <>
      <div className="rank-bg border border-brand-green rounded-2xl py-5">
        <div className="flex items-center justify-center  space-x-7">
          <div className="rank-image-bg w-16 h-16 xl:w-[84px] xl:h-[84px] grid place-content-center rounded-full drop-shadow-rank p-3 xl:p-0">
            <img src="/assets/galactic-image.png" alt="" />
          </div>

          <div>
            <p className="font-black text-4xl xl:text-5xl text-brand-green">
              1
            </p>
            <p className="xl:text-lg !leading-4 font-black uppercase">
              galactic <br /> emperor
            </p>
          </div>
        </div>
      </div>

      {/* <div className="py-4">
        <button
          type="button"
          className="flex items-center border border-brand-green rounded-full space-x-3 p-2"
        >
          <span className="pl-2">
            <Image
              src="/assets/ranked-mobile-icon.svg"
              width={23}
              height={23}
            />
          </span>
          <span className="font-black text-sm">See All ranks</span>
          <button
            type="button"
            className="w-6 h-6 grid place-content-center text-brand-green border-2 border-brand-green rounded-full hover:drop-shadow-rank"
          >
            <ChevronRightIcon className="w-4 h-5" />
          </button>
        </button>
      </div> */}

      <div className="bg-brand-main">
        <div className="rank-bg border border-brand-green rounded-2xl space-y-4 py-9 mt-6 lg:mt-8">
          {ranks.map((item, index) => (
            <RankItem {...item} index={index + 1} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default RankList;
