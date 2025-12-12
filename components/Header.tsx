import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import HeaderMenu from "./HeaderMenu";

const Header = () => {
  return (
    <header className="bg-white py-5 ">
      <Container>
        <Logo />
        <HeaderMenu />
        <div>Others</div>
      </Container>
    </header>
  );
};

export default Header;
