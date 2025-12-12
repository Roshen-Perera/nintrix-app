import { HeartIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const FavouriteButton = () => {
  return (
    <Link href={"/favourites"} className="group relative">
      <HeartIcon className="w-5 h-5 hover:text-shop_light_green hoverEffect" />
      <span className="absolute -top-1 -right-1 bg-shop_btn_dark_green text-white h-3.5 w-3.5 rounded-full flex items-center justify-center text-xs font-semibold">
        0
      </span>
    </Link>
  );
};

export default FavouriteButton;
