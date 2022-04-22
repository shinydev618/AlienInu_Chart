import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import HottestGameSlider from "./HottestGameSlider";

const HottestGames = () => {
  return (
    <div>
      <div className="flex items-center justify-between pb-5 lg:pb-7">
        <div className="flex items-center space-x-1">
          <h3 className="font-black text-xl"> The hotest gems</h3>
          <span>
            <img src="/assets/total-value.svg" alt="" />
          </span>
        </div>

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

      <HottestGameSlider />
    </div>
  );
};

export default HottestGames;
