import { Stack, Box, Grid, Button } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { sendEmail } from '../../../auth/forgot/forgotSlice'

const UserAccount : React.FC<any> = ({ data }) => {

    const dispatch = useDispatch()

    const dataEmail = {
        email : data.data.user.email
    }

    return (
        <div>
        { data.loading ? "Loading.." :
        <Stack mt={1}>
            { data.data.length === 0 ? "Data not found"  :
            <>
            <Box fontWeight="700" fontSize={22}>Detail Account</Box>
            <Stack mt={1}>
                <Grid container rowSpacing={1}>
                    <Grid item xs={6} md={6} lg={2} xl={2}>
                        <Box>Email</Box>
                    </Grid>
                    <Grid item xs={6} md={6} lg={10} xl={10}>
                        <Box fontWeight="600">{data.data.user.email}</Box>
                    </Grid>
                    <Grid item xs={6} md={6} lg={2} xl={2}>
                        <Box>Password</Box>
                    </Grid>
                    <Grid item xs={6} md={6} lg={10} xl={10}>   
                        <Box fontWeight="600">
                            ********* 
                        </Box>
                        <Button 
                            onClick={() => {
                                dispatch(sendEmail(dataEmail))
                            }}
                            variant='contained' size="small" color="error"
                        >Reset Password</Button>
                    </Grid>
                </Grid>
            </Stack>
            </>
            }
            
        </Stack> 
        }
        </div>
    )
}

export default UserAccount
