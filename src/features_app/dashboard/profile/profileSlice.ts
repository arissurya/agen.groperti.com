import { createSlice } from '@reduxjs/toolkit';
import swal from 'sweetalert'
import { changeDefaultBankAccount, getBankAccount, getProfileCompany, postBankAccount, removeBankAccount } from './reducers/profilesReducers';

const initialState: any = {
  data: [], 
  loading : true,
  bank : [],
  loading_bank : false,
  bank_post : false,
  loading_bank_post : false,
  bank_remove : false,
  loading_bank_remove : false,
  bank_default : false,
  loading_bank_default : false
};

export const getCompanyProfile = createSlice({
  name: 'profile/get',
  initialState, 
  reducers: {},
  extraReducers: (builder) => {
    builder
      // get profile
      .addCase(getProfileCompany.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProfileCompany.fulfilled, (state, action:any) => {
        state.loading = false;
        state.data = action.payload.data;
      })
      .addCase(getProfileCompany.rejected, (state, action : any) => {
        state.loading = false;
        swal("Error", `${action.payload}`, 'error')
      })
      // get bank
      .addCase(getBankAccount.pending, (state) => {
        state.loading_bank = true;
        state.bank_post = false;
        state.bank_remove = false;
        state.bank_default = false;
      })
      .addCase(getBankAccount.fulfilled, (state, action:any) => {
        state.loading_bank = false;
        state.bank = action.payload.data;
      })
      .addCase(getBankAccount.rejected, (state, action : any) => {
        state.loading_bank = false;
        swal("Error", `${action.payload}`, 'error')
      })
      // post bank
      .addCase(postBankAccount.pending, (state) => {
        state.loading_bank_post = true;
      })
      .addCase(postBankAccount.fulfilled, (state, action:any) => {
        state.loading_bank_post = false;
        state.bank_post = action.payload.data;
      })
      .addCase(postBankAccount.rejected, (state, action : any) => {
        state.loading_bank_post = false;
        swal("Error", `${action.payload}`, 'error')
      })
      // remove bank
      .addCase(removeBankAccount.pending, (state) => {
        state.loading_bank_remove = true;
      })
      .addCase(removeBankAccount.fulfilled, (state, action:any) => {
        state.loading_bank_remove = false;
        state.bank_remove = action.payload.data;
      })
      .addCase(removeBankAccount.rejected, (state, action : any) => {
        state.loading_bank_remove = false;
        swal("Error", `${action.payload}`, 'error')
      })
      // default bank
      .addCase(changeDefaultBankAccount.pending, (state) => {
        state.loading_bank_default = true;
      })
      .addCase(changeDefaultBankAccount.fulfilled, (state, action:any) => {
        state.loading_bank_default = false;
        state.bank_default = action.payload.data;
      })
      .addCase(changeDefaultBankAccount.rejected, (state, action : any) => {
        state.loading_bank_default = false;
        swal("Error", `${action.payload}`, 'error')
      })
  },
});

export default getCompanyProfile.reducer;
