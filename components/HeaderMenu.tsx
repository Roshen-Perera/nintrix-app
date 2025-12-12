import React from "react";
import { headerData } from "./constants/data";
import Link from "next/link";

const HeaderMenu = () => {
  return (
    <div>
      {headerData?.map((item) => (
        <Link key={item?.title} href={item?.href}>
          {item?.title}
        </Link>
      ))}
    </div>
  );
};

export default HeaderMenu;
