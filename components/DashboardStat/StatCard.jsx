import React from "react";

const StatCard = ({ title, stat }) => {
  return (
    <div className="text-left">
      <div>
        <img
          src={`/assets/dashboard-stat/${title
            .toLowerCase()
            .split(" ")
            .join("-")}.svg`}
          alt=""
        />
      </div>
      <p className="text-sm font-black mt-3">{title}</p>
      <p className="font-myriad-pro">{stat}</p>
    </div>
  );
};

export default StatCard;
