"use client";

import React, { useEffect, useState } from "react";
import HomeTabBar from "./HomeTabBar";
import Link from "next/link";
import { productType } from "@/constants/data";
import { set } from "sanity";
import { client } from "@/sanity/lib/client";

const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(
    productType[0]?.title || ""
  );

  const query = `*[_type == "product" && variant == "$variant"] | order(name desc){
 ..., "categories":categories[]->title
}`;
const params = {variant: selectedCategory.toLowerCase()};

useEffect(() => {
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await client.fetch(query, params);
      console.log(response);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  }
}, [selectedCategory]);


  return (
    <div>
      <HomeTabBar
        selectedCategory={selectedCategory}
        onCategorySelect={setSelectedCategory}
      />
    </div>
  );
};

export default ProductGrid;
