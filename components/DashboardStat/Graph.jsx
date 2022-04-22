import React from "react";
import PriceChartCard from "@/components/Chart";

const Graph = () => {
  return (
    <div className="my-12 space-y-5">
      {/* <div className="rank-bg sm:max-w-xs flex items-center border border-brand-green rounded-full overflow-hidden">
        <button
          type="button"
          className="text-sm font-black flex-1 py-3 whitespace-nowrap hover:bg-brand-green hover:bg-opacity-20 rounded-full"
        >
          24h
        </button>
        <button
          type="button"
          className="text-sm font-black flex-1 py-3 whitespace-nowrap hover:bg-brand-green hover:bg-opacity-20 rounded-full"
        >
          Month
        </button>
        <button
          type="button"
          className="text-sm font-black flex-1 py-3 whitespace-nowrap hover:bg-brand-green hover:bg-opacity-20 rounded-full"
        >
          Week
        </button>
        <button
          type="button"
          className="text-sm font-black flex-1 py-3 whitespace-nowrap hover:bg-brand-green hover:bg-opacity-20 rounded-full"
        >
          All time
        </button>
      </div> */}

      <div className="border border-brand-green rounded-xl bg-brand-graph-bg h-80 md:h-[430px]">
        <PriceChartCard/>
      </div>
    </div>
  );
};

export default Graph;
