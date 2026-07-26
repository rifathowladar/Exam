import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateProfile, logout, selectUser } from '../../slices/authSlice'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'

const Setting = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector(selectUser)
  const [form, setForm] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    address: user?.address || '',
  })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSave = (e) => {
    e.preventDefault()
    dispatch(updateProfile(form))
    toast.success('Profile updated!')
  }

  const handleLogout = () => {
    dispatch(logout())
    toast.info('Logged out successfully')
    navigate('/login')
  }

  return (
    <div>
      <h1 className="font-pop text-2xl font-bold mb-6">Account Settings</h1>
      <form onSubmit={handleSave} className="max-w-lg space-y-4">
        <input name="name" value={form.name} onChange={handleChange} placeholder="Full Name" className="fromInput" />
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="fromInput"
        />
        <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" className="fromInput" />
        <input name="address" value={form.address} onChange={handleChange} placeholder="Address" className="fromInput" />
        <button type="submit" className="bg-primary text-white px-8 py-3 rounded-full font-pop text-sm font-semibold">
          Save Changes
        </button>
      </form>
      <button
        type="button"
        onClick={handleLogout}
        className="mt-8 text-red-500 font-pop text-sm hover:underline"
      >
        Log Out
      </button>
    </div>
  )
}

export default Setting
