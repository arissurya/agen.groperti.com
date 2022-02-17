import { useEffect } from 'react';
import { 
    Stack, 
    Paper, 
    Box, 
    Button,
} from '@mui/material';
import BreadCrumbs from '../../../../components/BreadCrumbs';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../app/store';
import { getProductBySlug, } from '../reducers/productsReducers';
import { useLocation, } from 'react-router-dom';
import SkeletonDetailProducts from '../detail/components/SkeletonProduct';
import DetailUpdateProduct from './components/DetailUpdateProduct';

const UpdateProductPage = () => {
    const location : any = useLocation()
 
    const dispatch = useDispatch()
    
    const store_product = useSelector((state : RootState) => state.products)

    // console.log(store_product, 'store_product')
    
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
                current="Edit Property"
            />
            <Stack direction="row" justifyContent="space-between" pt={3} >
                <Box>
                    <h2>Edit Property</h2>
                </Box>
            </Stack>

            { store_product.loading_product_detail ? 
            <SkeletonDetailProducts/>
            : 
            <Stack>
                { store_product.product_detail_exist ?
                <Stack>
                    <DetailUpdateProduct dataproduct={store_product.product_detail}/>
                </Stack>
                :
                <Stack mt={2}>
                    <Paper elevation={2}>
                    <Stack direction="row" justifyContent="space-between" p={3} >
                        <Box>
                            <h4>Sorry, Property is not found. Please make sure the product slug is correct.</h4>
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

export default UpdateProductPage;
