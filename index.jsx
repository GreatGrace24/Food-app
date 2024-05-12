import React from 'react'
import Header from '../../components/base/Header/Header'
import Hero from '../../components/base/Hero/Hero'
import Dishes from '../../components/base/Home/Dishes'
import Order from '../../components/base/Home/Order'
import Testimonial from '../../components/base/Home/Testimonial'
import Subscribe from '../../components/base/Home/Subscribe'
import Footer from '../../components/base/Footer/Footer'

export default function HomeScreen() {
  return (
    <div>
        <Header/>
        <Hero />
        <Dishes/>
        <Order />
        <Testimonial />
        <Subscribe />
        <Footer />
    </div>
  )
}
