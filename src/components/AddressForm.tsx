import React, { useEffect, useState } from 'react'
import { Grid, Box, Skeleton } from '@mui/material'
import Select from 'react-select'
import axios from 'axios'
import swal from 'sweetalert';

const AddressForm : React.FC<any> = ({
    setValueAddress,
    valueAddres
}) => {

    // state for Province
    const [optionsProvince, setOptionsProvince] = useState<any>([]);
    const [loadingProvince, setLoadingProvince] = useState(false);
    // state for City
    const [optionsCity, setOptionsCity] = useState<any>([]);
    const [loadingCity, setLoadingCity] = useState(false);

    // state for Village
    const [optionsVillage, setOptionsVillage] = useState<any>([]);
    const [loadingVillage, setLoadingVillage] = useState(false);

    // state for SubDistrict
    const [optionsSubDistrict, setOptionsSubDistrict] = useState<any>([]);
    const [loadingSubDistrict, setLoadingSubDistrict] = useState(false);


    const clearAll = () => {
        setOptionsSubDistrict([])
        setOptionsVillage([])
    }

    const clearAll2 = () => {
        setOptionsVillage([])
    }


    const handleChangeProvince = (value: any) : void => {
        getDataCity(value.value)
        setValueAddress({...valueAddres, 
            province : value.label,
            province_id : value.value,
            city : "",
            city_id : "",
            subdistrict : "",
            subdistrict_id : "",
            village : "",
            village_id : "",
            error_province : false,
            error_city : false,
            error_subdistrict : false,
            error_village : false,
        })
        clearAll()
    }

    const handleChangeCity = (value: any) : void => {
        getDataSubDistrict(value.value)
        setValueAddress({...valueAddres, 
            city : value.label,
            city_id : value.value,
            subdistrict : "",
            subdistrict_id : "",
            village : "",
            village_id : "",
            error_city : false,
            error_subdistrict : false,
            error_village : false,
        })
        clearAll2()
    }

    const handleChangeSubDistrict = (value: any) : void => {
        getDataVillage(value.value)
        setValueAddress({...valueAddres, 
            subdistrict : value.label,
            subdistrict_id : value.value,
            village : "",
            village_id : "",
            error_subdistrict : false,
            error_village : false,
        })
    }

    const handleChangeVillage = (value: any) : void => {
        setValueAddress({...valueAddres, 
            village : value.label,
            village_id : value.value,
            error_village : false,
        })
    }


    const proceedProvince = (params : any) => {
        let province = []
        for(let prov of params) {
            province.push({
                value : prov.id,
                label : prov.nama,
            })
        }
        let sortBy = province.sort((a:any, b:any) => {
            return a.label - b.label;
        });
        setOptionsProvince(sortBy)
        setLoadingProvince(false)
    }

    const proceedCity = (params : any) => {
        let city = []
        for(let prov of params) {
            city.push({
                value : prov.id,
                label : prov.nama,
            })
        }
        setOptionsCity(city)
        setLoadingCity(false)
    }

    const proceedSubDistrict = (params : any) => {
        let subdistrict = []
        for(let prov of params) {
            subdistrict.push({
                value : prov.id,
                label : prov.nama,
            })
        }
        setOptionsSubDistrict(subdistrict)
        setLoadingSubDistrict(false)
    }

    const proceedVillage = (params : any) => {
        let village = []
        for(let prov of params) {
            village.push({
                value : prov.id,
                label : prov.nama,
            })
        }
        setOptionsVillage(village)
        setLoadingVillage(false)
    }

    const getDataProvince = async () => {
        setLoadingProvince(true)
        try {
            const response : any = await axios.get(`${process.env.REACT_APP_API_DEV}/provinces`)
            if(response.data) {
                proceedProvince(response.data.data)
            } else {
                swal('Error', `${response.error}`, 'error')
                setLoadingProvince(false)
            } 
            
        } catch (error) {
            swal('Error', `${error}`, 'error')
            setLoadingProvince(false)
        }
    }

    const getDataCity = async (id : number) => {
        setLoadingCity(true)
        try {
            const response : any = await axios.get(`${process.env.REACT_APP_API_DEV}/cities?id_provinsi=${id}`)
            if(response.data) {
                proceedCity(response.data.data)
            } else {
                swal('Error', `${response.error}`, 'error')
                setLoadingCity(false)
            }
            
        } catch (error) {
            swal('Error', `${error}`, 'error')
            setLoadingCity(false)
        }
    }

    const getDataSubDistrict = async (id : number) => {
        setLoadingSubDistrict(true)
        try {
            const response : any = await axios.get(`${process.env.REACT_APP_API_DEV}/districts?id_kota=${id}`)
            if(response.data) {
                proceedSubDistrict(response.data.data)
            } else {
                swal('Error', `${response.error}`, 'error')
                setLoadingSubDistrict(false)
            }
            
        } catch (error) {
            swal('Error', `${error}`, 'error')
            setLoadingSubDistrict(false)
            
        }
    }

    const getDataVillage = async (id : number) => {
        setLoadingVillage(true)
        try {
            const response : any = await axios.get(`${process.env.REACT_APP_API_DEV}/villages?id_kecamatan=${id}`)
            if(response.data) {
                proceedVillage(response.data.data)
            } else {
                swal('Error', `${response.error}`, 'error')
                setLoadingVillage(false)
            }
            
        } catch (error) {
            swal('Error', `${error}`, 'error')
            setLoadingVillage(false)
        }
    }
    
    useEffect(() => {
        getDataProvince()
        // eslint-disable-next-line
    }, []);

    return (
        <div>
            <Grid container>
                <Grid item xl={3} lg={3} xs={12}>
                    <Box pt={1}><h4>Province</h4></Box>
                </Grid>
                <Grid item xl={9} lg={9} xs={12}>
                    { loadingProvince ? 
                    <Skeleton height={60} />
                    :
                    <Box pt={1} pb={1}>
                    <Select
                        placeholder="Select Province"
                        value={{value : valueAddres.province_id, label: valueAddres.province}}
                        isSearchable={true}
                        options={optionsProvince && optionsProvince}
                        onChange={handleChangeProvince}
                        id="select-style-provincee"
                    /> 
                    </Box> }
                    { valueAddres.error_province ? <div className="error-p"><p>Province is required</p></div> : null }
                </Grid>
                <Grid item xl={3} lg={3} xs={12}>
                    <Box pt={1}><h4>City</h4></Box>
                </Grid>
                <Grid item xl={9} lg={9} xs={12}>
                    { loadingCity ? 
                    <Skeleton height={60} />
                    :
                    <Box pt={1} pb={1}>
                    <Select
                        placeholder="Select City"
                        value={{value : valueAddres.city_id, label: valueAddres.city}}
                        isSearchable={true}
                        options={optionsCity && optionsCity}
                        onChange={handleChangeCity}
                        id="select-style-cityy"
                    /> 
                    </Box> }
                    { valueAddres.error_city ? <div className="error-p"><p>City is required</p></div> : null }
                </Grid>

                <Grid item xl={3} lg={3} xs={12}>
                    <Box pt={1}><h4>District</h4></Box>
                </Grid>
                <Grid item xl={9} lg={9} xs={12}>
                    { loadingSubDistrict ? 
                    <Skeleton height={60} />
                    :
                    <Box pt={1} pb={1}>
                    <Select
                        placeholder="Select Sub District"
                        value={{value : valueAddres.subdistrict_id, label: valueAddres.subdistrict}}
                        isSearchable={true}
                        options={optionsSubDistrict && optionsSubDistrict}
                        onChange={handleChangeSubDistrict}
                        id="select-style-subdistrict"
                    /> 
                    </Box> }
                    { valueAddres.error_subdistrict ? <div className="error-p"><p>District is required</p></div> : null }
                </Grid>

                <Grid item xl={3} lg={3} xs={12}>
                    <Box pt={1}><h4>Village</h4></Box>
                </Grid>
                <Grid item xl={9} lg={9} xs={12}>
                    { loadingVillage ? 
                    <Skeleton height={60} />
                    :
                    <Box pt={1} pb={1}>
                    <Select
                        placeholder="Select Village"
                        value={{value : valueAddres.village_id, label: valueAddres.village}}
                        isSearchable={true}
                        options={optionsVillage && optionsVillage}
                        onChange={handleChangeVillage}
                        id="select-style-village"
                    /> 
                    </Box> }
                    { valueAddres.error_village ? <div className="error-p"><p>Village is required</p></div> : null }
                </Grid>

                
            </Grid>
        </div>
    )
}

export default AddressForm
