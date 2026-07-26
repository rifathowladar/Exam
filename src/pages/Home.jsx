import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Container from '../components/layout/Container'
import Banner from '../components/Banner'
import ProductShowcase from '../components/ProductShowcase'
import InstagramSection from '../components/InstagramSection'
import HotDeals from '../components/HotDeals'
import BestDeals from '../components/BestDeals'
import { FaTruck, FaShieldAlt, FaUndo, FaHeadset } from 'react-icons/fa'
import { categories, products } from '../data/products'
import Review from './../components/Review';
import CompanyLogo from './../components/CompanyLogo';
import VenoBox from './../components/VenoBox';

const featureData = [
  { icon: <FaTruck className="text-primary text-3xl" />, title: 'Free Shipping', desc: 'Above $5 Only' },
  { icon: <FaShieldAlt className="text-primary text-3xl" />, title: 'Secure Payment', desc: '100% Secure' },
  { icon: <FaUndo className="text-primary text-3xl" />, title: 'Easy Return', desc: '3 Days Return' },
  { icon: <FaHeadset className="text-primary text-3xl" />, title: '24/7 Support', desc: 'Dedicated Support' }
]

const Home = () => {
    const [allPro, setAllPro] = useState([])
  const [allCat, setAllCat] = useState([])

  useEffect(() => {
    async function fetchData() {
      try {
        const [catRes, proRes] = await Promise.all([
          axios.get('https://dummyjson.com/products/categories'),
          axios.get('https://dummyjson.com/products'),
        ])

        setAllCat(catRes.data.slice(0, 12))
        setAllPro(proRes.data.products)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [])

  return (
    <>
      {/* Banner Slider */}
      <Banner />

      {/* Features Section */}
      <Container className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {featureData.map((feature, index) => (
            <div key={index} className="flex items-center gap-4 p-4 bg-gry rounded-xl">
              <div className="p-3 bg-white rounded-full">
                {feature.icon}
              </div>
              <div>
                <h4 className="font-pop font-bold">{feature.title}</h4>
                <p className="font-pop text-sm text-gray-500">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Popular Categories */}
      <ProductShowcase allData={categories} title='Popular Categories' isCategory={true} />
      
      {/* Popular Products */}
      <ProductShowcase
        allData={allPro.slice(0, 12)}
        title="Deals"
        link="/deals"
        hover="true"
      />
      
      {/* Special Banner */}
      <BestDeals />
      
      {/* Hot Deals */}
      <HotDeals />
      
      {/* Review */}
      <Review />
      {/* CompanyLogo */}
      <CompanyLogo />
      {/*  */}
      <VenoBox />
    </>
  )
}

export default Home
