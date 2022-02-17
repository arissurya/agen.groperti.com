import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { userCredentials } from '../../../../utilities/config';

export const getProfileCompany = createAsyncThunk(
    'profile',
    async (_, { rejectWithValue }) => { 
        try {
            const response : any = await axios.get(`${process.env.REACT_APP_API_DEV}/agent-profile/${userCredentials.auth_id}`)
            if(response.data.errors === null) {
                let message = response.data.message
                return {data : response.data.data, message : message}
            } else {
                return rejectWithValue(response.data.message)
            }
          } catch (err : any) {
            return rejectWithValue(err)
        }
    }
);

export const getBankAccount = createAsyncThunk(
    'bank/get',
    async (_, { rejectWithValue }) => { 
        try {
            const response : any = await axios.get(`${process.env.REACT_APP_API_SERVER}/bank/vendor?vendor_id=${userCredentials.vendor_id}`)
            if(response.data.errors === null) {
                let message = response.data.message
                return {data : response.data.data, message : message}
            } else {
                return rejectWithValue(response.data.message)
            }
          } catch (err : any) {
            return rejectWithValue(err)
        }
    }
);

export const postBankAccount = createAsyncThunk(
    'bank/post',
    async (body : any, { rejectWithValue }) => { 
        try {
            const response : any = await axios.post(`${process.env.REACT_APP_API_SERVER}/bank/vendor`, body)
            if(response.data.errors === null) {
                let message = response.data.message
                return {data : true, message : message}
            } else {
                return rejectWithValue(response.data.message)
            }
          } catch (err : any) {
            return rejectWithValue(err)
        }
    }
);

export const removeBankAccount = createAsyncThunk(
    'bank/remove',
    async (id : any, { rejectWithValue }) => { 
        try {
            const response : any = await axios.delete(`${process.env.REACT_APP_API_SERVER}/bank/vendor?bank_id=${id}`)
            if(response.data.errors === null) {
                let message = response.data.message
                return {data : true, message : message}
            } else {
                return rejectWithValue(response.data.message)
            }
          } catch (err : any) {
            return rejectWithValue(err)
        }
    }
);

export const changeDefaultBankAccount = createAsyncThunk(
    'bank/default',
    async (id : any, { rejectWithValue }) => { 
        try {
            const response : any = await axios.put(`${process.env.REACT_APP_API_SERVER}/bank/vendor/default?bank_id=${id}&vendor_id=${userCredentials.vendor_id}`)
            if(response.data.errors === null) {
                let message = response.data.message
                return {data : true, message : message}
            } else {
                return rejectWithValue(response.data.message)
            }
          } catch (err : any) {
            return rejectWithValue(err)
        }
    }
);