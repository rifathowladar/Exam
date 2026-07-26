import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { login } from '../slices/authSlice'
import { FaEye } from 'react-icons/fa'
import { FaEyeSlash } from 'react-icons/fa6'
import { toast } from 'react-toastify'

const Login = () => {
  const [showPass, setShowPass] = useState(false)
  const [form, setForm] = useState({ email: '', password: '' })
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.email || !form.password) {
      toast.error('Please enter email and password')
      return
    }
    dispatch(login({ email: form.email, name: form.email.split('@')[0] }))
    toast.success('Login successful!')
    navigate('/dashboard')
  }

  return (
    <div className="max-w-[420px] bg-white p-6 my-10 mx-auto shadow-md">
      <h3 className="font-pop text-[32px] font-semibold text-center">Sign In</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 my-4 rounded-md font-pop text-sm"
        />
        <div className="relative">
          <input
            type={showPass ? 'text' : 'password'}
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md font-pop text-sm"
          />
          <div
            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-600"
            onClick={() => setShowPass(!showPass)}
          >
            {showPass ? <FaEye /> : <FaEyeSlash />}
          </div>
        </div>
        <div className="flex justify-between items-center my-4 text-[#808080]">
          <label className="font-pop text-sm">
            <input type="checkbox" className="mr-2" />
            Remember me
          </label>
          <Link to="/forgot-password" className="text-primary text-sm">
            Forgot Password
          </Link>
        </div>
        <button type="submit" className="w-full bg-primary text-white py-2 font-pop text-sm rounded-full">
          Login
        </button>
      </form>
      <p className="text-center mt-4 text-sm text-[#808080]">
        Don&apos;t have account?
        <Link to="/registration" className="text-primary ml-1">
          Registration
        </Link>
      </p>
    </div>
  )
}

export default Login
