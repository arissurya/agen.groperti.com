import { createSlice } from '@reduxjs/toolkit';
import swal from 'sweetalert'
import { updateAgentProfile } from './reducers/completeRegistereducers';

const initialState: any = {
  profile: false, 
  loading : false,
};

export const completingRegister = createSlice({
  name: 'completing-register',
  initialState, 
  reducers: {},
  extraReducers: (builder) => {
    builder
      // put profile
      .addCase(updateAgentProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateAgentProfile.fulfilled, (state, action:any) => {
        state.loading = false;
        state.profile = action.payload.data;
        swal("Success", `${action.payload.message}`, 'success')

      })
      .addCase(updateAgentProfile.rejected, (state, action : any) => {
        state.loading = false;
        swal("Error", `${action.payload}`, 'error')
      })
  },
});


export default completingRegister.reducer;
