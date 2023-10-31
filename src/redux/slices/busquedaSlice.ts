import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { Busqueda } from "../../interfaces/busqueda.interface";

const BASE_URL = 'https://api.mercadolibre.com'

const initialState: Busqueda = {} as Busqueda

export const getBusqueda = createAsyncThunk('busqueda/getBusqueda', async (datos?: string) => {
    const response = await axios.get(`${BASE_URL}/sites/MLA/search?q=${datos}`);
    return response.data
})

export const busquedaSlice = createSlice({
    name: 'busqueda',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        //get Categorias
        builder
            .addCase(getBusqueda.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(getBusqueda.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.data = action.payload
            })
            .addCase(getBusqueda.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.error.message;
            })
    }
})

export default busquedaSlice.reducer