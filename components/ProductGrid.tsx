"use client";

import React, { useState } from "react";
import HomeTabBar from "./HomeTabBar";
import Link from "next/link";
import { productType } from "@/constants/data";

const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <div className="flex items-center justify-between flex-wrap gap-5">
      <div className="flex items-center gap-1.5 text-sm font-semibold">
        {productType?.map((item) => (
          <button key={item?.title}>{item?.title}</button>
        ))}
      </div>
      <Link href="/shop">See all</Link>
    </div>
  );
};

export default ProductGrid;
