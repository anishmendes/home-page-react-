import React, { useEffect } from 'react'
import HeroSection from './components/HeroSection'
import { useGlobalContext } from './styles/context'

const Home = () => {
  const {updateHomePage} = useGlobalContext();

 useEffect(() => updateHomePage() ,[]);



  return <HeroSection />
  
}

export default Home
