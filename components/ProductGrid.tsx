"use client";

import React, { useState } from "react";
import HomeTabBar from "./HomeTabBar";
import Link from "next/link";
import { productType } from "@/constants/data";

const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(productType[0]?.title || "");

  return (
    <div></div>
  );
};

export default ProductGrid;
