import { createSlice } from '@reduxjs/toolkit'

const loadWishlist = () => {
  try {
    const saved = localStorage.getItem('wishlist')
    return saved ? JSON.parse(saved) : []
  } catch {
    return []
  }
}

const saveWishlist = (items) => localStorage.setItem('wishlist', JSON.stringify(items))

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: { items: loadWishlist() },
  reducers: {
    toggleWishlist: (state, action) => {
      const product = action.payload
      const index = state.items.findIndex((item) => item.id === product.id)
      if (index >= 0) {
        state.items.splice(index, 1)
      } else {
        state.items.push(product)
      }
      saveWishlist(state.items)
    },
    removeFromWishlist: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
      saveWishlist(state.items)
    },
  },
})

export const { toggleWishlist, removeFromWishlist } = wishlistSlice.actions

export const selectWishlistItems = (state) => state.wishlist.items
export const selectWishlistCount = (state) => state.wishlist.items.length
export const selectIsInWishlist = (id) => (state) =>
  state.wishlist.items.some((item) => item.id === id)

export default wishlistSlice.reducer
