import React, { useState, useEffect } from 'react'
import {
    Button,
    Grid,
    Box,
    TextField,
    Backdrop,
    CircularProgress 
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux'
import { changeStep } from './stepFormSlice';
import { userCredentials } from '../../../../utilities/config';
import { RootState } from '../../../../app/store';
import crypto from 'crypto-js'; 
import { updateAgentProfile } from '../reducers/completeRegistereducers';

const SurveyForm : React.FC<any> = () => {


    const dispatch = useDispatch()
    const completing_register = useSelector((state : RootState) => state.completing_register)

    const [updateCredential, setUpdateCredential] = useState<any>(userCredentials);
    const [updated, setUpdated] = useState(false);


    const [valueAddress, setValueAddress] = useState({
        province : "",
        province_id : "",
        error_province : false,
        city : "",
        city_id : "",
        error_city : false,
        subdistrict : "",
        subdistrict_id : "",
        error_subdistrict : false,
        village : "",
        village_id : "",
        error_village : false,
    });

    const [valueCompany, setValueCompany] = useState<any>({
        agent_company: "",
        phone_number: "",
        website: "",
        instagram: "",
        facebook: "",
        twitter: ""
    });

    const [dataSurvey, setDataSurvey] = useState({
        time_become_agent : "",
        average_property_sold_month: ""
    });


    const onSubmit = (e: any) => {
        e.preventDefault()
        let body_send  = {
            phone_number : valueCompany.phone_number,
            agency_name : valueCompany.agent_company,
            social_media : {
                website : valueCompany.website,
                instagram : valueCompany.instagram,
                facebook : valueCompany.facebook,
                twitter : valueCompany.twitter,
            },
            area : {
                province: valueAddress.province,
                province_id: valueAddress.province_id,
                city: valueAddress.city,
                city_id: valueAddress.city_id,
                subdistrict: valueAddress.subdistrict,
                subdistrict_id: valueAddress.subdistrict_id,
                village: valueAddress.village,
                village_id: valueAddress.village_id,
            },
            surveys : {
                time_become_agent : dataSurvey.time_become_agent,
                average_property_sold_month : dataSurvey.average_property_sold_month,
            }
        }
        dispatch(updateAgentProfile(body_send))
    }

    useEffect(() => {
        const local_data = localStorage.getItem('company_detail')
        const checkLocalData = () => {
            const data : any = local_data === null ? null : JSON.parse(local_data)
            if(data !== null) {
                setValueAddress({...valueAddress, 
                    province : data.province,
                    province_id : data.province_id,
                    city : data.city,
                    city_id : data.city_id,
                    subdistrict : data.subdistrict,
                    subdistrict_id : data.subdistrict_id,
                    village : data.village,
                    village_id : data.village_id,
                })
                setValueCompany({...valueCompany, 
                    full_name : data.full_name,
                    agent_company: data.agent_company,
                    phone_number: data.phone_number,
                    website: data.website,
                    instagram: data.instagram,
                    facebook: data.facebook,
                    twitter: data.twitter
                })
            }
        }
        checkLocalData()
        // eslint-disable-next-line
    }, []);


    useEffect(() => {
        if(completing_register.profile) {
            setUpdateCredential({...updateCredential, 
                first_time : false, 
            })
            setUpdated(true)
        }
        // eslint-disable-next-line
    }, [completing_register.profile])

    useEffect(() => {
        if(updated) {
            const saveToLocalStorage = crypto.AES.encrypt(JSON.stringify(updateCredential), `${process.env.REACT_APP_CRYPTO_SECRET}`).toString();
            localStorage.setItem('_?GROcredentials', saveToLocalStorage)
            setTimeout(() => {
                window.location.href = "/dashboard"
            }, 1000);
        }
        // eslint-disable-next-line
    }, [updated]);


    return (
        <div>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={completing_register.loading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
            <Box mt={2} pl={2} pb={2}>
                <h2>Survey </h2>
            </Box>
           <div className="section-form-company-detail">
                <Box pl={2}>
                    <form onSubmit={onSubmit}>
                        <Grid container spacing={4}>
                            <Grid item xl={12} lg={12} xs={12}>
                                <Grid container >
                                    <Grid item xl={5} lg={6} xs={12}>
                                        <Box pt={2}><h3>How long have you become an agent?</h3></Box>
                                    </Grid>
                                    <Grid item xl={7} lg={6} xs={12}>
                                        <TextField
                                            margin="dense"
                                            fullWidth
                                            id="fullname"
                                            label="Month"
                                            name="fullname"
                                            size="small"
                                            onChange={(e) => setDataSurvey({...dataSurvey, time_become_agent : e.target.value})}
                                        />
                                    </Grid>
                                    <Grid item xl={5} lg={6} xs={12}>
                                        <Box pt={2}><h3>How many property have you sold in a month?</h3></Box>
                                    </Grid>
                                    <Grid item xl={7} lg={6} xs={12}>
                                        <TextField
                                            margin="dense"
                                            fullWidth
                                            id="fullname"
                                            label="Sold"
                                            name="fullname"
                                            onChange={(e) => setDataSurvey({...dataSurvey, average_property_sold_month : e.target.value})}
                                            size="small"
                                        />
                                    </Grid>
                                   
                                </Grid>
                            </Grid>
                        </Grid>
                        
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 4, pb: 2 }}>
                            <Button
                                variant="contained"
                                color="inherit"
                                onClick={() =>  { 
                                    dispatch(changeStep(0))
                                }}
                                sx={{ mr: 1 }}
                            >
                                Back
                            </Button>
                            <Box sx={{ flex: '1 1 auto' }} />
                            <Button 
                                variant="contained"
                                type="submit"
                                color="secondary"
                            >
                                Skip & Submit
                            </Button>
                            <Box mr={1}/>
                            <Button 
                                variant="contained"
                                type="submit"
                            >
                                Submit
                            </Button>
                        </Box>
                        
                        
                    </form>
                </Box>
           </div>
        </div>
    )
}

export default SurveyForm
