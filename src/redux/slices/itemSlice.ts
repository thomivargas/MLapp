import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { Data } from '../../interfaces/item.interface'

const BASE_URL = 'https://api.mercadolibre.com'

export const getItem = createAsyncThunk('item/getItem', async (id?: string) => {
    const response = await axios.get(`${BASE_URL}/items?ids=${id}`);
    return response.data
})

interface itemState {
    msg: string;
    error: any;
    status: string;
    data: Data[];
}

const initialState: itemState = {
    msg:    '',
    error:  '',
    status: '',
    data: []
}

export const itemSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        //get Categorias
        builder
            .addCase(getItem.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(getItem.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.data = action.payload
            })
            .addCase(getItem.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.error.message;
            })
    }
})

export default itemSlice.reducer