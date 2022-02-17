import { Stack, Box, Grid, Button, TextField, Paper } from '@mui/material'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert';
import { RootState } from '../../../app/store';
import BreadCrumbs from '../../../components/BreadCrumbs'
import { userCredentials } from '../../../utilities/config';
import { getDataSetting, updateSettingPlatform } from './reducers/settingReducers';
// import {userCredentials} from './../../../utilities/config'

function SettingPage() {

    const dispatch = useDispatch()
    const store_setting = useSelector((state : RootState) => state.setting)

    const [update, setUpdate] = useState(false);

    const [initialSave, setInitialSave] = useState(false);
    const [dataSetting, setDataSetting] = useState({
        discount: "",
        payment_term : "",
        down_payment : ""
    });


    const onChangeValue = (e : any) => {
        setInitialSave(true)
        setDataSetting({...dataSetting, 
            [e.target.name] : e.target.value
        })
    }

    const onClickSave = (e : any) => {
        e.preventDefault()
        let send_data = {
            body : {
                vendor_id : userCredentials.vendor_id,
                setting : {
                    discount: dataSetting.discount,
                    payment_term : {
                        name : `${dataSetting.payment_term} Days`,
                        value : dataSetting.payment_term
                    },
                    down_payment : dataSetting.down_payment
                }
            },
            update : update
        }
        dispatch(updateSettingPlatform(send_data))
    }
    // console.log(userCredentials, 'userrr')

    useEffect(() => {
        dispatch(getDataSetting())
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        if(!store_setting.loading) {
            if(store_setting.data !== null) {
                setUpdate(true)
                setDataSetting({...dataSetting, 
                    discount: store_setting.data.setting[0].discount,
                    payment_term : store_setting.data.setting[0].payment_term.value,
                    down_payment : store_setting.data.setting[0].down_payment
                })
            }
        }
        // eslint-disable-next-line
    }, [store_setting.loading]);

    useEffect(() => {
        if(store_setting.update) {
            swal("Success", "Success Update Setting Platform", 'success')
        }
        // eslint-disable-next-line
    }, [store_setting.update]);

    return (
        <Box sx={{pt:2, pl:3, pr:3}}>
            <BreadCrumbs 
                isPage={false}
                current="Setting Page"
            />
           <Box sx={{pt:2}}>
                <h2>Setting Platform</h2>
           </Box>

           <Stack mt={3}>
           <Paper elevation={3}>
               <Box p={2}>
               <form onSubmit={onClickSave}>
                <Box pl={2}>
                    <Box>
                        <Grid container >
                            <Grid item xl={3} lg={3} xs={6}>
                                <Box pt={2}><h4>Default Discount</h4></Box>
                            </Grid>
                            <Grid item xl={4} lg={4} xs={6}>
                                <TextField
                                    margin="dense"
                                    fullWidth
                                    size="small"
                                    label='Type Discount in %'
                                    type="number"
                                    onChange={onChangeValue}
                                    value={dataSetting.discount}
                                    name="discount"
                                    required
                                />
                                {/* <Box pt={2}><h4>10%</h4></Box> */}
                            </Grid>
                        </Grid>
                        <Grid container >
                            <Grid item xl={3} lg={3} xs={6}>
                                <Box pt={2}><h4>Default Payment Terms</h4></Box>
                            </Grid>
                            <Grid item xl={4} lg={4} xs={6}>
                                <TextField
                                    margin="dense"
                                    fullWidth
                                    size="small"
                                    label='Type Payment Term in days'
                                    type="number"
                                    onChange={onChangeValue}
                                    value={dataSetting.payment_term}
                                    name="payment_term"
                                    required
                                />
                                {/* <Box pt={2}><h4>-</h4></Box> */}
                            </Grid>
                        </Grid>
                        <Grid container >
                            <Grid item xl={3} lg={3} xs={6}>
                                <Box pt={2}><h4>Default Down Payment</h4></Box>
                            </Grid>
                            <Grid item xl={4} lg={4} xs={6}>
                                <TextField
                                    margin="dense"
                                    fullWidth
                                    size="small"
                                    label='Type Down Payment in %'
                                    type="number"
                                    onChange={onChangeValue}
                                    value={dataSetting.down_payment}
                                    name="down_payment"
                                    required
                                />
                            </Grid>
                        </Grid>
                    </Box>
                    <Box mt={2}>
                        <Button 
                            variant="contained"
                            disabled={initialSave ? false : true}
                            type="submit"
                        >
                            { store_setting.loading_update ? "Loading.." : "Save Change" }
                        </Button>
                    </Box> 
                </Box>
                </form>
               </Box>
           </Paper>
           </Stack>
        </Box>
    )
}

export default SettingPage
