import { useState, useEffect } from 'react';
import { 
    Stack, 
    Paper, 
    Box, 
    Grid,
    Typography,
    TextField,
    Button,
    CircularProgress,
} from '@mui/material';
import BreadCrumbs from '../../../../components/BreadCrumbs';
import Select from 'react-select'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../app/store';
import { postCreateProducts } from '../reducers/productsReducers';
import { getMasterTax } from '../reducers/productsReducers';
import swal from 'sweetalert';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import ImagesItems from './components/ImagesItems'
import AddressFormFull from '../../../../components/AddressFormFull';
import { userCredentials } from '../../../../utilities/config';

let images_items = [
    {
        image : ""
    },
    {
        image : ""
    },
    {
        image : ""
    },
    {
        image : ""
    }
]

const CreateNewProducts = () => {

    const dispatch = useDispatch()
    const store_product = useSelector((state : RootState) => state.products)


    const [imagesItems, setImagesItems] = useState<any>(images_items);

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
        zipcode : "",
        street : ""
    });

    const [selectTypeSell, setSelectTypeSell] = useState("jual");

    const [valueProduct, setValueProduct] = useState<any>({
        image : "",
        description: "",
        price: "",
        discount: "",
        land_area : "",
        building_area : "",
        bedroom : "",
        bathroom : "",
    });

    const type_property = [
        { value : "rumah", label: "rumah" },
        { value : "apartment", label: "apartment" },
        { value : "ruko", label: "ruko" },
    ]

    const [optionsPropertyType, setOptionsPropertyType] = useState<any[]>(type_property);
    const [selectedPropertyType, setSelectedPropertyType] = useState<any>([]);
    const [errorPropertyType, setErrorPropertyType] = useState<boolean>(false);

    const title_property = [
        { value : "minimalis", label: "minimalis" },
        { value : "modern", label: "modern" },
        { value : "mewah", label: "mewah" },
    ]

    const [optionsPropertyTitle, setOptionsPropertyTitle] = useState<any[]>(title_property);
    const [selectedPropertyTitle, setSelectedPropertyTitle] = useState<any>([]);
    const [errorPropertyTitle, setErrorPropertyTitle] = useState<boolean>(false);

    const extra_facility = [
        { value : "teras", label: "teras" },
        { value : "kolam renang", label: "kolam renang" },
        { value : "taman", label: "taman" },
    ]

    const [optionsExtraFacility, setOptionsExtraFacility] = useState<any[]>(extra_facility);
    const [selectedExtraFacility, setSelectedExtraFacility] = useState<any>([]);
    const [errorExtraFacility, setErrorExtraFacility] = useState<boolean>(false);


    const handleChangePropertyTitle = (value: any) : void => {
        setErrorPropertyTitle(false)
        setSelectedPropertyTitle(value)
    }

    const handleChangePropertyType = (value: any) : void => {
        setErrorPropertyType(false)
        setSelectedPropertyType(value)
    }

    const handleChangeExtraFacility = (value: any) : void => {
        setErrorExtraFacility(false)
        setSelectedExtraFacility(value)
    }
 

    const onchangeValue = (e : any) => {
        const { name, value } = e.target
        if(value < 0) {
            swal('Error', 'Value must be greater than 0', 'error')
        } else {
            setValueProduct({...valueProduct, [name] : value })
        }
    }


    const checkError = () => {
        let error = true
        if(selectedPropertyType.length === 0) {
            setErrorPropertyType(true)
            error = true
        } else if (selectedPropertyTitle.length === 0) {
            setErrorPropertyTitle(true)
            error = true
        } else if (selectedExtraFacility.length === 0) {
            setErrorExtraFacility(true)
            error = true
        } else if (imagesItems[0].image === "") {
            swal("Error","Please upload at least one image!",'error')
            error = true
        } else {
            error = false
        }
        return error
    }


    const getExtraFacility = (data: any) => {
        let extra = []
        for(let i of data) {
            extra.push(i.label)
        }
        return extra
    }

    const getImagesArray = (data: any) => {
        let images = []
        for(let i of data) {
            images.push(i.image)
        }
        let filter = images.filter(ele => ele !== "")
        return filter
    }

    const onClickSubmit = (e : any) => {
        e.preventDefault()

        let data_submit = {
            "type": selectedPropertyType.value,
            "master_trait": selectedPropertyTitle.value,
            "sell_type": selectTypeSell,
            "images": getImagesArray(imagesItems),
            "geo_location": {
                "longitude": 100.6,
                "latitude": 90.2323
            },
            "price": {
                "title": "",
                "value": parseInt(valueProduct.price)
            },
            "title": "",
            "agent_id": userCredentials.auth_id,
            "agent_name": userCredentials.name,
            "contact_number": "6281928173",
            "short_description": "",
            "long_description": valueProduct.description,
            "area": {
                "country": "Indonesia",
                "country_id": "+62",
                "province": valueAddress.province,
                "province_id":valueAddress.province_id,
                "city": valueAddress.city,
                "city_id": valueAddress.city_id,
                "district": valueAddress.subdistrict,
                "district_id": valueAddress.subdistrict_id,
                "village": valueAddress.village,
                "village_id": valueAddress.village_id,
                "zip_code": valueAddress.zipcode,
                "street_number": valueAddress.street
            },
            "facilities": {
                "land_area": parseInt(valueProduct.land_area),
                "building_area": parseInt(valueProduct.building_area),
                "bedroom": parseInt(valueProduct.bedroom),
                "bathroom": parseInt(valueProduct.bathroom)
            },
            "extras": getExtraFacility(selectedExtraFacility),
            "status": "DRAFT"
        }
        if(!checkError()) {
            dispatch(postCreateProducts(data_submit))
            // console.log(data_submit, 'data submit')
        } 
    }

    useEffect(() => {
        if(store_product.success_create) {
            setTimeout(() => {
                window.location.href = "/dashboard/products"
            }, 1000);
        }
        // eslint-disable-next-line
    }, [store_product.success_create]);

    // const proceedOptions = (data : any) => {
    //     let data_options = []
    //     for(let element of data) {
    //         data_options.push({ value: element.value * 100, label: element.title, id: element._id })
    //     }
    //     setOptionsTax(data_options)
    // }

    // useEffect(() => {
    //     if(store_product.tax.length !== 0) {
    //         proceedOptions(store_product.tax)
    //     }
    //     // eslint-disable-next-line
    // }, [store_product.tax]);

    // useEffect(() => {
    //     dispatch(getMasterTax())
    //     // eslint-disable-next-line
    // }, []);

    const resetAllField = () => {
        window.location.reload()
    }

    return (
        <Box sx={{pt:2, pl:3, pr:3}}>
            <BreadCrumbs
                isPage={true}
                link="/dashboard/products"
                page="Property"
                current="Create New Property"
            />
            <Stack direction="row" justifyContent="space-between" pt={3} >
                <Box>
                    <h2>Create New Property</h2>
                </Box>
            </Stack>

            <Stack mt={4} mb={8}>
                <form onSubmit={onClickSubmit}>
                <Stack mb={2}>
                    <Paper elevation={2}>
                        <Stack p={4}>
                            <Box pb={2}><Typography variant="h6" fontWeight="600">Upload Images</Typography></Box>
                            <Grid container spacing={4}>
                                <Grid item xl={3} lg={4} xs={12}>
                                    <Typography variant="body1" fontWeight="500">Property Images</Typography>
                                    <Typography variant="body2" fontWeight="300">Format gambar .jpg .jpeg .png dan ukuran minimum 720 x 720 px </Typography>
                                </Grid>
                                <Grid item xl={9} lg={8} xs={12}>
                                    <ImagesItems 
                                        imagesItems={imagesItems}
                                        setImagesItems={setImagesItems}
                                    />
                                </Grid>
                            </Grid>
                        </Stack>
                    </Paper> 
                </Stack>
                <Stack mb={2} flexDirection="column" alignContent="center" justifyContent="center" >
                    <Paper elevation={2}>
                        <Stack p={4}>
                            <Box pb={2}><Typography variant="h6" fontWeight="600">Property Information</Typography></Box>
                            <Grid container columnSpacing={3} rowSpacing={2}>
                                <Grid item xl={3} lg={4} xs={12}>
                                    <Typography variant="body1" fontWeight="500">Property Type</Typography>
                                </Grid>
                                <Grid item xl={9} lg={8} xs={12}>
                                    <Select
                                        placeholder="Select Type"
                                        value={selectedPropertyType}
                                        isSearchable={true}
                                        options={optionsPropertyType && optionsPropertyType}
                                        onChange={handleChangePropertyType}
                                        id="select-style-type"
                                    />
                                    { errorPropertyType ? <div className="error-p"><p>Property Type is required</p></div> : null }
                                </Grid>
                                <Grid item xl={3} lg={4} xs={12}>
                                    <Typography variant="body1" fontWeight="500">Property Title</Typography>
                                </Grid>
                                <Grid item xl={9} lg={8} xs={12}>
                                    <Select
                                        placeholder="Select Title"
                                        value={selectedPropertyTitle}
                                        isSearchable={true}
                                        options={optionsPropertyTitle && optionsPropertyTitle}
                                        onChange={handleChangePropertyTitle}
                                        id="select-style-title"
                                    />
                                    { errorPropertyTitle ? <div className="error-p"><p>Property Title is required</p></div> : null }
                                </Grid>
                                <Grid item xl={3} lg={4} xs={12}>
                                </Grid>
                                <Grid item xl={9} lg={8} xs={12}>
                                    <FormGroup>
                                        <Stack flexDirection="row">
                                            <Box>
                                                <FormControlLabel 
                                                    control={
                                                        <Checkbox 
                                                            checked={selectTypeSell === "jual" ? true : false} 
                                                            onChange={() => {
                                                               setSelectTypeSell("jual")
                                                            }}
                                                        />} 
                                                    label="jual" 
                                                />
                                            </Box>
                                            <Box>
                                                <FormControlLabel 
                                                    control={
                                                        <Checkbox 
                                                            checked={selectTypeSell === "sewa" ? true : false} 
                                                            onChange={() => {
                                                               setSelectTypeSell("sewa")
                                                            }}
                                                        />} 
                                                    label="sewa" 
                                                />
                                            </Box>
                                        </Stack>
                                    </FormGroup>
                                </Grid>
                            </Grid>
                        </Stack>
                    </Paper> 
                </Stack>
                <Stack mb={2} flexDirection="column" alignContent="center" justifyContent="center" >
                    <Paper elevation={2}>
                        <Stack p={4}>
                            <Box pb={2}><Typography variant="h6" fontWeight="600">Property Detail</Typography></Box>
                            <Grid container columnSpacing={3} rowSpacing={2}>
                                <Grid item xl={3} lg={4} xs={12}>
                                    <Typography variant="body1" fontWeight="500">Price</Typography>
                                </Grid>
                                <Grid item xl={9} lg={8} xs={12}>
                                    <TextField 
                                        label="Price"
                                        size="small"
                                        type="number"
                                        name="price"
                                        onChange={(e) => onchangeValue(e)}
                                        value={valueProduct.price}
                                        fullWidth
                                        required
                                    />
                                </Grid>
                                <Grid item xl={3} lg={4} xs={12}>
                                    <Typography variant="body1" fontWeight="500">Description</Typography>
                                </Grid>
                                <Grid item xl={9} lg={8} xs={12}>
                                    <TextField 
                                        label="Description"
                                        size="small"
                                        name="description"
                                        onChange={(e) => onchangeValue(e)}
                                        value={valueProduct.description}
                                        multiline
                                        rows={6}
                                        fullWidth
                                        required
                                    />
                                </Grid>
                                <Grid item xl={3} lg={4} xs={12}>
                                    <Typography variant="body1" fontWeight="500">Facility</Typography>
                                </Grid>
                                <Grid item xl={2} lg={2} xs={12}>
                                    <TextField 
                                        label="Luas Tanah in m2"
                                        size="small"
                                        type="number"
                                        name="land_area"
                                        onChange={(e) => onchangeValue(e)}
                                        value={valueProduct.land_area}
                                        fullWidth
                                        required
                                    />
                                </Grid>
                                <Grid item xl={2} lg={2} xs={12}>
                                    <TextField 
                                        label="Luas Bangunan in m2"
                                        size="small"
                                        type="number"
                                        name="building_area"
                                        onChange={(e) => onchangeValue(e)}
                                        value={valueProduct.building_area}
                                        fullWidth
                                        required
                                    />
                                </Grid>
                                <Grid item xl={2} lg={2} xs={12}>
                                    <TextField 
                                        label="Kamar Tidur"
                                        size="small"
                                        type="number"
                                        name="bedroom"
                                        onChange={(e) => onchangeValue(e)}
                                        value={valueProduct.bedroom}
                                        fullWidth
                                        required
                                    />
                                </Grid>
                                <Grid item xl={2} lg={2} xs={12}>
                                    <TextField 
                                        label="Kamar Mandi"
                                        size="small"
                                        type="number"
                                        name="bathroom"
                                        onChange={(e) => onchangeValue(e)}
                                        value={valueProduct.bathroom}
                                        fullWidth
                                        required
                                    />
                                </Grid>
                                <Grid item xl={3} lg={4} xs={12}>
                                    <Typography variant="body1" fontWeight="500">Extra Facility</Typography>
                                </Grid>
                                <Grid item xl={9} lg={8} xs={12}>
                                    <Select
                                        placeholder="Select Extra Facility"
                                        value={selectedExtraFacility}
                                        isSearchable={true}
                                        isMulti
                                        options={optionsExtraFacility && optionsExtraFacility}
                                        onChange={handleChangeExtraFacility}
                                        id="select-style-type"
                                    />
                                    { errorExtraFacility ? <div className="error-p"><p>Extra Facility is required</p></div> : null }
                                </Grid>
                            </Grid>
                        </Stack>
                    </Paper> 
                </Stack>

                <Stack mb={2} flexDirection="column" alignContent="center" justifyContent="center" >
                    <Paper elevation={2}>
                        <Stack p={4}>
                            <Box pb={2}><Typography variant="h6" fontWeight="600">Property Address</Typography></Box>
                            <AddressFormFull 
                                valueAddres={valueAddress}
                                setValueAddress={setValueAddress}
                            />
                        </Stack>
                    </Paper> 
                </Stack>
                <Stack >
                    <Stack pt={4} flexDirection="row" justifyContent="space-between">
                        <Button 
                            variant='outlined' color="error" 
                            onClick={resetAllField}
                        >
                          Reset Field
                        </Button>
                        <Button variant='contained' color="primary" type="submit" disabled={store_product.loading_create ? true : false}>
                           { store_product.loading_create ? <span>Loading.. <CircularProgress color='inherit' size={20}/></span> : "Submit Property" } 
                        </Button>
                    </Stack>
                </Stack>
                </form>
            </Stack>
        </Box>
    )
}

export default CreateNewProducts;
