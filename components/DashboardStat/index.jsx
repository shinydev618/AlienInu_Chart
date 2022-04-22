import React from "react";
import StatCard from "./StatCard";

const dashboardStat = [
  {
    title: "Holders",
    stat: "$0 Dollars",
  },
  {
    title: "Alien Balance",
    stat: "0 Billion",
  },
  {
    title: "Total Value",
    stat: "$0 Dollars",
  },
  {
    title: "Tokens Burnt",
    stat: "0%",
  },
  {
    title: "Market Cap",
    stat: "No Data",
  },
  {
    title: "Price ETH",
    stat: "0.000000000001 ",
  },
];

const DashboardStat = () => {
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
