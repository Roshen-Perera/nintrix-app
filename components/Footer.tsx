import React from "react";
import Container from "./Container";
import FooterTop from "./FooterTop";
import Logo from "./Logo";
import SocialIcons from "./SocialIcons";
import { SubText } from "./ui/text";

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <Container>
        <FooterTop />
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo />
            <SubText>
              Find essentials and unique items with real reviews and clear
              pricing—plus fast delivery, secure checkout, easy returns, and
              responsive support.
            </SubText>
            <SocialIcons
              className="text-darkColor/60"
              iconClassName="border-darkColor/60 hover:border-shop_dark_green hover:text-shop_dark_green hover:border-shop_dark_green"
              toolTipClassName="bg-darkColor text-white"
            />
          </div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
