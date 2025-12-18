import React from 'react'
import Container from './Container'
import FooterTop from './FooterTop'
import Logo from './Logo'
import SocialIcons from './SocialIcons'

const Footer = () => {
  return (
    <footer className='bg-white border-t'>
      <Container>
        <FooterTop />
        <div>
          <div><Logo /><p>Discover the best products and deals with Shopcart, your one-stop online shop.</p><SocialIcons className='text-darkColor/60' iconClassName='border-darkColor/60 hover:border-shop_dark_green hover:text-shop_dark_green' toolTipClassName='bg-darkColor text-white'/></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
