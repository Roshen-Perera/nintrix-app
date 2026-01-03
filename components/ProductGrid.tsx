"use client";

import React, { useEffect, useState } from "react";
import HomeTabBar from "./HomeTabBar";
import Link from "next/link";
import { productType } from "@/constants/data";
import { set } from "sanity";
import { client } from "@/sanity/lib/client";

const ProductGrid = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(
    productType[0]?.title || ""
  );
  const query = `*[_type == "product" && variant == $variant] | order(name asc){
  ...,"categories": categories[]->title
}`;
  const params = { variant: selectedCategory.toLowerCase() };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await client.fetch(query, params);
        setProducts(response);
      } catch (error) {
        console.log("Product fetching Error", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
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
