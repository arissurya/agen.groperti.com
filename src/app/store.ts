import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import loginReducer from '../features_app/auth/login/loginSlice';
import registerReducer from '../features_app/auth/register/registerSlice';
import stepFormReducer from '../features_app/dashboard/complete_register/components/stepFormSlice';
import forgotReducer from '../features_app/auth/forgot/forgotSlice';
import getProductsReducer from '../features_app/dashboard/products/productsSlice'
import getProfileReducer from '../features_app/dashboard/profile/profileSlice'
import getSettingCompany from '../features_app/dashboard/setting/settingSlice'
import completingRegisterReducer from '../features_app/dashboard/complete_register/completeRegisterrSlice'

export const store = configureStore({
  reducer: {
    login: loginReducer,
    forgot : forgotReducer,
    register: registerReducer,
    step_state : stepFormReducer,
    products : getProductsReducer,
    profile : getProfileReducer,
    setting: getSettingCompany,
    completing_register : completingRegisterReducer

  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
