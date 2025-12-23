import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import HeaderMenu from "./HeaderMenu";
import SearchBar from "./SearchBar";
import FavouriteButton from "./FavouriteButton";
import CartIcon from "./CardIcon";
import SignInBtn from "./SignInBtn";
import MobileMenu from "./MobileMenu";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Header = () => {
  return (
    <header className="bg-white py-5">
      <Container className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <MobileMenu />
          <Logo />
        </div>

        <HeaderMenu />

        <div className="flex items-center gap-5">
          <SearchBar />
          <CartIcon />
          <FavouriteButton />

          <SignedIn>
            <UserButton />
          </SignedIn>

          <SignedOut>
            <SignInBtn />
          </SignedOut>
        </div>
      </Container>
    </header>
  );
};

export default Header;
