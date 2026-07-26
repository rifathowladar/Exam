import React from 'react'
import { Link } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import Container from '../components/layout/Container'
import { removeFromCart, updateQty, selectCartItems, selectCartTotal } from '../slices/cartSlice'

const Cart = () => {
  const dispatch = useDispatch()
  const items = useSelector(selectCartItems)
  const total = useSelector(selectCartTotal)
  const shipping = total > 5 ? 0 : 2.99

  if (items.length === 0) {
    return (
      <Container className="py-20 text-center">
        <h1 className="font-pop text-2xl font-bold mb-4">Your cart is empty</h1>
        <p className="font-pop text-gray-500 mb-8">Add some products to get started.</p>
        <Link to="/shop" className="bg-primary text-white px-8 py-3 rounded-full font-pop text-sm">
          Continue Shopping
        </Link>
      </Container>
    )
  }

  return (
    <Container className="py-12">
      <h1 className="font-pop text-2xl font-bold mb-8">Shopping Cart</h1>
      <div className="flex gap-8">
        <div className="flex-1">
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="grid grid-cols-[2fr_1fr_1fr_1fr] bg-gry p-4 font-pop text-sm font-semibold">
              <span>Product</span>
              <span className="text-center">Price</span>
              <span className="text-center">Quantity</span>
              <span className="text-center">Subtotal</span>
            </div>
            {items.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-[2fr_1fr_1fr_1fr] items-center p-4 border-t border-gray-200"
              >
                <div className="flex items-center gap-4">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-contain" />
                  <div>
                    <Link to={`/product/${item.id}`} className="font-pop font-medium hover:text-primary">
                      {item.name}
                    </Link>
                    <button
                      type="button"
                      onClick={() => dispatch(removeFromCart(item.id))}
                      className="block text-red-500 text-xs font-pop mt-1 hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <span className="text-center font-pop">${item.price.toFixed(2)}</span>
                <div className="flex justify-center">
                  <div className="flex items-center border border-gray-300 rounded-md">
                    <button
                      type="button"
                      onClick={() => dispatch(updateQty({ id: item.id, qty: item.qty - 1 }))}
                      className="px-3 py-1"
                    >
                      −
                    </button>
                    <span className="px-3 py-1 border-x border-gray-300 font-pop text-sm">{item.qty}</span>
                    <button
                      type="button"
                      onClick={() => dispatch(updateQty({ id: item.id, qty: item.qty + 1 }))}
                      className="px-3 py-1"
                    >
                      +
                    </button>
                  </div>
                </div>
                <span className="text-center font-pop font-semibold">
                  ${(item.price * item.qty).toFixed(2)}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="w-80 shrink-0">
          <div className="border border-gray-200 rounded-lg p-6 bg-gry">
            <h3 className="font-pop font-bold text-lg mb-4">Cart Totals</h3>
            <div className="space-y-3 font-pop text-sm">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between font-bold text-base border-t border-gray-300 pt-3">
                <span>Total</span>
                <span className="text-primary">${(total + shipping).toFixed(2)}</span>
              </div>
            </div>
            <Link
              to="/checkout"
              className="block w-full text-center bg-primary text-white py-3 rounded-full font-pop text-sm font-semibold mt-6 hover:opacity-90"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Cart
