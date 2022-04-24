import React, { useState, useEffect, useMemo } from "react";
import { useWeb3React } from "@web3-react/core";
import { CONTRACTS } from "../../utils/constants";
import { Alien_ABI } from "../../utils/abi";
import { ethers } from "ethers";
import RankItem from "./RankItem";
import Image from "next/image";
import { ChevronRightIcon } from "@heroicons/react/outline";

const ranks = [
  {
    name: "Galactic Space Emperor",
    amount: "250+ Quintillion",
    url: "/assets/rank_icon/1Galactic Space Emperor.png",
  },
  {
    name: "Galactic  Emperor",
    amount: "249 - 225 Quintillion",
    url: "/assets/rank_icon/2Group 1183.png",
  },
  {
    name: "Space Conqueror",
    amount: "224 - 200 Quintillion",
    url: "/assets/rank_icon/3Space Conqueror.png",
  },
  {
    name: "Galactic General",
    amount: "199 - 150 Quintillion",
    url: "/assets/rank_icon/4Galactic General.png",
  },
  {
    name: "Space General",
    amount: "149 - 100 Quintillion",
    url: "/assets/rank_icon/5Space General.png",
  },
  {
    name: "Galactic Bounty Hunter",
    amount: "99 - 50 Quintillion",
    url: "/assets/rank_icon/6Galactic Bounty Hunter.png",
  },
  {
    name: "Bounty Hunter",
    amount: "49 - 1 Quintillion",
    url: "/assets/rank_icon/7Bounty Hunter.png",
  },
  {
    name: "Galactic Soldier",
    amount: "999 - 800 Quadrillion",
    url: "/assets/rank_icon/8Galactic Soldier.png",
  },
  {
    name: "Galactic Explorer",
    amount: "799 - 600 Quadrillion",
    url: "/assets/rank_icon/9Galactic Explorer.png",
  },
  {
    name: "Space Infantry",
    amount: "599 - 1 Quadrillion",
    url: "/assets/rank_icon/10Space Infantry.png",
  },
  {
    name: "Space Scout",
    amount: "999 - 1 Trillion",
    url: "/assets/rank_icon/11Space Scout.png",
  },
];

const RankList = () => {
  const { account, active, library } = useWeb3React();
  const AlienContract = useMemo(
    () =>
      library
        ? new ethers.Contract(
            CONTRACTS.ALIEN_TOKEN,
            Alien_ABI,
            library.getSigner()
          )
        : null,
    [library]
  );
  const [rank, set_rank] = useState(0);

  const get_rank = async () => {
    try {
      const token_balance = await AlienContract.balanceOf(account);
      var own_balance = parseInt(token_balance._hex)/Math.pow(10,9);
      if (own_balance >= 250 * Math.pow(10, 18)) {
        set_rank(1);
      } else if (
        250 * Math.pow(10, 18) > own_balance &&
        own_balance >= 225 * Math.pow(10, 18)
      ) {
        set_rank(2);
      } else if (
        225 * Math.pow(10, 18) > own_balance &&
        own_balance >= 200 * Math.pow(10, 18)
      ) {
        set_rank(3);
      } else if (
        200 * Math.pow(10, 18) > own_balance &&
        own_balance >= 150 * Math.pow(10, 18)
      ) {
        set_rank(4);
      } else if (
        150 * Math.pow(10, 18) > own_balance &&
        own_balance >= 100 * Math.pow(10, 18)
      ) {
        set_rank(5);
      } else if (
        100 * Math.pow(10, 18) > own_balance &&
        own_balance >= 50 * Math.pow(10, 18)
      ) {
        set_rank(6);
      } else if (
        50 * Math.pow(10, 18) > own_balance &&
        own_balance >= 1 * Math.pow(10, 18)
      ) {
        set_rank(7);
      } else if (
        1 * Math.pow(10, 18) > own_balance &&
        own_balance >= 800 * Math.pow(10, 15)
      ) {
        set_rank(8);
      } else if (
        600 * Math.pow(10, 15) > own_balance &&
        own_balance >= 600 * Math.pow(10, 15)
      ) {
        set_rank(9);
      } else if (
        600 * Math.pow(10, 15) > own_balance &&
        own_balance >= 1 * Math.pow(10, 15)
      ) {
        set_rank(10);
      } else if (
        1 * Math.pow(10, 15) > own_balance &&
        own_balance >= 1 * Math.pow(10, 12)
      ) {
        set_rank(11);
      } else if (1 * Math.pow(10, 12) > own_balance && 0 < own_balance) {
        set_rank(12);
      } else if (0 >= own_balance) {
        set_rank(13);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (active === true) {
      get_rank();
    }
  }, [active]);
  return (
    <>
      <div className="rank-bg border border-brand-green rounded-2xl py-5">
        <div className="flex items-center justify-center  space-x-7">
          <div className="rank-image-bg w-16 h-16 xl:w-[84px] xl:h-[84px] grid place-content-center rounded-full drop-shadow-rank p-3 xl:p-0">
            <img src={(rank === 0 || rank ===12 || rank===13) ? "" : ranks[rank-1].url} alt="" />
          </div>

          <div>
            <p className="font-black text-4xl xl:text-5xl text-brand-green">
              {(rank===0 || rank ===13)?"NO RANK!":rank}
            </p>
            <p className="xl:text-lg !leading-4 font-black uppercase">
              {rank===0?"Connect Wallet":rank===12?"No Character!":rank === 13?"Buy $ALIEN for a rank!":ranks[rank-1].name} 
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
            <RankItem {...item} rank={rank} index={index + 1} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default RankList;
