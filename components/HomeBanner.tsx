import React from "react";
import { Title } from "./ui/text";
import Link from "next/link";

const HomeBanner = () => {
  return (
    <div className="py-16 md:py-0 bg-shop_light_pink rounded-lg px-10 lg:px-24 flex items-center justify-between">
      <div>
        <Title>
          Grab Upto 50% off on <br />
          selected items!
        </Title>
        <Link href={"/shop"} className="bg-shop_btn_dark_green font-semibold">Buy Now</Link>
      </div>
      <div></div>
    </div>
  );
};

export default HomeBanner;
