import React from 'react'
import Container from './layout/Container'
import banner from '../assets/images/banner.webp'
import banner1 from '../assets/images/banner1.webp'
import banner2 from '../assets/images/banner2.webp'
import fruit from '../assets/images/fruit.webp'

const InstagramSection = () => {
  const images = [
    banner,
    fruit,
    banner1,
    banner2,
    banner,
    banner1
  ]

  const brands = ['steps', 'MANGO', 'food', 'FOOD', 'BOOKOFF', 'GSeries']

  return (
    <>
      <Container className="py-8">
        <div className="flex justify-around items-center opacity-50">
          {brands.map((brand, index) => (
            <div key={index} className="text-2xl font-bold font-pop tracking-widest">
              {brand}
            </div>
          ))}
        </div>
      </Container>
      
      <Container className="py-12">
        <div className="flex justify-center items-center gap-8 mb-8 overflow-hidden">
          <div className="flex-1 h-[1px] bg-gray-200"></div>
          <h2 className="font-pop font-bold text-gray-800">Follow us on Instagram</h2>
          <div className="flex-1 h-[1px] bg-gray-200"></div>
        </div>
        <div className="grid grid-cols-6 gap-4">
          {images.map((img, index) => (
            <div key={index} className="aspect-square rounded-lg overflow-hidden hover:opacity-80 transition-opacity cursor-pointer">
              <img src={img} alt={`Instagram ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </Container>
    </>
  )
}

export default InstagramSection
