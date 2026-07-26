import React from 'react'
import { Routes, Route, Navigate } from 'react-router'
import Home from './pages/Home'
import Registration from './pages/Registration'
import Login from './pages/Login'
import Forgot from './pages/Forgot'
import MainlayOut from './components/MainlayOut'
import Reset from './pages/Reset'
import Faq from './pages/Faq'
import Error from './pages/Error'
import Category from './pages/Category'
import Shop from './pages/Shop'
import Details from './pages/Details'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Wishlist from './pages/Wishlist'
import About from './pages/About'
import Contact from './pages/Contact'
import BlogList from './pages/BlogList'
import SingleBlog from './pages/SingleBlog'
import Otp from './pages/Otp'
import DashboardLayout from './components/DashboardLayout'
import UserDashboard from './pages/dashboard/UserDashboard'
import OrderHistory from './pages/dashboard/OrderHistory'
import OrderDetails from './pages/dashboard/OrderDetails'
import Setting from './pages/dashboard/Setting'

const App = () => {
  return (
    <Routes>
      <Route element={<MainlayOut />}>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<Forgot />} />
        <Route path="/reset-password" element={<Reset />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/error" element={<Error />} />
        <Route path="/category" element={<Category />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<Details />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:id" element={<SingleBlog />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<UserDashboard />} />
          <Route path="orders" element={<OrderHistory />} />
          <Route path="orders/:id" element={<OrderDetails />} />
          <Route path="settings" element={<Setting />} />
        </Route>
        <Route path="*" element={<Navigate to="/error" replace />} />
      </Route>
    </Routes>
  )
}

export default App
