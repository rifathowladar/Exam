import React from 'react'
import { Link, useParams, Navigate } from 'react-router'
import { useSelector } from 'react-redux'
import { selectOrderById } from '../../slices/orderSlice'

const OrderDetails = () => {
  const { id } = useParams()
  const order = useSelector(selectOrderById(id))

  if (!order) return <Navigate to="/dashboard/orders" replace />

  return (
    <div>
      <Link to="/dashboard/orders" className="text-primary font-pop text-sm hover:underline mb-4 inline-block">
        ← Back to Orders
      </Link>
      <h1 className="font-pop text-2xl font-bold mb-2">Order {order.id}</h1>
      <p className="font-pop text-gray-500 mb-8">
        Placed on {order.date} · Status: <span className="text-primary font-semibold">{order.status}</span>
      </p>

      <div className="border border-gray-200 rounded-lg overflow-hidden mb-8">
        <div className="grid grid-cols-3 bg-gry p-4 font-pop text-sm font-semibold">
          <span>Product</span>
          <span className="text-center">Qty</span>
          <span className="text-right">Subtotal</span>
        </div>
        {order.items.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-3 items-center p-4 border-t border-gray-200 font-pop text-sm"
          >
            <div className="flex items-center gap-3">
              <img src={item.image} alt={item.name} className="w-12 h-12 object-contain" />
              <span>{item.name}</span>
            </div>
            <span className="text-center">{item.qty}</span>
            <span className="text-right font-semibold">${(item.price * item.qty).toFixed(2)}</span>
          </div>
        ))}
      </div>

      <div className="bg-gry p-6 rounded-lg max-w-sm ml-auto">
        <div className="flex justify-between font-pop font-bold text-lg">
          <span>Order Total</span>
          <span className="text-primary">${order.total.toFixed(2)}</span>
        </div>
      </div>

      {order.shipping && (
        <div className="mt-8">
          <h3 className="font-pop font-semibold mb-3">Shipping Address</h3>
          <p className="font-pop text-sm text-gray-600">
            {order.shipping.firstName} {order.shipping.lastName}
            <br />
            {order.shipping.address}
            <br />
            {order.shipping.city}, {order.shipping.zip}
            <br />
            {order.shipping.email} · {order.shipping.phone}
          </p>
        </div>
      )}
    </div>
  )
}

export default OrderDetails
