import React from "react";
import Artist from "./Artist";

const artists = [
  {
    name: "alien invasion club",
    value: "7,659,944",
  },
  {
    name: "Iconic Ape Club",
    value: "7,659,944",
  },
  {
    name: "Bored Ape Yatch",
    value: "7,659,944",
  },
  {
    name: "Bored Ape Yatch",
    value: "7,659,944",
  },
  {
    name: "Bored Ape Yatch",
    value: "7,659,944",
  },
];

const TopFiveAlienArtists = () => {
  return (
    <div className="lg:max-w-xs lg:ml-auto mt-5">
      <h3 className="font-black text-3xl">
        Top 5 Alien <br /> Artists Collections
      </h3>
      <div className="pt-8 xl:pt-11 xl:pl-10 space-y-6">
        {artists.map((artist, index) => (
          <Artist {...artist} key={index} index={index + 1} />
        ))}
      </div>
    </div>
  );
};

export default TopFiveAlienArtists;
