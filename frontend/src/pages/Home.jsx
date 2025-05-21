import React from 'react'
import Header from '../components/Header'
import ServicesMenu from '../components/ServicesMenu'
import TopWorkers from '../components/TopWorkers'
import Banner from '../components/Banner'

const Home = () => {
  return (
    <div>
        <Header/>
        <ServicesMenu/>
        <TopWorkers/>
        <Banner/>
    </div>
  )
}

export default Home