import React from 'react'
import Container from '../components/layout/Container'
import banner from '../assets/images/banner.webp'
import { FaTruck, FaShieldAlt, FaUsers, FaLeaf } from 'react-icons/fa'

const stats = [
  { icon: FaUsers, value: '50K+', label: 'Happy Customers' },
  { icon: FaLeaf, value: '1000+', label: 'Organic Products' },
  { icon: FaTruck, value: '24/7', label: 'Fast Delivery' },
  { icon: FaShieldAlt, value: '100%', label: 'Secure Payment' },
]

const About = () => {
  return (
    <>
      <Container className="py-16">
        <div className="grid grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-pop text-3xl font-bold mb-6">About Ecobazar</h1>
            <p className="font-pop text-gray-600 leading-relaxed mb-4">
              Ecobazar is your trusted online grocery store delivering fresh, organic, and locally sourced
              products straight to your doorstep. We believe everyone deserves access to healthy food at
              affordable prices.
            </p>
            <p className="font-pop text-gray-600 leading-relaxed">
              Founded in 2021, we partner with local farmers and suppliers to bring you the highest quality
              fruits, vegetables, meats, and pantry essentials — all with free shipping on orders over $5.
            </p>
          </div>
          <img src={banner} alt="About Ecobazar" className="rounded-xl w-full h-80 object-cover" />
        </div>
      </Container>

      <div className="bg-gry py-16">
        <Container>
          <div className="grid grid-cols-4 gap-8">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="text-center">
                <div className="inline-flex p-4 bg-white rounded-full mb-4">
                  <Icon className="text-primary text-2xl" />
                </div>
                <h3 className="font-pop text-2xl font-bold">{value}</h3>
                <p className="font-pop text-sm text-gray-500 mt-1">{label}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      <Container className="py-16">
        <h2 className="font-pop text-2xl font-bold mb-6">Our Mission</h2>
        <p className="font-pop text-gray-600 leading-relaxed max-w-3xl">
          Our mission is to make healthy eating accessible and convenient for every household. We are committed
          to sustainable sourcing, reducing food waste, and supporting local communities through fair trade
          partnerships.
        </p>
      </Container>
    </>
  )
}

export default About
