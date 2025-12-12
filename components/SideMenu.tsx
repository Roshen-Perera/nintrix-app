import React, { FC } from "react";
import Logo from "./Logo";
import { X } from "lucide-react";

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideMenu: FC<SideMenuProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-y-0 h-screen left-0 z-50 w-full text-white/80 bg-black/50 shadow-xl ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } hoverEffect`}
    >
      <div className="min-w-72 max-w-96 bg-black h-screen p-10 border-r border-r-shop_light_green flex flex-col gap-6">
        <div className="flex items-center justify-between gap-5">
          <Logo className="text-white" />
          <button
            className="hover:text-shop_light_green hoverEffect top-6 right-6"
            onClick={onClose}
          >
            <X />
          </button>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default SideMenu;
