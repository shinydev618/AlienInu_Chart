import { ChatAlt2Icon, HeartIcon } from "@heroicons/react/solid";
import React from "react";

const Tweek = () => {
  return (
    <div className="rank-bg border border-brand-green rounded-2xl py-3 px-3.5">
      <p className="text-xs text-brand-light-blue"># Latest Tweet</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full grid place-content-center bg-white border border-gray-200">
            <img src="/assets/tweet-image.png" alt="" />
          </div>
          <div className="text-sm leading-4">
            <p>tweet-image</p>
            <p>@InuAlien</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <p className="text-xs text-brand-light-blue flex items-center space-x-1">
            <ChatAlt2Icon className="w-4 h-4" />
            <span>9k</span>
          </p>
          <p className="text-xs text-brand-light-blue flex items-center space-x-1">
            <HeartIcon className="w-4 h-4" />
            <span>78</span>
          </p>
        </div>
      </div>
      <p className="text-xs max-w-xs mt-2">
        Join the army led by Alien Inu and get ready for the Invasion of the
        Inuverse! <br /> $ALIEN <br />
        👽 #P2E #playtoearn 🛸 http://linktr.ee/alieninu
      </p>
    </div>
  );
};

export default Tweek;
