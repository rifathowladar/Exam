import React, { useRef, useState } from 'react'
import Container from '../components/layout/Container'
import { Link } from 'react-router'
import { FaBars, FaAngleDown } from 'react-icons/fa'
import { CiApple } from 'react-icons/ci'
import { GiFruitBowl, GiChickenLeg, GiButter, GiCampCookingPot } from 'react-icons/gi'
import { IoFishOutline } from 'react-icons/io5'
import { RiDrinksFill } from 'react-icons/ri'
import { CiIceCream } from 'react-icons/ci'
import { BsCake2 } from 'react-icons/bs'
import { FaPlus } from 'react-icons/fa'
import { FiPhoneCall } from 'react-icons/fi'
import { useOutsideClick } from '../hooks/useOutsideClick '

const categoryLinks = [
  { label: 'Fresh Fruit', icon: CiApple, slug: 'fresh-fruits' },
  { label: 'Vegetables', icon: GiFruitBowl, slug: 'vegetables' },
  { label: 'River Fish', icon: IoFishOutline, slug: 'meat-fish' },
  { label: 'Chicken & Meat', icon: GiChickenLeg, slug: 'meat-fish' },
  { label: 'Drink & Water', icon: RiDrinksFill, slug: 'beverages' },
  { label: 'Ice Cream', icon: CiIceCream, slug: 'snacks' },
  { label: 'Cake & Bread', icon: BsCake2, slug: 'bread-bakery' },
  { label: 'Butter & Cream', icon: GiButter, slug: 'cooking' },
  { label: 'Cooking', icon: GiCampCookingPot, slug: 'cooking' },
]

const CategoryList = ({ onNavigate }) => (
  <ul className="text-black">
    {categoryLinks.map(({ label, icon: Icon, slug }) => (
      <li key={label} className="sidebar">
        <Link
          to={`/shop?category=${slug}`}
          className="flex items-center gap-2"
          onClick={onNavigate}
        >
          <Icon className="text-2xl" /> {label}
        </Link>
      </li>
    ))}
    <li className="sidebar border-t border-b border-gray-200">
      <Link to="/category" className="flex items-center gap-2" onClick={onNavigate}>
        <FaPlus /> View all Category
      </Link>
    </li>
  </ul>
)

const NavDropdown = ({ label, links }) => {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  useOutsideClick(ref, () => setOpen(false), open)

  return (
    <div
      className="relative"
      ref={ref}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className="flex items-center gap-1 cursor-pointer hover:text-primary">
        <span>{label}</span>
        <FaAngleDown />
      </div>
      {open && (
        <div className="absolute left-0 bg-black text-white py-3 px-4 min-w-[140px] z-50">
          <ul className="space-y-2">
            {links.map(({ to, label: linkLabel }) => (
              <li key={to}>
                <Link to={to} className="hover:text-primary font-pop text-sm">
                  {linkLabel}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

const Navbar = () => {
  const [sideBar, setSideBar] = useState(false)
  const [categories, setCategories] = useState(false)
  const dropdownRefSideBar = useRef(null)
  const dropdownRefCategories = useRef(null)

  useOutsideClick(dropdownRefSideBar, () => setSideBar(false), sideBar)

  return (
    <div className="bg-[#1A1A1A] text-white">
      <Container>
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-8">
            <ul className="flex items-center gap-8 text-sm font-pop relative list-none">
              <li onClick={() => setSideBar(true)} className="p-4 bg-primary cursor-pointer">
                <FaBars />
              </li>

              {sideBar && (
                <div className="fixed inset-0 bg-black/40 z-50">
                  <div
                    ref={dropdownRefSideBar}
                    className="fixed top-0 left-0 h-full w-80 bg-white p-5 overflow-y-auto"
                  >
                    <CategoryList onNavigate={() => setSideBar(false)} />
                  </div>
                </div>
              )}

              <li
                className="relative flex items-center cursor-pointer bg-[#333333] py-3 px-6 list-none"
                ref={dropdownRefCategories}
                onMouseEnter={() => setCategories(true)}
                onMouseLeave={() => setCategories(false)}
              >
                <div className="font-bold flex items-center gap-2 hover:text-primary">
                  <Link to="/category">All Categories</Link>
                  <FaAngleDown />
                </div>
                {categories && (
                  <div className="absolute top-full left-0 mt-1 w-80 bg-white z-50">
                    <CategoryList />
                  </div>
                )}
              </li>

              <li className="list-none">
                <NavDropdown label="Home" links={[{ to: '/', label: 'Home' }]} />
              </li>
              <li className="list-none">
                <NavDropdown
                  label="Shop"
                  links={[
                    { to: '/shop', label: 'Shop Grid' },
                    { to: '/category', label: 'Categories' },
                  ]}
                />
              </li>
              <li className="list-none">
                <NavDropdown
                  label="Pages"
                  links={[
                    { to: '/about', label: 'About Us' },
                    { to: '/faq', label: 'FAQ' },
                    { to: '/contact', label: 'Contact' },
                  ]}
                />
              </li>
              <li className="list-none">
                <NavDropdown
                  label="Blog"
                  links={[
                    { to: '/blog', label: 'Blog List' },
                    { to: '/blog/1', label: 'Blog Details' },
                  ]}
                />
              </li>
              <li className="list-none">
                <Link to="/about" className="hover:text-primary">
                  About Us
                </Link>
              </li>
              <li className="list-none">
                <Link to="/contact" className="hover:text-primary">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <Link to="tel:2195550114">
              <span className="flex text-sm gap-2 items-center text-[#FFFFFF]">
                <FiPhoneCall />
                (219) 555-0114
              </span>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Navbar
