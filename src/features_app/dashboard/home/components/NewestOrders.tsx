import { Button, Stack } from '@mui/material';
import { Box } from '@mui/system'
import { TableColumn } from 'react-data-table-component';
import DataTableBase from '../../../../components/TableData'

const NewestOrders = () => {

    const data : any = []

    const columns: TableColumn<any>[] = [
        {
            name: 'NO',
            width: '70px',
            cell: (row, index) => (
                <p>{index + 1}</p>
            )
        },
        {
            name: 'NAMA',
            selector: row => row.company,
        },
        
        {
            name: 'STATUS',
            selector: row => row.status_user,
        },
        {
            name: 'DATE',
            selector: row => row.date,
        },
        {
            name: 'TIME',
            selector: row => row.time,
        },
        {
            name: 'PROPERTI',
            width: '250px',
            selector: row => row.properti,
        },
        {
            name: 'ACTION',
            width: '200px',
            cell: (row) => (
                <Stack direction="row" spacing={2}>
                    <Button 
                        variant="outlined" color="secondary" size="small"
                    >
                        View
                    </Button>
                    <Button 
                        variant="outlined" color="primary" size="small"
                    >
                        Approve
                    </Button>
                </Stack>
            ),
        },
    ];

    return (
        <Box>
            <Stack sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
                <Box fontWeight="500" fontSize={25}>
                    Request Appointment
                </Box>
                <Box pt={1}>
                    <Button variant="outlined" size="small">View All</Button>
                </Box>
            </Stack>
            <Box pt={2}>
                <DataTableBase 
                    columns={columns}
                    data={data}
                />
            </Box>
        </Box>
    )
}

export default NewestOrders
