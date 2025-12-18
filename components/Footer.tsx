import React from 'react'
import Container from './Container'
import FooterTop from './FooterTop'
import Logo from './Logo'

const Footer = () => {
  return (
    <footer className='bg-white border-t'>
      <Container>
        <FooterTop />
        <div>
          <div><Logo /><p>Discover the best products and deals with Shopcart, your one-stop online shop.</p></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
