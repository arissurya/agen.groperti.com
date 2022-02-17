import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { userCredentials } from '../../../../utilities/config';
// import { userCredentials } from '../../../../utilities/config';

export const getAllProduct = createAsyncThunk(
    'get/products',
    async (_, { rejectWithValue }) => { 
        try {
            const response : any = await axios.get(`${process.env.REACT_APP_API_DEV}/product/variances`, {
                params : {
                    vendor_id : `${userCredentials.vendor_id}`
                }
            })
            if(response.data.errors === null) {
                let message = response.data.message
                return {data : response.data.data.data, message : message}
            } else {
                return rejectWithValue(response.data.message)
            }
          } catch (err : any) {
            if (!err.response) {
              throw err
            }
            return rejectWithValue(err.response)
        }
    }
);


export const getAllProperty = createAsyncThunk(
    'get/property',
    async (_, { rejectWithValue }) => { 
        try {
            const response : any = await axios.get(`${process.env.REACT_APP_API_DEV}/house-list?agent_id=${userCredentials.auth_id}`)
            if(response.data.errors === null) {
                let message = response.data.message
                return {data : response.data.data.data, message : message}
            } else {
                return rejectWithValue(response.data.message)
            }
          } catch (err : any) {
            if (!err.response) {
              throw err
            }
            return rejectWithValue(err.response)
        }
    }
);

export const getProductBySlug = createAsyncThunk(
    'product-slug/fetch', 
    async (slug: string, { rejectWithValue }) => { 
        try {
            const response : any = await axios.get(`${process.env.REACT_APP_API_DEV}/house-list/by/${slug}`)
            if(response.data.errors === null) { 
                return {data : response.data.data, message : response.data.message}
            } else {
                return rejectWithValue(response.data.message)
            }
        } catch (error) {
            return rejectWithValue(error)
        }
})


export const getMasterTax = createAsyncThunk(
    'pajak/fetch', 
    async (_, { rejectWithValue }) => { 
        try {
            const response : any = await axios.get(`${process.env.REACT_APP_API_DEV}/pajak`)
            if(response.data.errors === null) { 
                return {data : response.data.data, message : response.data.message}
            } else {
                return rejectWithValue(response.data.message)
            }
        } catch (error) {
            return rejectWithValue(error)
        }
})

export const getMasterCategory = createAsyncThunk(
    'category/fetch', 
    async (_, { rejectWithValue }) => { 
        try {
            const response : any = await axios.patch(`${process.env.REACT_APP_API_DEV}/category/tree`)
            if(response.data.errors === null) { 
                return {data : response.data.data, message : response.data.message}
            } else {
                return rejectWithValue(response.data.message)
            }
        } catch (error) {
            return rejectWithValue(error)
        }
})

export const postCreateProducts = createAsyncThunk(
    'product/post',
    async (body : any, { rejectWithValue }) => { 
        try {
            const response : any = await axios.post(`${process.env.REACT_APP_API_DEV}/house-list`, body)
            if(response.data.errors === null) {
                return {data : response.data.data, message : response.data.message}
            } else {
                return rejectWithValue(response.data.message)
            }
            } catch (err : any) {
            return rejectWithValue(err)
        }
    }
);

export const updateProducts = createAsyncThunk(
    'product/update',
    async (value : any, { rejectWithValue }) => { 
        try {
            const response : any = await axios.put(`${process.env.REACT_APP_API_DEV}/product/${value.id}`, value.products)
            if(response.data.errors === null) {
                return {data : response.data.data, message : "Success updated product."}
            } else {
                return rejectWithValue(response.data.message)
            }
            } catch (err : any) {
            return rejectWithValue(err)
        }
    }
);



export const postVariantProducts = createAsyncThunk(
    'product-variant/post',
    async (value : any, { rejectWithValue }) => { 
        try {
            const response : any = await axios.post(`${process.env.REACT_APP_API_DEV}/variance`, value)
            if(response.data.errors === null) {
                return {data : response.data.data, message : "Success added product variance."}
            } else {
                return rejectWithValue(response.data.message)
            }
            } catch (err : any) {
            return rejectWithValue(err)
        }
    }
);

export const updateVariantProducts = createAsyncThunk(
    'product-variant/update',
    async (value : any, { rejectWithValue }) => { 
        try {
            const response : any = await axios.put(`${process.env.REACT_APP_API_DEV}/variance/${value.id_variance}`, value.variance)
            if(response.data.errors === null) {
                return {data : response.data.data, message : "Success updated product variance."}
            } else {
                return rejectWithValue(response.data.message)
            }
            } catch (err : any) {
            return rejectWithValue(err)
        }
    }
);

export const removeProduct = createAsyncThunk(
    'product/remove', 
    async (id: string, { rejectWithValue }) => { 
        try {
            const response : any = await axios.delete(`${process.env.REACT_APP_API_DEV}/product/${id}`)
            if(response.data.errors === null) { 
                return {data : response.data.data, message : response.data.message}
            } else {
                return rejectWithValue(response.data.message)
            }
        } catch (error) {
            return rejectWithValue(error)
        }
})

export const removeVariantProduct = createAsyncThunk(
    'product-variant/remove', 
    async (id: string, { rejectWithValue }) => { 
        try {
            const response : any = await axios.delete(`${process.env.REACT_APP_API_DEV}/variance/${id}`)
            if(response.data.errors === null) { 
                return {data : response.data.data, message : "Success removed product variance."}
            } else {
                return rejectWithValue(response.data.message)
            }
        } catch (error) {
            return rejectWithValue(error)
        }
})