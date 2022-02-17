import React, { useState, useEffect } from 'react'
import {
    Button,
    Grid,
    Box,
    TextField,
    Paper,
} from '@mui/material';
import { useDispatch } from 'react-redux'
import { changeStep } from './stepFormSlice'
import { userCredentials } from '../../../../utilities/config';
import AddressForm from '../../../../components/AddressForm';
import PhoneInput from 'react-phone-number-input'

const UserFormProfile : React.FC<any> = () => {

    const dispatch = useDispatch()

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

    const onChangeValue = (e : any) => {
        const { name, value } = e.target 
        setValueCompany({...valueCompany, [name] : value })
    }


    const handleSubmit = (e: any) => {
        e.preventDefault()
        let body_send  = {
            phone_number : valueCompany.phone_number,
            agent_company : valueCompany.agent_company,
            website : valueCompany.website,
            instagram : valueCompany.instagram,
            facebook : valueCompany.facebook,
            twitter : valueCompany.twitter,
            province: valueAddress.province,
            province_id: valueAddress.province_id,
            city: valueAddress.city,
            city_id: valueAddress.city_id,
            subdistrict: valueAddress.subdistrict,
            subdistrict_id: valueAddress.subdistrict_id,
            village: valueAddress.village,
            village_id: valueAddress.village_id,
        }
        localStorage.setItem('company_detail', JSON.stringify(body_send))
        dispatch(changeStep(1))
    }

    

    useEffect(() => {
        setValueCompany({...valueCompany, full_name : userCredentials.name })
        // eslint-disable-next-line
    }, [])

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

    return (
        <div>
            <div className="section-form-company-detail">
                <Box>
                    <form onSubmit={handleSubmit}>
                        <Box mt={2} pb={1}>
                            <h3>Basic Information</h3>
                        </Box>
                        <Paper sx={{ border: '1px solid #ccc' }}>
                            <Box p={2}>
                                <Grid container >
                                    <Grid item xl={3} lg={4} xs={12}>
                                        <Box pt={1}><h4>Agent (Company)</h4></Box>
                                    </Grid>
                                    <Grid item xl={9} lg={8} xs={12}>
                                        <Box>
                                            <TextField
                                                margin="dense"
                                                fullWidth
                                                label="Agent (Company)"
                                                type="text"
                                                value={valueCompany.agent_company}
                                                onChange={onChangeValue}
                                                name="agent_company"
                                                size="small"
                                                required
                                            />
                                        </Box>
                                    </Grid>
                                    <Grid item xl={3} lg={4} xs={12}>
                                        <Box pt={1}><h4>Phone Number</h4></Box>
                                    </Grid>
                                    <Grid item xl={9} lg={8} xs={12}>
                                        <Box>
                                            <PhoneInput
                                                placeholder="Enter phone number"
                                                value={valueCompany.phone_number}
                                                onChange={(e) => setValueCompany({...valueCompany, phone_number : e})}
                                                defaultCountry="ID"
                                            />
                                        </Box>
                                    </Grid>
                                </Grid>
                                <AddressForm 
                                    setValueAddress={setValueAddress}
                                    valueAddres={valueAddress}
                                />
                            </Box>
                        </Paper>

                        <Box mt={4} pb={1}>
                            <h3>Social Media (Optional)</h3> 
                        </Box>
                        <Paper sx={{ border: '1px solid #ccc' }}>
                            <Box p={2}>
                                <Grid container>
                                    
                                    <Grid item xl={3} lg={4} xs={12}>
                                        <Box pt={2}><h4>Website</h4></Box>
                                    </Grid>
                                    <Grid item xl={9} lg={8} xs={12}>
                                        <TextField
                                            onChange={onChangeValue}
                                            value={valueCompany.website}
                                            margin="dense"
                                            fullWidth
                                            name="website"
                                            label="Website"
                                            type="website"
                                            id="website"
                                            size="small"
                                        />
                                    </Grid>
                                    <Grid item xl={3} lg={4} xs={12}>
                                        <Box pt={2}><h4>Instagram</h4></Box>
                                    </Grid>
                                    <Grid item xl={9} lg={8} xs={12}>
                                        <TextField
                                            onChange={onChangeValue}
                                            value={valueCompany.instagram}
                                            margin="dense"
                                            fullWidth
                                            name="instagram"
                                            label="Instagram"
                                            type="instagram"
                                            id="instagram"
                                            size="small"
                                        />
                                    </Grid>
                                    <Grid item xl={3} lg={4} xs={12}>
                                        <Box pt={2}><h4>Facebook</h4></Box>
                                    </Grid>
                                    <Grid item xl={9} lg={8} xs={12}>
                                        <TextField
                                            onChange={onChangeValue}
                                            value={valueCompany.facebook}
                                            margin="dense"
                                            fullWidth
                                            name="facebook"
                                            label="Facebook"
                                            type="facebook"
                                            id="facebook"
                                            size="small"
                                        />
                                    </Grid>
                                    <Grid item xl={3} lg={4} xs={12}>
                                        <Box pt={2}><h4>Twitter</h4></Box>
                                    </Grid>
                                    <Grid item xl={9} lg={8} xs={12}>
                                        <TextField
                                            onChange={onChangeValue}
                                            value={valueCompany.twitter}
                                            margin="dense"
                                            fullWidth
                                            name="twitter"
                                            label="Twitter"
                                            type="twitter"
                                            id="twitter"
                                            size="small"
                                        />
                                    </Grid>
                                </Grid>
                            </Box>
                        </Paper>
                        
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 4, pb: 2 }}>
                            <Box sx={{ flex: '1 1 auto' }} />
                            <Button 
                                variant="contained"
                                type="submit"
                            >
                                Next 
                            </Button>
                        </Box>
                        
                        
                    </form>
                </Box>
            </div>
                
        </div>
    )
}

export default UserFormProfile

