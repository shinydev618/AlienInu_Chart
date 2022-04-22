import React from "react";

const Artist = ({ name, value, index }) => {
  return (
    <div className="flex items-center">
      <p
        className={`${
          index == 1 && "text-brand-green"
        } w-10 flex-shrink-0 text-3xl font-black`}
      >
        {index}
      </p>
      <div className="flex items-center space-x-2.5">
        <div className="relative w-10 h-10 flex-shrink-0 rounded-full border border-brand-green overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="/assets/top.png"
            alt=""
          />
        </div>
        <div>
          <p className="text-xs font-black">{name}</p>
          <p className="mt-0.5">${value}</p>
        </div>
      </div>
    </div>
  );
};

export default Artist;
