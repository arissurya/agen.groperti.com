import { createSlice } from '@reduxjs/toolkit';
import { getAllProduct, getAllProperty, getMasterCategory, getMasterTax, getProductBySlug, postCreateProducts, postVariantProducts, removeProduct, removeVariantProduct, updateProducts, updateVariantProducts } from './reducers/productsReducers';
import swal from 'sweetalert'
// import { getAllUsersTeams } from './reducers/productsReducers';

const initialState: any = {
  data: [], 
  loading : false,
  loaded : false,
  tax : [],
  loading_tax : false,
  category_tree : [],
  loading_category_tree : false,
  success_create: false,
  loading_create: false,
  success_update: false,
  loading_update: false,
  success_remove: false,
  loading_remove: false,
  success_update_variant: false,
  loading_update_variant: false,
  success_post_variant: false,
  loading_post_variant: false,
  success_remove_variant: false,
  loading_remove_variant: false,
  product_detail: {},
  product_detail_exist : false,
  loading_product_detail : true
};

export const getProductsReducer = createSlice({
  name: 'products',
  initialState, 
  reducers: {},
  extraReducers: (builder) => {
    builder
       // get all users
       .addCase(getAllProperty.pending, (state) => {
        state.loading = true;
        state.loaded = false
      })
      .addCase(getAllProperty.fulfilled, (state, action:any) => {
        state.loading = false;
        state.data = action.payload.data;
        state.loaded = true
      })
      .addCase(getAllProperty.rejected, (state, action : any) => {
        state.loading = false;
        swal("Error", `${action.payload}`, 'error')
      })

      // get all tax
      .addCase(getMasterTax.pending, (state) => {
        state.loading_tax = true;
      })
      .addCase(getMasterTax.fulfilled, (state, action:any) => {
        state.loading_tax = false;
        state.tax = action.payload.data;
      })
      .addCase(getMasterTax.rejected, (state, action : any) => {
        state.loading_tax = false;
        swal("Error", `${action.payload}`, 'error')
      })

      // get product by slug
      .addCase(getProductBySlug.pending, (state) => {
        state.loading_product_detail = true;
        state.product_detail_exist = false
        state.success_update_variant = false
        state.success_post_variant = false
      })
      .addCase(getProductBySlug.fulfilled, (state, action:any) => { 
        state.loading_product_detail = false;
        state.product_detail = action.payload.data;
        console.log(action.payload.data, 'ini data fetch ulang')
        state.product_detail_exist = true
      })
      .addCase(getProductBySlug.rejected, (state, action : any) => {
        state.loading_product_detail = false;
        swal("Error", `${action.payload}`, 'error')
      })

      // get all category tree
      .addCase(getMasterCategory.pending, (state) => {
        state.loading_category_tree = true;
      })
      .addCase(getMasterCategory.fulfilled, (state, action:any) => {
        state.loading_category_tree = false;
        state.category_tree = action.payload.data;
      })
      .addCase(getMasterCategory.rejected, (state, action : any) => {
        state.loading_category_tree = false;
        swal("Error", `${action.payload}`, 'error')
      })
      
      // create products
      .addCase(postCreateProducts.pending, (state) => {
        state.loading_create = true;
      })
      .addCase(postCreateProducts.fulfilled, (state, action:any) => {
        state.loading_create = false;
        state.success_create = action.payload.data;
        swal("Success", `${action.payload.message}`, 'success')
      })
      .addCase(postCreateProducts.rejected, (state, action : any) => {
        state.loading_create = false;
        swal("Error", `${action.payload}`, 'error')
      })

       // update products
      .addCase(updateProducts.pending, (state) => {
        state.loading_update = true;
      })
      .addCase(updateProducts.fulfilled, (state, action:any) => {
        state.loading_update = false;
        state.success_update = action.payload.data;
        swal("Success", `${action.payload.message}`, 'success')
      })
      .addCase(updateProducts.rejected, (state, action : any) => {
        state.loading_update = false;
        swal("Error", `${action.payload}`, 'error')
      })

       // post variance
       .addCase(postVariantProducts.pending, (state) => {
        state.loading_post_variant = true;
      })
      .addCase(postVariantProducts.fulfilled, (state, action:any) => {
        state.loading_post_variant = false;
        state.success_post_variant = action.payload.data;
        swal("Success", `${action.payload.message}`, 'success')
      })
      .addCase(postVariantProducts.rejected, (state, action : any) => {
        state.loading_post_variant = false;
        swal("Error", `${action.payload}`, 'error')
      })

      // update variance
      .addCase(updateVariantProducts.pending, (state) => {
        state.loading_update_variant = true;
      })
      .addCase(updateVariantProducts.fulfilled, (state, action:any) => {
        state.loading_update_variant = false;
        state.success_update_variant = action.payload.data;
        swal("Success", `${action.payload.message}`, 'success')
      })
      .addCase(updateVariantProducts.rejected, (state, action : any) => {
        state.loading_update_variant = false;
        swal("Error", `${action.payload}`, 'error')
      })

       // remove variant
       .addCase(removeVariantProduct.pending, (state) => {
        state.loading_remove_variant = true;
      })
      .addCase(removeVariantProduct.fulfilled, (state, action:any) => {
        state.loading_remove_variant = false;
        state.success_remove_variant = action.payload.data;
        swal("Success", `${action.payload.message}`, 'success')
      })
      .addCase(removeVariantProduct.rejected, (state, action : any) => {
        state.loading_remove_variant = false;
        swal("Error", `${action.payload}`, 'error')
      })
       // remove products
       .addCase(removeProduct.pending, (state) => {
        state.loading_remove = true;
      })
      .addCase(removeProduct.fulfilled, (state, action:any) => {
        state.loading_remove = false;
        state.success_remove = action.payload.data;
        swal("Success", `${action.payload.message}`, 'success')
      })
      .addCase(removeProduct.rejected, (state, action : any) => {
        state.loading_remove = false;
        swal("Error", `${action.payload}`, 'error')
      })
  },
});


export default getProductsReducer.reducer;
