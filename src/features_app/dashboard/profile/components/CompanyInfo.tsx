import { Stack, Box, Grid } from '@mui/material'
import React from 'react'

const CompanyInfo : React.FC<any> = ({ data }) => {

    console.log(data, 'data ptofile')

    return (
        <div>
        { data.loading ? "Loading.." :
        <Stack mt={1}>
            { data.data.length === 0 ? "Data not found"  :
            <>
            <Box fontWeight="700" fontSize={22}>Detail Informasi</Box>
            <Stack mt={1}>
                <Grid container rowSpacing={1}>
                    <Grid item xs={6} md={6} lg={2} xl={2}>
                        <Box>Company Name</Box>
                    </Grid>
                    <Grid item xs={6} md={6} lg={10} xl={10}>
                        <Box fontWeight="600">{data.data.legal_name}</Box>
                    </Grid>
                    <Grid item xs={6} md={6} lg={2} xl={2}>
                        <Box>Alias Name</Box>
                    </Grid>
                    <Grid item xs={6} md={6} lg={10} xl={10}>
                        <Box fontWeight="600">{data.data.name}</Box>
                    </Grid>
                    <Grid item xs={6} md={6} lg={2} xl={2}>
                        <Box>Company Code</Box>
                    </Grid>
                    <Grid item xs={6} md={6} lg={10} xl={10}>
                        <Box fontWeight="600">{data.data.company_code}</Box>
                    </Grid>
                    <Grid item xs={6} md={6} lg={2} xl={2}>
                        <Box>Category</Box>
                    </Grid>
                    <Grid item xs={6} md={6} lg={10} xl={10}>
                        <Box fontWeight="600">{data.data.category}</Box>
                    </Grid>
                    <Grid item xs={6} md={6} lg={2} xl={2}>
                        <Box>Type</Box>
                    </Grid>
                    <Grid item xs={6} md={6} lg={10} xl={10}>
                        <Box fontWeight="600">{data.data.type}</Box>
                    </Grid>
                    <Grid item xs={6} md={6} lg={2} xl={2}>
                        <Box>Status</Box>
                    </Grid>
                    <Grid item xs={6} md={6} lg={10} xl={10}>
                        <Box fontWeight="600">{data.data.verification_status}</Box>
                    </Grid>
                </Grid>
            </Stack>
            <Box pt={2} fontWeight="700" fontSize={22}>Contact</Box>
            <Stack mt={1}>
                <Grid container rowSpacing={1}>
                    <Grid item xs={6} md={6} lg={2} xl={2}>
                        <Box>Phone</Box>
                    </Grid>
                    <Grid item xs={6} md={6} lg={10} xl={10}>
                        <Box fontWeight="600">{data.data.phone}</Box>
                    </Grid>
                    <Grid item xs={6} md={6} lg={2} xl={2}>
                        <Box>Whatsapp</Box>
                    </Grid>
                    <Grid item xs={6} md={6} lg={10} xl={10}>
                        <Box fontWeight="600">{data.data.whatsapp}</Box>
                    </Grid>
                </Grid>
            </Stack>
            <Box pt={2} fontWeight="700" fontSize={22}>Social Media</Box>
            <Stack mt={1}>
                <Grid container rowSpacing={1}>
                    <Grid item xs={6} md={6} lg={2} xl={2}>
                        <Box>Website</Box>
                    </Grid>
                    <Grid item xs={6} md={6} lg={10} xl={10}>
                        <Box fontWeight="600">{data.data.website === "" ? "-" : data.data.website }</Box>
                    </Grid>
                    <Grid item xs={6} md={6} lg={2} xl={2}>
                        <Box>Instagram</Box>
                    </Grid>
                    <Grid item xs={6} md={6} lg={10} xl={10}>
                        <Box fontWeight="600">{data.data.instagram === "" ? "-" : data.data.instagram }</Box>
                    </Grid>
                    <Grid item xs={6} md={6} lg={2} xl={2}>
                        <Box>Facebook</Box>
                    </Grid>
                    <Grid item xs={6} md={6} lg={10} xl={10}>
                        <Box fontWeight="600">{data.data.facebook === "" ? "-" : data.data.facebook }</Box>
                    </Grid>
                    <Grid item xs={6} md={6} lg={2} xl={2}>
                        <Box>Twitter</Box>
                    </Grid>
                    <Grid item xs={6} md={6} lg={10} xl={10}>
                        <Box fontWeight="600">{data.data.twitter === "" ? "-" : data.data.twitter }</Box>
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

export default CompanyInfo
