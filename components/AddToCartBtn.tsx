import { Product } from "@/sanity.types";
import React from "react";
import { Button } from "./ui/button";
import { ShoppingBagIcon } from "lucide-react";

interface Props {
  product?: Product;
  className?: string;
}

const AddToCartBtn = ({ product, className }: Props) => {
    const isOutOfStock = product?.stock === 0;
  return (
    <div>
      <Button>
        <ShoppingBagIcon /> {isOutOfStock ? "Out of Stock" : "Add to Cart"}
      </Button>
    </div>
  );
};

export default AddToCartBtn;
