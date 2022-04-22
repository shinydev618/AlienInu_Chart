import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import React from "react";
import Slider from "./Slider";

const LatestTweeks = () => {
  return (
    <div id="latest-tweek" className="mt-6">
      <div className="flex items-center justify-between pb-7">
        <h3 className="font-black text-xl">Latest Tweets</h3>

        <div className="flex items-center space-x-2">
          <button
            type="button"
            className="button-prev w-6 h-6 grid place-content-center text-brand-green border border-brand-green rounded-full hover:drop-shadow-rank"
          >
            <ChevronLeftIcon className="w-4 h-5" />
          </button>
          <button
            type="button"
            className="button-next w-6 h-6 grid place-content-center text-brand-green border border-brand-green rounded-full hover:drop-shadow-rank"
          >
            <ChevronRightIcon className="w-4 h-5" />
          </button>
        </div>
      </div>

      <Slider />
    </div>
  );
};

export default LatestTweeks;
