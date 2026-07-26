import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { toast } from 'react-toastify'

const Otp = () => {
  const [otp, setOtp] = useState(['', '', '', ''])
  const navigate = useNavigate()

  const handleChange = (index, value) => {
    if (value.length > 1) return
    const next = [...otp]
    next[index] = value
    setOtp(next)
    if (value && index < 3) {
      document.getElementById(`otp-${index + 1}`)?.focus()
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (otp.some((d) => !d)) {
      toast.error('Please enter the full OTP')
      return
    }
    toast.success('OTP verified!')
    navigate('/reset-password')
  }

  return (
    <div className="max-w-[420px] bg-white p-6 my-10 mx-auto shadow-md">
      <h3 className="font-pop text-[32px] font-semibold text-center">Verify OTP</h3>
      <p className="font-pop text-sm text-gray-500 text-center my-4">
        Enter the 4-digit code sent to your email
      </p>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-center gap-3 my-6">
          {otp.map((digit, i) => (
            <input
              key={i}
              id={`otp-${i}`}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(i, e.target.value)}
              className="w-14 h-14 text-center border border-gray-300 rounded-md font-pop text-xl focus:outline-none focus:ring-2 focus:ring-primary"
            />
          ))}
        </div>
        <button type="submit" className="w-full bg-primary text-white py-2 font-pop text-sm rounded-full">
          Verify
        </button>
      </form>
      <p className="text-center mt-4 text-sm text-[#808080]">
        Didn&apos;t receive code?{' '}
        <button type="button" onClick={() => toast.info('OTP resent!')} className="text-primary">
          Resend
        </button>
      </p>
      <p className="text-center mt-2 text-sm text-[#808080]">
        <Link to="/login" className="text-primary">
          Back to Login
        </Link>
      </p>
    </div>
  )
}

export default Otp
