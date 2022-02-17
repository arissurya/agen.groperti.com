import { 
    Stack, 
    Paper, 
    Box, 
    Grid,
    Skeleton,
    Typography,
} from '@mui/material';

const SkeletonDetailProducts = () => {

    return (
        <Box>
            <Stack mt={4} mb={8}>
                <Stack mb={2}>
                    <Paper elevation={2}>
                        <Stack p={4}>
                            <Grid container spacing={4}>
                                <Grid item xl={3} lg={4} xs={12}>
                                    <Typography variant="body1" fontWeight="500"><Skeleton variant="text" height={50} /></Typography>
                                </Grid>
                                <Grid item xl={9} lg={8} xs={12}>
                                    <Box>
                                        <Skeleton variant="rectangular" height={118} />
                                    </Box> 
                                </Grid>
                            </Grid>
                        </Stack>
                    </Paper> 
                </Stack>
                <Stack mb={2} flexDirection="column" alignContent="center" justifyContent="center" >
                    <Paper elevation={2}>
                        <Stack p={4}>
                            <Box pb={2}><Typography variant="h6" fontWeight="600"><Skeleton variant="text" height={50} /></Typography></Box>
                            <Grid container columnSpacing={3} rowSpacing={2}>
                                <Grid item xl={3} lg={4} xs={12}>
                                    <Typography variant="body1" fontWeight="500"><Skeleton variant="text" /></Typography>
                                </Grid>
                                <Grid item xl={9} lg={8} xs={12}>
                                    <Skeleton variant="text" />
                                </Grid>
                                
                                <Grid item xl={3} lg={4} xs={12}>
                                    <Typography variant="body1" fontWeight="500"><Skeleton variant="text" /></Typography>
                                </Grid> 
                                <Grid item xl={9} lg={8} xs={12}>
                                    <Skeleton variant="text" />
                                </Grid>
                                <Grid item xl={3} lg={4} xs={12}>
                                    <Typography variant="body1" fontWeight="500"><Skeleton variant="text" /></Typography>
                                </Grid>
                                <Grid item xl={9} lg={8} xs={12}>
                                    <Skeleton variant="text" />
                                </Grid>
                                <Grid item xl={3} lg={4} xs={12}>
                                    <Typography variant="body1" fontWeight="500"><Skeleton variant="text" /></Typography>
                                </Grid>
                                <Grid item xl={9} lg={8} xs={12}>
                                    <Skeleton variant="text" />
                                </Grid>
                            </Grid>
                        </Stack>
                    </Paper> 
                </Stack>
                

                {/* <Stack mb={2} flexDirection="column" alignContent="center" justifyContent="center" >
                    <Paper elevation={2}>
                        <Stack p={4}>
                            <Box pb={2}><Typography variant="h6" fontWeight="600">Product Detail</Typography></Box>
                            <Grid container columnSpacing={3} rowSpacing={2}>
                                
                                <Grid item xl={3} lg={4} xs={12}>
                                    <Typography variant="body1" fontWeight="500">Price</Typography>
                                </Grid>
                                <Grid item xl={9} lg={8} xs={12}>
                                    <Box>Rp. {state_product.retail_price.toLocaleString()}</Box>
                                </Grid>
                                <Grid item xl={3} lg={4} xs={12}>
                                    <Typography variant="body1" fontWeight="500">Description</Typography>
                                </Grid>
                                <Grid item xl={9} lg={8} xs={12}>
                                    <Box>{state_product.description}</Box>
                                </Grid>
                                <Grid item xl={3} lg={4} xs={12}>
                                    <Typography variant="body1" fontWeight="500">Stock</Typography>
                                </Grid>
                                <Grid item xl={9} lg={8} xs={12}>
                                    <Box>{state_product.stock}</Box>
                                </Grid>
                                <Grid item xl={3} lg={4} xs={12}>
                                    <Typography variant="body1" fontWeight="500">Discount</Typography>
                                </Grid>
                                <Grid item xl={9} lg={8} xs={12}>
                                    <Box>{state_product.discount * 100}%</Box>
                                </Grid>
                                <Grid item xl={3} lg={4} xs={12}>
                                    <Typography variant="body1" fontWeight="500">Minimum Order</Typography>
                                </Grid>
                                <Grid item xl={9} lg={8} xs={12}>
                                    <Box>{state_product.minimum_order_quantity}</Box>
                                </Grid>
                                <Grid item xl={3} lg={4} xs={12}>
                                    <Typography variant="body1" fontWeight="500">Tax</Typography>
                                </Grid>
                                <Grid item xl={9} lg={8} xs={12}>
                                    <Box>{state_product.pajak_id}</Box>
                                </Grid>
                                <Grid item xl={3} lg={4} xs={12}>
                                    <Typography variant="body1" fontWeight="500">Dimension</Typography>
                                </Grid>
                                <Grid item xl={2} lg={2} xs={12}>
                                    <Box>Width : {state_product.dimension.width}</Box>
                                </Grid>
                                <Grid item xl={2} lg={2} xs={12}>
                                    <Box>Length : {state_product.dimension.length}</Box>
                                </Grid>
                                <Grid item xl={2} lg={2} xs={12}>
                                    <Box>Heigh : {state_product.dimension.height}</Box>
                                </Grid>
                                <Grid item xl={2} lg={2} xs={12}>
                                    <Box>Weight : {state_product.dimension.weight}</Box>
                                </Grid>
                                <Grid item xl={3} lg={4} xs={12}>
                                    <Typography variant="body1" fontWeight="500">Warehouse</Typography>
                                </Grid>
                                <Grid item xl={9} lg={8} xs={12}>
                                    warehouse
                                </Grid>
                                <Grid item xl={3} lg={4} xs={12}>
                                    <Typography variant="body1" fontWeight="500">Storage</Typography>
                                </Grid>
                                <Grid item xl={2} lg={2} xs={12}>
                                    <Box>Rack : {state_product.storage.rack}</Box>
                                </Grid>
                                <Grid item xl={2} lg={2} xs={12}>
                                    <Box>Bin : {state_product.storage.bin}</Box>
                                </Grid>
                                <Grid item xl={2} lg={2} xs={12}>
                                    <Box>Level : {state_product.storage.level}</Box>
                                </Grid>
                                <Grid item xl={2} lg={2} xs={12}/>
                                <Grid item xl={3} lg={4} xs={12}>
                                    <Typography variant="body1" fontWeight="500">Payment Terms</Typography>
                                </Grid>
                                <Grid item xl={2} lg={2} xs={12}>
                                    <Box>{state_product.payment_term.name}</Box>
                                </Grid>
                                
                            </Grid>
                        </Stack>
                    </Paper> 
                </Stack>
                <Stack mb={2} flexDirection="column" alignContent="center" justifyContent="center" >
                    <Paper elevation={2}>
                        <Stack p={4}>
                            <Box pb={2}>
                                <Typography variant="h6" fontWeight="600">Product Variance</Typography>
                            </Box>
                            { state_product.sub_products.length === 0 ? 
                            <Typography variant="body1" fontWeight="400">Product doesn't have variance.</Typography>
                            :
                            <VariantILists
                                variantItems={state_product.sub_products}
                            />
                            }
                        </Stack>
                    </Paper> 
                </Stack> */}
            </Stack>
        </Box>
    )
}

export default SkeletonDetailProducts;
