import React from 'react'
import ProductShowcase from '../components/ProductShowcase'
import { categories, products } from '../data/products'

const Category = () => {
  return (
    <>
      <ProductShowcase allData={categories} title='All Categories' isCategory={true} />
      <ProductShowcase allData={products} title='All Products' isCategory={false} />
    </>
  )
}

export default Category
