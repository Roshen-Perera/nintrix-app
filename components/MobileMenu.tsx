import { AlignLeft } from "lucide-react";
import SideMenu from "./SideMenu";
import { useState } from "react";

const MobileMenu = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  return (
    <>
      <button>
        <AlignLeft className="hover:text-darkColor hover:cursor-pointer hoverEffect md:hidden" />
      </button>
      <SideMenu />
    </>
  );
};

export default MobileMenu;
