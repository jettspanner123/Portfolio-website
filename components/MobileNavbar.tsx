import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
const MobileNavbar = () => {
  return (
    <nav className="flex w-full justify-between md:hidden items-center bg-black text-white font-bold py-4 text-[2rem] border-b-[0.5px] border-white">
      <h1 className="px-6">UD.S(void)</h1>
      <div className="px-6">
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default MobileNavbar;
