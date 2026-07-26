import { createSlice } from '@reduxjs/toolkit'

const loadCart = () => {
  try {
    const saved = localStorage.getItem('cart')
    return saved ? JSON.parse(saved) : []
  } catch {
    return []
  }
}

const saveCart = (items) => localStorage.setItem('cart', JSON.stringify(items))

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: loadCart() },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload
      const existing = state.items.find((item) => item.id === product.id)
      if (existing) {
        existing.qty += 1
      } else {
        state.items.push({ ...product, qty: 1 })
      }
      saveCart(state.items)
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
      saveCart(state.items)
    },
    updateQty: (state, action) => {
      const { id, qty } = action.payload
      const item = state.items.find((i) => i.id === id)
      if (item) {
        item.qty = Math.max(1, qty)
      }
      saveCart(state.items)
    },
    clearCart: (state) => {
      state.items = []
      saveCart(state.items)
    },
  },
})

export const { addToCart, removeFromCart, updateQty, clearCart } = cartSlice.actions

export const selectCartItems = (state) => state.cart.items
export const selectCartCount = (state) =>
  state.cart.items.reduce((sum, item) => sum + item.qty, 0)
export const selectCartTotal = (state) =>
  state.cart.items.reduce((sum, item) => sum + item.price * item.qty, 0)

export default cartSlice.reducer
