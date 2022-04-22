import React from "react";
import { Box } from "@material-ui/core";


const MainContent = ({ children, isMouseOver }) => {
  return (

    <div
      className={`${isMouseOver ? "xl:pl-[18rem]" : "xl:pl-28 "
        } relative transition-all duration-300 lg:pl-20 pb-20 flex`}
    >

        <div className="w-full max-w-8xl overflow-hidden  px-5" style={{
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          <div className="text-xl font-black uppercase text-center lg:text-left p-8 xl:px-0">
            <h2>Welcome back to The Alien Base</h2>
          </div>
          {children}
        </div>

      {/* <Box display={"flex"} flex="1" style={{
        position: 'fixed',
        right:'0'
      }}>
        <RankChart />
      </Box> */}

    </div>
  );
};

export default MainContent;
