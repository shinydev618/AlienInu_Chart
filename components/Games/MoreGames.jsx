import React from "react";
import Game from "./Game";

const MoreGames = () => {
  return (
    <div className="mt-9">
      <h3 className="font-black text-xl">More Games</h3>
      <div className="rank-bg border border-brand-green overflow-hidden rounded-2xl mt-5">
        <div className="grid lg:grid-cols-3">
          <Game />
          <Game />
          <Game />
        </div>
      </div>
    </div>
  );
};

export default MoreGames;
