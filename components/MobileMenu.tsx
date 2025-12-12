import { AlignLeft } from "lucide-react";
import SideMenu from "./SideMenu";

const MobileMenu = () => {
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
