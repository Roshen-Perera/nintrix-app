"use client";

import { Product } from "@/sanity.types";
import React from "react";
import { Button } from "./ui/button";
import { ShoppingBagIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  product?: Product;
  className?: string;
}

const AddToCartBtn = ({ product, className }: Props) => {
  const isOutOfStock = product?.stock === 0;
  return (
    <div>
      <Button
        className={cn(
          "w-full bg-shop_dark_green/80 text-lightBg shadow-none border border-shop_dark_green/80 font-semibold tracking-wide text-shop_light_bg hover:bg-shop_dark_green hover:border-shop_dark_green hoverEffect",
          className
        )}
      >
        <ShoppingBagIcon /> {isOutOfStock ? "Out of Stock" : "Add to Cart"}
      </Button>
    </div>
  );
};

export default AddToCartBtn;
