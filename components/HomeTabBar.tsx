import { productType } from "@/constants/data";
import Link from "next/link";
import React from "react";

interface Props {
  selectedCategory?: string;
  onCategorySelect?: (category: string) => void;
}

const HomeTabBar = ({ selectedCategory, onCategorySelect }: Props) => {
  return (
    <div className="flex items-center justify-between flex-wrap gap-5">
      <div className="flex items-center gap-3 text-sm font-semibold">
        {productType?.map((item) => (
          <button
            key={item?.title}
            className={`border border-shop_light_green/20 px-4 py-1.5 md:px-6 md:py-2 rounded-full hover:bg-shop_light_green hover:border-shop_light_green hover:text-white hoverEffect ${selectedCategory === item?.title ? 'bg-shop_light_green text-white border-shop_light_green' : 'bg-shop_light_green/20'}`}
            onClick={() => onCategorySelect && onCategorySelect(item?.title)}
          >
            {item?.title}
          </button>
        ))}
      </div>
      <Link
        className={`border border-shop_light_green/30 px-4 py-1.5 md:px-6 md:py-2 rounded-full hover:bg-shop_light_green hover:border-shop_light_green hover:text-white hoverEffect`}
        href="/shop"
      >
        See all
      </Link>
    </div>
  );
};

export default HomeTabBar;
