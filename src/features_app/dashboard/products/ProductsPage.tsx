import { useEffect, useState } from 'react';
import { Avatar, Button, Stack } from '@mui/material';
import { Box } from '@mui/system'
import { TableColumn } from 'react-data-table-component';
import BreadCrumbs from '../../../components/BreadCrumbs'
import DataTableBase from '../../../components/TableData'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../app/store';
import { Link, useHistory } from 'react-router-dom';
import { getAllProperty } from './reducers/productsReducers';

const ProductPage = () => {

    const history = useHistory()
    const dispatch = useDispatch()
    const state_products = useSelector((state : RootState) => state.products)

    console.log(state_products, 'state_products')

    const [limit, setLimit] = useState(15);
    const [page, setPage] = useState(1);

    useEffect(() => {
        dispatch(getAllProperty())
        // eslint-disable-next-line
    }, []);

    const onClickUpdate = (data: any) => {
        history.push({
            pathname : `/dashboard/products`,
            search: `?page=edit`, 
            state : {
                product : data,
                slug : `${data.slug}`,
            }
        })
    }

    const onClickDetail = (data: any) => {
        history.push({
            pathname : `/dashboard/products`,
            search: `?page=detail`, 
            state : {
                product : data,
                slug : `${data.slug}`,
            }
        })
    }


    const columns: TableColumn<any>[] = [
        {
            name: 'NO',
            width: '70px',
            cell: (row, index) => (
                <p>
                { page > 1 ? 
                    <>
                    {index + 1 + (limit * (page-1))}
                    </>
                    :
                    <> 
                    {index + 1}
                    </>
                }
                </p>
            )
        },
        {
            name: 'NAME',
            width: '250px',
            cell: (row) => (
                <Stack flexDirection="row" alignContent="center" >
                    <Box>
                        <Avatar
                            alt={row.title}
                            src={row.images[0]}
                            sx={{ width: 35, height: 35 }}
                            variant="square"
                        />
                    </Box>
                    <Box pl={1} pt={1} sx={{ textTransform : 'capitalize' }}>
                       {row.title}
                    </Box>
                </Stack>
            )
        },
        {
            name: 'AGENT',
            cell: (row) => (
                <p>{row.agent_name}</p>
            )
        },
        {
            name: 'PRICE',
            cell: (row) => (
                <p>Rp. {row.price.title}</p>
                
            )
        },
        {
            name: 'Type Property',
            cell: (row) => (
                <Box sx={{ textTransform : 'capitalize' }} >{row.type} di {row.sell_type}</Box>
            )
        },
        {
            name: 'FACILITY',
            cell: (row) => (
                <p>{row.facilities.land_area} LT, {row.facilities.building_area} LB, {row.facilities.bedroom} KT, {row.facilities.bathroom} KM, </p>
            )
        },
        {
            name: 'CITY',
            cell: (row) => (
                <p>{row.area.city}</p>
            )
        },
        {
            name: 'STATUS',
            cell: (row) => (
                <p>{row.status}</p>
            )
        },
        {
            name: 'ACTION',
            width: '200px',
            cell: (row) => (
                <Stack direction="row" spacing={2}>
                    <Button 
                        variant="contained" color="primary" size="small"
                        onClick={() => onClickUpdate(row)}
                    >
                        Edit
                    </Button>
                    <Button 
                        variant="outlined" color="primary" size="small"
                        onClick={() => onClickDetail(row)}
                    >
                        Detail
                    </Button>
                </Stack>
            ),
        },
    ];

    return (
        <Box sx={{pt:2, pl:3, pr:3}}>
            <BreadCrumbs
                isPage={false}
                current="Property Listing"
            />
            <Stack direction="row" justifyContent="space-between" pt={3} >
                <Box>
                    <h2>Property Listing</h2>
                </Box>
                <Box>
                    <Button
                        onClick={() => {
                            history.push({
                                pathname: "/dashboard/products",
                                search: `?page=create`, 
                            })
                        }}
                        variant="contained" color="primary" size="small">
                        Add New Property
                    </Button>
                </Box>
            </Stack>

            <Box sx={{pt:3}}>
                <DataTableBase 
                    columns={columns}
                    data={state_products.data}
                    progressPending={state_products?.loading}
                    pagination
                    onChangePage={(value) => setPage(value)}
                    onChangeRowsPerPage={(value) => setLimit(value)}
                    paginationPerPage={limit}
                />
            </Box>

        </Box>
    )
}

export default ProductPage
