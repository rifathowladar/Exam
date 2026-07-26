import React from 'react'
import { Outlet, useLocation } from 'react-router'
import TopBar from '../components/TopBar'
import SearchBar from '../components/SearchBar'
import Navbar from './Navbar'
import Footer from './Footer'
import FooterTop from './FooterTop'
import Breadcrumb from './Breadcrumb'

const hideBreadcrumb = ['/', '/login', '/registration', '/forgot-password', '/reset-password', '/otp']

const MainlayOut = () => {
  const { pathname } = useLocation()

  return (
    <>
      <TopBar />
      <SearchBar />
      <Navbar />
      {!hideBreadcrumb.includes(pathname) && <Breadcrumb />}
      <Outlet />
      <FooterTop />
      <Footer />
    </>
  )
}

export default MainlayOut
