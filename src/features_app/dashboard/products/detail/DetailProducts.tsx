import { 
    Stack, 
    Paper, 
    Box, 
} from '@mui/material';
import BreadCrumbs from '../../../../components/BreadCrumbs';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductBySlug } from '../reducers/productsReducers';
import { RootState } from '../../../../app/store';
import SkeletonDetailProducts from './components/SkeletonProduct';
import ProductDetail from './components/ProductsDetail';

const DetailProducts = () => {
    const location : any = useLocation()
    const dispatch = useDispatch()

    const state_products = useSelector((state : RootState) => state.products)
    
    useEffect(() => {
        dispatch(getProductBySlug(location.state.slug))
        // eslint-disable-next-line
    }, []);

    return (
        <Box sx={{pt:2, pl:3, pr:3}}>
            <BreadCrumbs
                isPage={true}
                link="/dashboard/products"
                page="Property"
                current="Detail Property"
            />
            <Stack direction="row" justifyContent="space-between" pt={3} >
                <Box>
                    <h2>Detail Property</h2>
                </Box>
            </Stack>

            { state_products.loading_product_detail ? 
            <SkeletonDetailProducts/>
            : 
            <Stack>
                { state_products.product_detail_exist ?
                <Stack>
                    <ProductDetail data={state_products.product_detail}/>
                </Stack>
                :
                <Stack mt={2}>
                    <Paper elevation={2}>
                    <Stack direction="row" justifyContent="space-between" p={3} >
                        <Box>
                            <h4>Sorry, Property is not found. Please make sure the Property slug is correct.</h4>
                        </Box>
                    </Stack>
                    </Paper>
                </Stack>
                }
            </Stack>
            }
        </Box>
    )
}

export default DetailProducts;
