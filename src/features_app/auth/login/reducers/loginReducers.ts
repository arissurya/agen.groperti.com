import { createAsyncThunk } from '@reduxjs/toolkit';
import crypto from 'crypto-js'; 
import Axios from 'axios'
import {
    InputState
} from '../loginTypes'

export const loginAction = createAsyncThunk(
    'auth/login',
    async (value : InputState , { rejectWithValue }) => {
 
        const body = {
            email : value.email,
            password : value.password,
            last_login_location  : ""
        }
        try {
            const response : any = await Axios.post(`${process.env.REACT_APP_API_DEV}/user/login`, body)
            if(response.data.errors === null) {
                try {
                    const profil : any = await Axios.get(`${process.env.REACT_APP_API_DEV}/user/access`, {
                        headers : {
                            "Authorization" : `Bearer ${response.data.data.access_token}`
                        }
                    })
                    if(profil.data.errors === null) {
                        if(profil.data.data.flag === "AGENT") {
                            let data = {
                                access_token : response.data.data.access_token,
                                id_token : response.data.data.id_token, 
                                expires_in : response.data.data.expires_in,
                                email : profil.data.data.email,
                                name : profil.data.data.name, 
                                flag : profil.data.data.flag, 
                                avatar : profil.data.data.avatar,
                                auth_id : profil.data.data.auth_id,
                                first_time : profil.data.data.isFirstTime,
                                login: true
                            }
                            const saveToLocalStorage = crypto.AES.encrypt(JSON.stringify(data), `${process.env.REACT_APP_CRYPTO_SECRET}`).toString();
                            localStorage.setItem('_?GROcredentials', saveToLocalStorage)
                            return data
                        } else {
                            return rejectWithValue("You are not allowed, because your account is not AGENT")
                        }
                    } else {
                        return rejectWithValue(profil.data.message)
                    }
                } catch (err : any) {
                    return rejectWithValue(err)
                }
            } else {
                return rejectWithValue(response.data.message)
            }
          } catch (err : any) {
            if (!err.response) {
              throw err
            }
            return rejectWithValue(err.response.data)
        }
    }
  );

/* istanbul ignore file */
