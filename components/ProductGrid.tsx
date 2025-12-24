"use client";

import React, { useState } from "react";
import HomeTabBar from "./HomeTabBar";
import Link from "next/link";

const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <div>
      <div>left</div>
      <Link href="/shop">See all</Link>
    </div>
  );
};

export default ProductGrid;
