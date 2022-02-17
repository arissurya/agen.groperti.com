import { createAsyncThunk } from '@reduxjs/toolkit';
import Axios from 'axios'
import {
    InputState
} from '../registerTypes'

export const registerAction = createAsyncThunk(
    'auth/register',
    async (value : InputState , { rejectWithValue }) => {
      try {
          const body = {
            email : value.email,
            password : value.password,
            name : value.fullname,
            flag : "AGENT",
            isFirstTime : true
          }
          const response : any = await Axios.post(`${process.env.REACT_APP_API_DEV}/user/register`, body)
          if(response.data.errors === null) {
            return response.data
          } else {
            return rejectWithValue(response.data.message)
          }
        } catch (err : any) {
          if (!err.response) {
            throw err
          }
          return rejectWithValue(err)
      }
    }
  );

/* istanbul ignore file */
