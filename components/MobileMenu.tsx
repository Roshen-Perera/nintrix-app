import { AlignLeft } from "lucide-react";
import React from "react";

const MobileMenu = () => {
  return (
    <div>
      <button><AlignLeft className="hover:text-darkColor hover:cursor-pointer hoverEffect md:hidden" /></button>
    </div>
  );
};

export default MobileMenu;
