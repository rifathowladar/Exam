import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { FaEye } from 'react-icons/fa'
import { FaEyeSlash } from 'react-icons/fa6'
import { toast } from 'react-toastify'

const Reset = () => {
  const [showPass, setShowPass] = useState(false)
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (password !== confirm) {
      toast.error('Passwords do not match')
      return
    }
    toast.success('Password reset successfully!')
    navigate('/login')
  }

  return (
    <div className="max-w-[420px] bg-white p-6 my-10 mx-auto shadow-md">
      <h3 className="font-pop text-[32px] font-semibold text-center">Reset Password</h3>
      <form onSubmit={handleSubmit}>
        <div className="relative my-4">
          <input
            type={showPass ? 'text' : 'password'}
            placeholder="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md font-pop text-sm"
          />
          <div
            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-600"
            onClick={() => setShowPass(!showPass)}
          >
            {showPass ? <FaEye /> : <FaEyeSlash />}
          </div>
        </div>
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md font-pop text-sm"
        />
        <button type="submit" className="w-full bg-primary text-white py-2 font-pop text-sm rounded-full mt-4">
          Reset Password
        </button>
      </form>
      <p className="text-center mt-4 text-sm text-[#808080]">
        <Link to="/login" className="text-primary">
          Back to Login
        </Link>
      </p>
    </div>
  )
}

export default Reset
