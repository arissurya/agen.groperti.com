import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { userCredentials } from '../../../../utilities/config';

export const updateAgentProfile = createAsyncThunk(
    'agent-profile/put',
    async (body : any, { rejectWithValue }) => { 
        try {
            const response : any = await axios.put(`${process.env.REACT_APP_API_DEV}/agent-profile/${userCredentials.auth_id}`, body)
            if(response.data.errors === null) {
                let message = response.data.message
                try {
                    let update = {
                        isFirstTime : false
                    }
                    const first_time : any = await axios.put(`${process.env.REACT_APP_API_DEV}/user/${userCredentials.auth_id}`, update)
                    if(first_time.data.errors === null) {
                        return {data : true, message : message}
                    } else {
                        return rejectWithValue(first_time.data.message)
                    }
                } catch (error) {
                    return rejectWithValue(error)
                }
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