import { Stack } from '@mui/material'
import { useLocation } from 'react-router-dom';
import CreateNewProducts from './create/CreateNewProducts';
import DetailProducts from './detail/DetailProducts';
import ProductPage from './ProductsPage';
import UpdateProductPage from './update/UpdateProductPage';
// import CreatePurchaseRequests from './create/CreatePurchaseRequests';
// import DetailPurchaseRequests from './detail/DetailPurchaseRequests';
// import PurchaseRequests from './PurchaseRequests';

function MainProductPage() {

    const location : any = useLocation()
    function useQuery() {
        return new URLSearchParams(location.search);
    }
    
    let query = useQuery();
    let active_page = query.get('page')

    const switchPage = () => {
        if (active_page === 'create') {
            return <CreateNewProducts/>
        } else if (active_page === 'detail') {
            return <DetailProducts/>
        } else if (active_page === 'edit') {
            return <UpdateProductPage/>
        }  else {
            return <ProductPage/>
        }
    }
 
    return (
        <Stack>
            {switchPage()}
        </Stack>
    )
}

export default MainProductPage
