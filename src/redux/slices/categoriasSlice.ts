import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { Result } from "../../interfaces/categoria.interface";

const BASE_URL = 'https://api.mercadolibre.com'

interface Data {
    id: string,
    name: string
}

interface CategoriaState {
    msg: string;
    error: string | undefined;
    status: string;
    data: Data[];
    dataId: Result[];
    nameCategoria: string;
}

const initialState: CategoriaState = {
    msg: '',
    error: '',
    status: '',
    data: [],
    dataId: [],
    nameCategoria: 'Celulares y Teléfonos'
}

export const getCategorias = createAsyncThunk('categorias/getCategorias', async () => {
    const response = await axios.get(`${BASE_URL}/sites/MLA/categories`);
    return response.data
})

export const getCategoriasId = createAsyncThunk('categorias/getCategoriasId', async (id: string) => {
    const response = await axios.get(`${BASE_URL}/sites/MLA/search?category=${id}`)
    return response.data
})

export const categoriasSlice = createSlice({
    name: 'categorias',
    initialState,
    reducers: {
        setNameCategoria: (state, action) => {
            state.nameCategoria = action.payload
        }
    },
    extraReducers: (builder) => {
        //get Categorias
        builder
            .addCase(getCategorias.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(getCategorias.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.data = action.payload
            })
            .addCase(getCategorias.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.error.message;
            })
        //get Categoria por id
            .addCase(getCategoriasId.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(getCategoriasId.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.dataId = action.payload.results
            })
            .addCase(getCategoriasId.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.error.message;
            })
    }
})

export const { setNameCategoria } = categoriasSlice.actions

export default categoriasSlice.reducer