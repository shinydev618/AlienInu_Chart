import { useState } from "react";
import Image from "next/image";
import SocialMedia from "../SocialMeida";

import SidebarNav from "./SidebarNav";

const AppSidebar = ({ isMouseOver, setIsMouseOver }) => {
  return (
    <div className="hidden lg:block">
      <aside
        onMouseOver={() => setIsMouseOver(true)}
        onMouseLeave={() => setIsMouseOver(false)}
        className={`${
          isMouseOver ? "w-56 xl:w-64" : "w-20 xl:w-24"
        } fixed top-0 bottom-0 left-0 bg-overlay-side-bar drop-shadow-overlay-side-bar transition-all duration-300 overflow-hidden z-[100]`}
      >
        <div className="flex flex-col items-center h-full pt-8 pb-12">
          <div className="flex items-center justify-center">
            <div
              className={`${
                isMouseOver
                  ? "w-28 h-28 xl:w-40 xl:h-40"
                  : "w-20 h-20 xl:w-24 xl:h-24"
              } relative flex-shrink-0 transition-all duration-300`}
            >
              <Image layout="fill" src="/logo.png" alt="Alien lnu logo" />
            </div>
          </div>

          <div
            className={`${
              isMouseOver ? "w-full px-5 xl:px-7" : "w-11"
            } transition-all duration-300 py-8`}
          >
            <SidebarNav isMouseOver={isMouseOver} />
          </div>
          <SocialMedia classes={`${isMouseOver ? "flex-row" : "flex-col"}`} />
        </div>
      </aside>
    </div>
  );
};

export default AppSidebar;
