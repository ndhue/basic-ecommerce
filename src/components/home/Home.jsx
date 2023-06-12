import React from 'react'
import { Hero } from './hero/Hero'
import { Card } from './hero/Card'
import { Product } from './product/Product'
import { Banner } from './banner/Banner'
import { TopProduct } from './topproduct/TopProduct'
import { Price } from './price/Price'
import { Testimonial } from './testimonial/Testimonial'
import { Blog } from './blog/Blog'

export const Home = () => {
  return (
    <>
      <Hero/>
      <Card/>
      <Product/>
      <Banner/>
      <TopProduct/>
      <Price/>
      <Testimonial/>
      <Blog/>
    </>
  )
}
