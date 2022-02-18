import { Grid, Stack } from '@mui/material'
import { Box } from '@mui/system'
import {userCredentials} from './../../../utilities/config'
import CardStatistic from './components/CardStatistic'
import NewestOrders from './components/NewestOrders'

const username = userCredentials === null ? "" : userCredentials.name

function HomeDashboard() {
    
    return (
        <Box sx={{pl:3, pr:3, pt:2}}>
           <h2>Selamat datang kembali, {username}</h2>
           <Box fontWeight="400">Kamu login sebagai Agen Properti</Box>

            <Stack sx={{pt:3}} >
                <Grid container spacing={3}>
                    <Grid item xl={3} lg={3} sm={6} xs={12}>
                        <CardStatistic 
                            label="Properti Terdaftar"
                            value={0}
                            currency={false}
                            background="#f7f7f7"
                        />
                    </Grid>
                    <Grid item xl={3} lg={3} sm={6} xs={12}>
                        <CardStatistic 
                            label="Properti Menunggu Persetujuan"
                            value={5}
                            currency={false}
                            background="#f7f7f7"
                        />
                    </Grid>
                    <Grid item xl={3} lg={3} sm={6} xs={12}>
                        <CardStatistic 
                            label="Properti Terjual"
                            value={0}
                            currency={false}
                            background="#f7f7f7"
                        />
                    </Grid>
                    {/* <Grid item xl={3} lg={3} sm={6} xs={12}>
                        <CardStatistic 
                            label="Fee Keuntungan"
                            value={0}
                            currency={true}
                            background="#f7f7f7"
                        />
                    </Grid> */}
                </Grid>
            </Stack>

            <Stack sx={{pt:5}} >
                <NewestOrders />
                {/* <Grid container spacing={4}>
                    <Grid item xl={8} lg={8} sm={6} xs={12}>
                    </Grid>
                </Grid> */}
            </Stack>
        </Box>
    )
}

export default HomeDashboard
