import React, { useState, useEffect, useMemo } from "react";
import StatCard from "./StatCard";
import { useWeb3React } from "@web3-react/core";
import { CONTRACTS } from "../../utils/constants";
import { Alien_ABI } from "../../utils/abi";
import { ethers } from "ethers";

const DashboardStat = () => {
  const { account, active, library, activate } = useWeb3React();
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

  const [alien_token_balance, set_alien_token_balance] = useState(0);

  const get_token_amount = async () => {
    try {
      const token_balance = await AlienContract.balanceOf(account);
      var own_balance = parseInt(token_balance._hex) / Math.pow(10, 9);

      if (own_balance >= Math.pow(10, 18)) {
        set_alien_token_balance(
          own_balance / Math.pow(10, 18) + " Quintillion"
        );
      } else if (
        Math.pow(10, 18) > own_balance &&
        own_balance >= Math.pow(10, 15)
      ) {
        set_alien_token_balance(
          own_balance / Math.pow(10, 15) + " Quadrillion"
        );
      } else if (
        Math.pow(10, 15) > own_balance &&
        own_balance >= Math.pow(10, 12)
      ) {
        set_alien_token_balance(own_balance / Math.pow(10, 12) + " Trillion");
      } else if (own_balance < Math.pow(10, 12)) {
        set_alien_token_balance(own_balance);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (active === true) {
      get_token_amount();
    }
  }, [active]);

  const dashboardStat = [
    {
      title: "Holders",
      stat: "$0 Dollars",
    },
    {
      title: "Alien Balance",
      stat: alien_token_balance,
    },
    {
      title: "Total Value",
      stat: "$" + (alien_token_balance * 0.000000000001).toFixed(3) + " Dollars",
    },
    {
      title: "Tokens Burnt",
      stat: "No Data",
    },
    {
      title: "Market Cap",
      stat: "No Data",
    },
    {
      title: "Price ETH",
      stat: "0.000000000001",
    },
  ];

  return (
    <div className="rank-bg border border-brand-green rounded-2xl xl:px-7 p-4">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-5">
        {dashboardStat.map((stat, index) => (
          <StatCard {...stat} key={index} />
        ))}
      </div>
    </div>
  );
};

export default DashboardStat;
