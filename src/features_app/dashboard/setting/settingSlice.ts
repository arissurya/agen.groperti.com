import { createSlice } from '@reduxjs/toolkit';
import swal from 'sweetalert'
import { updateSettingPlatform, getDataSetting } from './reducers/settingReducers';

const initialState: any = {
  data: [], 
  loading : true,
  update : false,
  loading_update : false
};

export const getCompanyProfile = createSlice({
  name: 'setting',
  initialState, 
  reducers: {},
  extraReducers: (builder) => {
    builder 
      // get setting
      .addCase(getDataSetting.pending, (state) => {
        state.loading = true;
      })
      .addCase(getDataSetting.fulfilled, (state, action:any) => {
        state.loading = false;
        state.data = action.payload.data;
      })
      .addCase(getDataSetting.rejected, (state, action : any) => {
        state.loading = false;
        swal("Error", `${action.payload}`, 'error')
      })
      // update setting
      .addCase(updateSettingPlatform.pending, (state) => {
        state.loading_update = true;
      })
      .addCase(updateSettingPlatform.fulfilled, (state, action:any) => {
        state.loading_update = false;
        state.update = action.payload.data;
      })
      .addCase(updateSettingPlatform.rejected, (state, action : any) => {
        state.loading_update = false;
        swal("Error", `${action.payload}`, 'error')
      })
      
  },
});

export default getCompanyProfile.reducer;
