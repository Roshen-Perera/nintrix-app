import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import HeaderMenu from "./HeaderMenu";
import SearchBar from "./SearchBar";
import FavouriteButton from "./FavouriteButton";
import CartIcon from "./CardIcon";
import SignInBtn from "./SignInBtn";
import MobileMenu from "./MobileMenu";
import { currentUser } from "@clerk/nextjs/server";

const Header = async() => {
  const user = await currentUser();
  console.log("Current User:", user);
  return (
    <header className="bg-white py-5 border-b border-b-black/20">
      <Container className="flex items-center justify-between text-lightColor">
        <div className="w-auto md:w-1/3 flex items-center gap-2.5 justify-start md:gap-0">
          <MobileMenu />
          <Logo />
        </div>
        <HeaderMenu />
        <div className="w-auto md:1/3 flex items-center justify-end gap-5">
          <SearchBar />
          <CartIcon />
          <FavouriteButton />
          <SignInBtn />
        </div>
      </Container>
    </header>
  );
};

export default Header;
