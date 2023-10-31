import { configureStore } from '@reduxjs/toolkit'
import { busquedaSlice, cartSlice, categoriasSlice, itemSlice } from './redux/slices'

export const store = configureStore({
  reducer: {
    categorias: categoriasSlice.reducer,
    busqueda: busquedaSlice.reducer,
    item: itemSlice.reducer,
    cart: cartSlice.reducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch