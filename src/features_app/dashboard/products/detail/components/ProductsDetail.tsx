import { 
    Stack, 
    Paper, 
    Box, 
    Grid,
    Typography,
} from '@mui/material';

const ProductDetail : React.FC<any> = ({ data }) => {

    return (
        <Box>
            <Stack mt={4} mb={8}>
                <Stack mb={2}>
                    <Paper elevation={2}>
                        <Stack p={4}>
                            <Box pb={2}><Typography variant="h6" fontWeight="600">Property Images</Typography></Box>
                            <Grid container spacing={4}>
                                <Grid item xl={3} lg={4} xs={12}>
                                    <Typography variant="body1" fontWeight="500">Images</Typography>
                                </Grid>
                                <Grid item xl={9} lg={8} xs={12}>
                                   <Stack flexDirection="row">
                                   { data.images.map((data :any,i :any) => (
                                        <Box mr={1} key={i}>
                                            <Box 
                                                component="img"
                                                src={data}
                                                sx={{
                                                    width: '100px',
                                                    borderRadius: '4px',
                                                    border: '1px solid #ccc',
                                                    padding: '2px'
                                                }}
                                            />
                                        </Box> 
                                   )) }
                                   </Stack>
                                    
                                </Grid>
                            </Grid>
                        </Stack>
                    </Paper> 
                </Stack>
                <Stack mb={2} flexDirection="column" alignContent="center" justifyContent="center" >
                    <Paper elevation={2}>
                        <Stack p={4}>
                            <Box pb={2}><Typography variant="h6" fontWeight="600">Product Information</Typography></Box>
                            <Grid container columnSpacing={3} rowSpacing={2}>
                                <Grid item xl={3} lg={4} xs={12}>
                                    <Typography variant="body1" fontWeight="500">Title</Typography>
                                </Grid>
                                <Grid item xl={9} lg={8} xs={12}>
                                    <Box>{data.title}</Box>
                                </Grid>
                                
                                <Grid item xl={3} lg={4} xs={12}>
                                    <Typography variant="body1" fontWeight="500">Type Property</Typography>
                                </Grid> 
                                <Grid item xl={9} lg={8} xs={12}>
                                    <Box>{data.type}</Box>
                                </Grid>
                                <Grid item xl={3} lg={4} xs={12}>
                                    <Typography variant="body1" fontWeight="500">Type Sell</Typography>
                                </Grid>
                                <Grid item xl={9} lg={8} xs={12}>
                                    <Box>{data.sell_type}</Box>
                                </Grid>
                            </Grid>
                        </Stack>
                    </Paper> 
                </Stack>
                

                <Stack mb={2} flexDirection="column" alignContent="center" justifyContent="center" >
                    <Paper elevation={2}>
                        <Stack p={4}>
                            <Box pb={2}><Typography variant="h6" fontWeight="600">Product Detail</Typography></Box>
                            <Grid container columnSpacing={3} rowSpacing={2}>
                                
                                <Grid item xl={3} lg={4} xs={12}>
                                    <Typography variant="body1" fontWeight="500">Price</Typography>
                                </Grid>
                                <Grid item xl={9} lg={8} xs={12}>
                                    <Box>Rp. {data.price.title}</Box>
                                </Grid>
                                <Grid item xl={3} lg={4} xs={12}>
                                    <Typography variant="body1" fontWeight="500">Description</Typography>
                                </Grid>
                                <Grid item xl={9} lg={8} xs={12}>
                                    <Box>{data.long_description}</Box>
                                </Grid>
                                <Grid item xl={3} lg={4} xs={12}>
                                    <Typography variant="body1" fontWeight="500">Facility</Typography>
                                </Grid>
                                <Grid item xl={2} lg={2} xs={12}>
                                    <Box>Bathroom : {data.facilities.bathroom}</Box>
                                </Grid>
                                <Grid item xl={2} lg={2} xs={12}>
                                    <Box>Bedroom : {data.facilities.bedroom}</Box>
                                </Grid>
                                <Grid item xl={2} lg={2} xs={12}>
                                    <Box>Land Area : {data.facilities.land_area}m2</Box>
                                </Grid>
                                <Grid item xl={2} lg={2} xs={12}>
                                    <Box>Building Area : {data.facilities.building_area}m2</Box>
                                </Grid>
                                <Grid item xl={3} lg={4} xs={12}>
                                    <Typography variant="body1" fontWeight="500">Extra Facilities</Typography>
                                </Grid>
                                <Grid item xl={9} lg={8} xs={12}>
                                    { data.extras.map((data:any, i:any) => (
                                        <Box key={i}>{data}</Box>
                                    )) }
                                </Grid>
                            </Grid>
                        </Stack>
                    </Paper> 
                </Stack>
            </Stack> 
        </Box>
    )
}

export default ProductDetail;
