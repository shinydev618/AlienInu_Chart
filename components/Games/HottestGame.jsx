import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/outline";

const HottestGame = () => {
  return (
    <div className="rank-bg border border-black rounded-2xl !shadow-hottest-game px-6 py-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2.5">
          <div className="relative w-10 h-10 flex-shrink-0 rounded-full border border-brand-green overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="/assets/top.png"
              alt=""
            />
          </div>
          <p className="text-xs font-black">Iconic Ape Club</p>
        </div>
        <div className="text-center">
          <img src="/assets/diamond.svg" alt="" />
          <span className="text-xs font-black">245</span>
        </div>
      </div>
      <div className="relative w-full h-[260px] border-2 border-black rounded-xl overflow-hidden shadow-hottest-game-img my-6">
        <Image
          layout="fill"
          className="!object-none"
          src="/assets/hottest-game-01.png"
          alt=""
        />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img
            className="w-11 h-11"
            src="/assets/hottest-bid-icon.svg"
            alt=""
          />
          <div>
            <p className="font-myriad-pro">Hottest bid</p>
            <p className="text-lg font-black uppercase">96 eth</p>
          </div>
        </div>
        <div className="text-right font-black">
          <p className="text-sm">#1</p>
          <Link href="/">
            <a className="flex items-center text-xs">
              <span>Buy Now</span>
              <ChevronRightIcon className="w-4 h-4 text-brand-green" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HottestGame;
