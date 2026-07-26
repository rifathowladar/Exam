import React from 'react'
import Container from './layout/Container'
import footerlogo from '../assets/images/footerlogo.webp'
import { Link } from 'react-router'
import Footerlogo2 from '../assets/images/footerlogo2.webp'

const Footer = () => {
  return (
    <div className="bg-black text-white">
      <Container>
        <div className="flex justify-between items-start py-10">
          <div>
            <img src={footerlogo} alt="Ecobazar" />
            <p className="max-w-[300px] font-pop text-sm text-[#808080] my-4">
              Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget
              bibendum magna congue nec.
            </p>
            <div>
              <Link to="tel:2195550114" className="inline-block mr-4 border-b border-primary">
                (219) 555-0114
              </Link>
              <span className="text-[#808080]">or</span>
              <Link to="mailto:Proxy@gmail.com" className="inline-block ml-4 border-b border-primary">
                Proxy@gmail.com
              </Link>
            </div>
          </div>

          <div>
            <h5 className="font-pop text-md text-semibold text-white mb-5">My Account</h5>
            <ul className="font-pop text-sm text-[#999999] flex flex-col gap-3">
              <li>
                <Link to="/dashboard" className="hover:text-white">
                  My Account
                </Link>
              </li>
              <li>
                <Link to="/dashboard/orders" className="hover:text-white">
                  Order History
                </Link>
              </li>
              <li>
                <Link to="/cart" className="hover:text-white">
                  Shopping Cart
                </Link>
              </li>
              <li>
                <Link to="/wishlist" className="hover:text-white">
                  Wishlist
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-pop text-md text-semibold text-white mb-5">Helps</h5>
            <ul className="font-pop text-sm text-[#999999] flex flex-col gap-3">
              <li>
                <Link to="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white">
                  Faqs
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white">
                  Terms & Condition
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-pop text-md text-semibold text-white mb-5">Proxy</h5>
            <ul className="font-pop text-sm text-[#999999] flex flex-col gap-3">
              <li>
                <Link to="/about" className="hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-white">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-white">
                  Product
                </Link>
              </li>
              <li>
                <Link to="/dashboard/orders" className="hover:text-white">
                  Track Order
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-pop text-md text-semibold text-white mb-5">Categories</h5>
            <ul className="font-pop text-sm text-[#999999] flex flex-col gap-3">
              <li>
                <Link to="/shop?category=fresh-fruits" className="hover:text-white">
                  Fruit & Vegetables
                </Link>
              </li>
              <li>
                <Link to="/shop?category=meat-fish" className="hover:text-white">
                  Meat & Fish
                </Link>
              </li>
              <li>
                <Link to="/shop?category=bread-bakery" className="hover:text-white">
                  Bread & Bakery
                </Link>
              </li>
              <li>
                <Link to="/shop?category=beauty-health" className="hover:text-white">
                  Beauty & Health
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between font-sm text-[#808080] font-pop border-t border-[#808080] py-7.25">
          <div>Ecobazar eCommerce © 2021. All Rights Reserved</div>
          <div>
            <img src={Footerlogo2} alt="payment methods" />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Footer
