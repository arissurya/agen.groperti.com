import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { userCredentials } from '../../../../utilities/config';

export const getDataSetting = createAsyncThunk(
    'setting/get',
    async (_, { rejectWithValue }) => { 
        try {
            const response : any = await axios.get(`${process.env.REACT_APP_API_SERVER}/setting/vendor?vendor_id=${userCredentials.vendor_id}`)
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


export const updateSettingPlatform = createAsyncThunk(
    'setting/update',
    async (value : any, { rejectWithValue }) => { 
        try {
            if(value.update) {
                const response : any = await axios.put(`${process.env.REACT_APP_API_SERVER}/setting/vendor`, value.body)
                if(response.data.errors === null) {
                    let message = response.data.message
                    return {data : true, message : message}
                } else {
                    return rejectWithValue(response.data.message)
                }
            } else {
                const response : any = await axios.post(`${process.env.REACT_APP_API_SERVER}/setting/vendor`, value.body)
                if(response.data.errors === null) {
                    let message = response.data.message
                    return {data : true, message : message}
                } else {
                    return rejectWithValue(response.data.message)
                }
            }
          } catch (err : any) {
            return rejectWithValue(err)
        }
    }
);