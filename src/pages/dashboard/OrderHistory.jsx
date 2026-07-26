import React from 'react'
import { Link } from 'react-router'
import { useSelector } from 'react-redux'
import { selectOrders } from '../../slices/orderSlice'

const OrderHistory = () => {
  const orders = useSelector(selectOrders)

  if (orders.length === 0) {
    return (
      <div className="text-center py-12">
        <h1 className="font-pop text-2xl font-bold mb-4">Order History</h1>
        <p className="font-pop text-gray-500 mb-6">You haven&apos;t placed any orders yet.</p>
        <Link to="/shop" className="bg-primary text-white px-6 py-3 rounded-full font-pop text-sm">
          Start Shopping
        </Link>
      </div>
    )
  }

  return (
    <div>
      <h1 className="font-pop text-2xl font-bold mb-6">Order History</h1>
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <div className="grid grid-cols-4 bg-gry p-4 font-pop text-sm font-semibold">
          <span>Order ID</span>
          <span>Date</span>
          <span>Status</span>
          <span className="text-right">Total</span>
        </div>
        {orders.map((order) => (
          <Link
            key={order.id}
            to={`/dashboard/orders/${order.id}`}
            className="grid grid-cols-4 p-4 border-t border-gray-200 hover:bg-gry transition-colors font-pop text-sm"
          >
            <span className="font-semibold text-primary">{order.id}</span>
            <span>{order.date}</span>
            <span>{order.status}</span>
            <span className="text-right font-bold">${order.total.toFixed(2)}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default OrderHistory
