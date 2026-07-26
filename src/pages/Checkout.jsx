import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import Container from '../components/layout/Container'
import { selectCartItems, selectCartTotal, clearCart } from '../slices/cartSlice'
import { addOrder } from '../slices/orderSlice'
import { toast } from 'react-toastify'

const Checkout = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const items = useSelector(selectCartItems)
  const total = useSelector(selectCartTotal)
  const shipping = total > 5 ? 0 : 2.99
  const grandTotal = total + shipping

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zip: '',
    payment: 'card',
  })

  if (items.length === 0) {
    return (
      <Container className="py-20 text-center">
        <h1 className="font-pop text-2xl font-bold mb-4">Nothing to checkout</h1>
        <Link to="/shop" className="text-primary font-pop hover:underline">
          Go to Shop
        </Link>
      </Container>
    )
  }

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    const order = {
      id: `ORD-${Date.now()}`,
      date: new Date().toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' }),
      status: 'Processing',
      items: [...items],
      total: grandTotal,
      shipping: form,
    }
    dispatch(addOrder(order))
    dispatch(clearCart())
    toast.success('Order placed successfully!')
    navigate(`/dashboard/orders/${order.id}`)
  }

  return (
    <Container className="py-12">
      <h1 className="font-pop text-2xl font-bold mb-8">Checkout</h1>
      <form onSubmit={handleSubmit} className="flex gap-8">
        <div className="flex-1 space-y-4">
          <h3 className="font-pop font-semibold text-lg">Billing Details</h3>
          <div className="grid grid-cols-2 gap-4">
            <input name="firstName" required placeholder="First Name" onChange={handleChange} className="fromInput" />
            <input name="lastName" required placeholder="Last Name" onChange={handleChange} className="fromInput" />
          </div>
          <input name="email" type="email" required placeholder="Email" onChange={handleChange} className="fromInput" />
          <input name="phone" required placeholder="Phone" onChange={handleChange} className="fromInput" />
          <input name="address" required placeholder="Street Address" onChange={handleChange} className="fromInput" />
          <div className="grid grid-cols-2 gap-4">
            <input name="city" required placeholder="City" onChange={handleChange} className="fromInput" />
            <input name="zip" required placeholder="ZIP Code" onChange={handleChange} className="fromInput" />
          </div>

          <h3 className="font-pop font-semibold text-lg pt-4">Payment Method</h3>
          <div className="space-y-2 font-pop text-sm">
            {['card', 'paypal', 'cod'].map((method) => (
              <label key={method} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  value={method}
                  checked={form.payment === method}
                  onChange={handleChange}
                />
                {method === 'card' && 'Credit / Debit Card'}
                {method === 'paypal' && 'PayPal'}
                {method === 'cod' && 'Cash on Delivery'}
              </label>
            ))}
          </div>
        </div>

        <div className="w-96 shrink-0">
          <div className="border border-gray-200 rounded-lg p-6 bg-gry sticky top-4">
            <h3 className="font-pop font-bold text-lg mb-4">Order Summary</h3>
            <div className="space-y-3 mb-4 max-h-60 overflow-y-auto">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between font-pop text-sm">
                  <span>
                    {item.name} × {item.qty}
                  </span>
                  <span>${(item.price * item.qty).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-gray-300 pt-3 space-y-2 font-pop text-sm">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between font-bold text-base">
                <span>Total</span>
                <span className="text-primary">${grandTotal.toFixed(2)}</span>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-full font-pop text-sm font-semibold mt-6 hover:opacity-90"
            >
              Place Order
            </button>
          </div>
        </div>
      </form>
    </Container>
  )
}

export default Checkout
