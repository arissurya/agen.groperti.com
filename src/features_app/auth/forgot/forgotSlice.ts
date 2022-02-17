import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import swal from 'sweetalert';
import { ForgotState, ValueEmail } from './forgotTypes'
import Axios from 'axios'

export function postEmail (value : ValueEmail) {
  return new Promise ((resolve) => {
    setTimeout(() => resolve(value), 2000)
  }
  );
}

export const sendEmail = createAsyncThunk(
  "forgot/password",
  async(value : ValueEmail, { rejectWithValue } ) => {
    try {
        const response : any = await Axios.get(`${process.env.REACT_APP_API_DEV}/user/${value.email}/change-password`)
        if(response) {
          return response.data.data.message;
        }
      } catch (err : any) {
        /* istanbul ignore next */
        if (!err.response) {
          throw err
        }
        /* istanbul ignore file */
        return rejectWithValue(err.response.data)
    }
  }
)

const initialState: ForgotState = {
  forgot: false,
  loading : false,
  error : null
};

export const forgotSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    [sendEmail.pending.type] : (state) => {
      state.loading = true
    },
    [sendEmail.fulfilled.type] : (state, action) => {
      state.loading = false
      state.forgot = true
      swal("Success", `${action.payload}`, "success")
    },
    [sendEmail.rejected.type] : (state, action) => {
      state.loading = false
      state.error = action.payload
    }
  }
});

export default forgotSlice.reducer;
