import Container from '@/components/Container'
import HomeBanner from '@/components/HomeBanner'
import ProductGrid from '@/components/ProductGrid'
import React from 'react'

const Home = () => {
  return (
    <Container className='bg-shop-light-pink'>
      <HomeBanner />
      <ProductGrid />
    </Container>
  )
}

export default Home
