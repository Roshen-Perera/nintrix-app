"use client";

import React, { useState } from "react";
import HomeTabBar from "./HomeTabBar";

const ProductGrid = () => {
    const [products, setProducts] =  useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("");

  return <div>
    <HomeTabBar />
  </div>;
};

export default ProductGrid;
