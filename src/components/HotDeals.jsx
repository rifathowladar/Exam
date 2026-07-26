import React, { useState, useEffect } from 'react'
import Container from '../components/layout/Container'
import ProductCard from './ProductCard'
import { products } from '../data/products'
import { Link } from 'react-router'

const HotDeals = () => {
  return (
    <Container className="py-10">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold font-pop text-black">Hot Deals</h2>
        <Link
          to='/category'
          className="text-green-600 font-semibold font-pop hover:underline text-lg"
        >
          View All →
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Container>
  )
}

export default HotDeals
