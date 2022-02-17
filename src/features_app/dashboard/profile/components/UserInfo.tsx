import { Stack, Box, Grid } from '@mui/material'
import React from 'react'

const UserInfo : React.FC<any> = ({ data }) => {

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
                        <Box>Full Name</Box>
                    </Grid>
                    <Grid item xs={6} md={6} lg={10} xl={10}>
                        <Box fontWeight="600">{data.data.user.name}</Box>
                    </Grid>
                    <Grid item xs={6} md={6} lg={2} xl={2}>
                        <Box>Email</Box>
                    </Grid>
                    <Grid item xs={6} md={6} lg={10} xl={10}>
                        <Box fontWeight="600">{data.data.user.email}</Box>
                    </Grid>
                    <Grid item xs={6} md={6} lg={2} xl={2}>
                        <Box>Agency Company</Box>
                    </Grid>
                    <Grid item xs={6} md={6} lg={10} xl={10}>
                        <Box fontWeight="600">{data.data.profile.agency_name}</Box>
                    </Grid>
                    <Grid item xs={6} md={6} lg={2} xl={2}>
                        <Box>Status</Box>
                    </Grid>
                    <Grid item xs={6} md={6} lg={10} xl={10}>
                        <Box fontWeight="600">{data.data.user.status}</Box>
                    </Grid>
                </Grid>
            </Stack>
            <Box pt={2} fontWeight="700" fontSize={22}>Contact</Box>
            <Stack mt={1}>
                <Grid container rowSpacing={1}>
                    <Grid item xs={6} md={6} lg={2} xl={2}>
                        <Box>Phone Number</Box>
                    </Grid>
                    <Grid item xs={6} md={6} lg={10} xl={10}>
                        <Box fontWeight="600">{data.data.profile.phone_number}</Box>
                    </Grid>
                    <Grid item xs={6} md={6} lg={2} xl={2}>
                        <Box>Area</Box>
                    </Grid>
                    <Grid item xs={6} md={6} lg={10} xl={10}>
                        <Box fontWeight="600">{data.data.profile.area.village}, {data.data.profile.area.city}, {data.data.profile.area.province}</Box>
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
                        <Box fontWeight="600">{data.data.profile.social_media.website === "" ? "-" : data.data.profile.social_media.website }</Box>
                    </Grid>
                    <Grid item xs={6} md={6} lg={2} xl={2}>
                        <Box>Instagram</Box>
                    </Grid>
                    <Grid item xs={6} md={6} lg={10} xl={10}>
                        <Box fontWeight="600">{data.data.profile.social_media.instagram === "" ? "-" : data.data.profile.social_media.instagram }</Box>
                    </Grid>
                    <Grid item xs={6} md={6} lg={2} xl={2}>
                        <Box>Facebook</Box>
                    </Grid>
                    <Grid item xs={6} md={6} lg={10} xl={10}>
                        <Box fontWeight="600">{data.data.profile.social_media.facebook === "" ? "-" : data.data.profile.social_media.facebook }</Box>
                    </Grid>
                    <Grid item xs={6} md={6} lg={2} xl={2}>
                        <Box>Twitter</Box>
                    </Grid>
                    <Grid item xs={6} md={6} lg={10} xl={10}>
                        <Box fontWeight="600">{data.data.profile.social_media.twitter === "" ? "-" : data.data.profile.social_media.twitter }</Box>
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

export default UserInfo
