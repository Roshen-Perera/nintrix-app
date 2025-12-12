"use client";

import { AlignLeft } from "lucide-react";
import SideMenu from "./SideMenu";
import { useState } from "react";

const MobileMenu = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsSideMenuOpen(!isSideMenuOpen)}>
        <AlignLeft className="hover:text-darkColor hover:cursor-pointer hoverEffect md:hidden" />
      </button>
      <div className="md:hidden">
        <SideMenu />
      </div>
    </>
  );
};

export default MobileMenu;
