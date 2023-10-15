import { configureStore } from '@reduxjs/toolkit'
import { categoriasSlice } from './redux/slices'

export const store = configureStore({
  reducer: {
    categorias: categoriasSlice.reducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch