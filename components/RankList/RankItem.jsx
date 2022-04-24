import React from "react";

const RankItem = ({ name, amount, url, index, rank }) => {
  return (
    <div className="flex items-center pl-8 xl:pl-14">
      <p
        className={`${
          index == rank && "text-brand-green"
        } w-11 flex-shrink-0 text-3xl font-black`}
      >
        {index}
      </p>
      <div className="flex items-center space-x-2.5">
        <img className="w-11 h-11" src={url} alt="" />
        <div>
          <p className="text-xs font-black">{name}</p>
          <p className="mt-0.5">{amount}</p>
        </div>
      </div>
    </div>
  );
};

export default RankItem;
