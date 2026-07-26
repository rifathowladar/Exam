import React from 'react'
import { Link } from 'react-router'
import Container from './layout/Container'
import ProductCard from './ProductCard'
import fruit from '../assets/images/fruit.webp'

const ProductShowcase = ({ allData, title, isCategory, viewAllLink = '/category' }) => {
  return (
    <Container className="py-10">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-lg lg:text-3xl font-bold font-pop text-black">{title}</h2>
        <Link
          to={viewAllLink}
          className="text-green-600 font-semibold font-pop hover:underline text-sm lg:text-lg"
        >
          View All →
        </Link>
      </div>
      {isCategory ? (
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
          {allData.map((item) => (
            <Link
              key={item.slug || item.id}
              to={`/shop?category=${item.slug}`}
              className="border rounded-lg p-4 hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden border-gray-200 hover:border-green-500 hover:border-2 hover:shadow-md"
            >
              <div className="flex justify-center items-center h-56 rounded-md mb-4 overflow-hidden">
                <img src={item.image || fruit} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <div className="text-center">
                <h3 className="font-pop font-semibold transition-colors duration-300 text-gray-800 hover:text-green-600">
                  {item.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
          {allData.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      )}
    </Container>
  )
}

export default ProductShowcase
