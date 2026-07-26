import { createSlice } from '@reduxjs/toolkit'

const loadOrders = () => {
  try {
    const saved = localStorage.getItem('orders')
    return saved ? JSON.parse(saved) : []
  } catch {
    return []
  }
}

const saveOrders = (orders) => localStorage.setItem('orders', JSON.stringify(orders))

const orderSlice = createSlice({
  name: 'orders',
  initialState: { list: loadOrders() },
  reducers: {
    addOrder: (state, action) => {
      state.list.unshift(action.payload)
      saveOrders(state.list)
    },
  },
})

export const { addOrder } = orderSlice.actions
export const selectOrders = (state) => state.orders.list
export const selectOrderById = (id) => (state) =>
  state.orders.list.find((o) => o.id === id)

export default orderSlice.reducer
