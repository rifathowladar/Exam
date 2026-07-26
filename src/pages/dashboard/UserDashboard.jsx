import React from 'react'
import { Link } from 'react-router'
import { useSelector } from 'react-redux'
import { selectUser } from '../../slices/authSlice'
import { selectOrders } from '../../slices/orderSlice'
import { selectCartCount } from '../../slices/cartSlice'
import { selectWishlistCount } from '../../slices/wishlistSlice'

const UserDashboard = () => {
  const user = useSelector(selectUser)
  const orders = useSelector(selectOrders)
  const cartCount = useSelector(selectCartCount)
  const wishlistCount = useSelector(selectWishlistCount)

  return (
    <div>
      <h1 className="font-pop text-2xl font-bold mb-2">
        Welcome, {user?.name || user?.email || 'Guest'}!
      </h1>
      <p className="font-pop text-gray-500 mb-8">Manage your account and track your orders.</p>

      <div className="grid grid-cols-3 gap-6 mb-10">
        <div className="bg-gry p-6 rounded-xl">
          <p className="font-pop text-sm text-gray-500">Total Orders</p>
          <p className="font-pop text-3xl font-bold text-primary">{orders.length}</p>
        </div>
        <div className="bg-gry p-6 rounded-xl">
          <p className="font-pop text-sm text-gray-500">Cart Items</p>
          <p className="font-pop text-3xl font-bold">{cartCount}</p>
        </div>
        <div className="bg-gry p-6 rounded-xl">
          <p className="font-pop text-sm text-gray-500">Wishlist Items</p>
          <p className="font-pop text-3xl font-bold">{wishlistCount}</p>
        </div>
      </div>

      <h2 className="font-pop font-bold text-lg mb-4">Recent Orders</h2>
      {orders.length === 0 ? (
        <p className="font-pop text-gray-500 mb-4">No orders yet.</p>
      ) : (
        <div className="space-y-3">
          {orders.slice(0, 3).map((order) => (
            <Link
              key={order.id}
              to={`/dashboard/orders/${order.id}`}
              className="flex justify-between items-center p-4 border border-gray-200 rounded-lg hover:border-primary transition-colors"
            >
              <div>
                <p className="font-pop font-semibold">{order.id}</p>
                <p className="font-pop text-sm text-gray-500">{order.date}</p>
              </div>
              <div className="text-right">
                <p className="font-pop font-bold text-primary">${order.total.toFixed(2)}</p>
                <p className="font-pop text-sm text-gray-500">{order.status}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default UserDashboard
