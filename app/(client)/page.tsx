import Container from '@/components/Container'
import HomeBanner from '@/components/HomeBanner'
import HomeTabBar from '@/components/HomeTabBar'
import React from 'react'

const Home = () => {
  return (
    <Container className="bg-shop-light-pink">
      <HomeBanner />
      <div className="py-10">
        <HomeTabBar />
      </div>
    </Container>
  );
}

export default Home
