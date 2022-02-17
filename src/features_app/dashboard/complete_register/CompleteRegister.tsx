import { Stack } from '@mui/material'
import { Box } from '@mui/system'
import {userCredentials} from '../../../utilities/config'
import StepperForm from './components/StepperForm'

const username = userCredentials === null ? "" : userCredentials.name

function CompleteRegister() {
    
    return (
        <Box sx={{pl:3, pr:3, pt:2}}>
           <h2>Hi, {username}</h2>
           <Box fontWeight="400" fontSize="18px">Thankyou for registering to our platform. Before continue please completing the registration proccess below!</Box>
            <Stack sx={{pt:3}} >
                <StepperForm/>
            </Stack>

            <Stack sx={{pt:5}} >
                {/* <Grid container spacing={4}>u
                    <Grid item xl={8} lg={8} sm={6} xs={12}>
                    </Grid>
                </Grid> */}
            </Stack>
        </Box>
    )
}

export default CompleteRegister
