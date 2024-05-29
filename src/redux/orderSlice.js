import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseUrl } from '../main';

export const createOrder = createAsyncThunk(
    'orders/createOrder',
    async (orderData, { getState }) => {
        const { token } = getState().auth;
        const response = await axios.post(`${baseUrl}/api/orders`, orderData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    }
);

export const getOrder = createAsyncThunk(
    'orders/getOrder',
    async (orderId, { getState }) => {
        const { token } = getState().auth;
        const response = await axios.get(`${baseUrl}/api/orders/${orderId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    }
);

export const getAllOrders = createAsyncThunk(
    'orders/getAllOrders',
    async (_, { getState }) => {
        const { token } = getState().auth;
        const response = await axios.get(`${baseUrl}/api/orders/`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    }
);

export const editOrder = createAsyncThunk(
    'orders/editOrder',
    async ({ id, orderData }, { getState }) => {
        const { token } = getState().auth;
        const response = await axios.put(`${baseUrl}/api/orders/${id}`, orderData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    }
);

export const updateOrderStatus = createAsyncThunk(
    'orders/updateOrderStatus',
    async ({ id, status }, { getState }) => {
        const { token } = getState().auth;
        const response = await axios.put(`${baseUrl}/api/orders/${id}`, { status }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    }
);

export const deleteOrder = createAsyncThunk(
    'orders/deleteOrder',
    async (orderId, { getState }) => {
        const { token } = getState().auth;
        const response = await axios.delete(`${baseUrl}/api/orders/${orderId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    }
);

const orderSlice = createSlice({
    name: 'orders',
    initialState: {
        orders: [],
        currentOrder: null,
        status: 'idle',
        error: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(createOrder.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(createOrder.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.orders.push(action.payload.order);
            })
            .addCase(createOrder.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(getOrder.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getOrder.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.currentOrder = action.payload;
            })
            .addCase(getOrder.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(getAllOrders.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getAllOrders.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.orders = action.payload;
            })
            .addCase(getAllOrders.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(editOrder.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(editOrder.fulfilled, (state, action) => {
                state.status = 'succeeded';
                const index = state.orders.findIndex(order => order._id === action.payload.order._id);
                if (index !== -1) {
                    state.orders[index] = action.payload.order;
                }
            })
            .addCase(editOrder.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(deleteOrder.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(deleteOrder.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.orders = state.orders.filter(order => order._id !== action.meta.arg);
            })
            .addCase(deleteOrder.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(updateOrderStatus.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(updateOrderStatus.fulfilled, (state, action) => {
                state.status = 'succeeded';
                const updatedOrder = action.payload.order;
                const existingOrder = state.orders.find(order => order._id === updatedOrder._id);
                if (existingOrder) {
                    existingOrder.status = updatedOrder.status;
                }
            })
            .addCase(updateOrderStatus.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export default orderSlice.reducer;
