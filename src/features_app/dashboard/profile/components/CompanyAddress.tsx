import { Stack, Box, Button, Paper, TextField } from '@mui/material'
import {useState, useEffect} from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

const CompanyAddress = () => {

    const [open, setOpen] = useState({
        open : false,
        name : ""
    });

    const [valueAddress, setValueAddress] = useState({
        address : "",
        name : ""
    });

    const onChangeValue = (e:any) => {
        setValueAddress({...valueAddress, [e.target.name]: e.target.value })
    }

    const handleClose = () => {
        setOpen({...open, open: false, name : "" })
    }

    const handleOpen = (name : any) => {
        setOpen({...open, open: true, name : name })
    }

    const onClickSubmit = (e : any) => {
        e.preventDefault()

    }

    return (
        <Stack mt={1}>
            <Stack flexDirection="row" justifyContent="space-between">
                <Box fontWeight="700" fontSize={22}>List Address </Box>
                <Box>
                    <Button
                        variant='contained'
                        size="small"
                        color="primary"
                        onClick={() => handleOpen('Create New')}
                    >
                        Add New Address
                    </Button>
                </Box>
            </Stack>
            {[1,2,3].map((data:any, i: any) => (
                <Stack mt={2}>
                    <Paper elevation={3} sx={{ border: '#39d059 2px solid' }}>
                        <Box p={3}>
                            <Box fontWeight="600">NEO SOHO</Box>
                            <Box pt={1}>
                                Jl Let Jend S. Parman Kav 28 APL Tower, 16th Floor T9
                                RT.3/RW.5, Tj. Duren Sel., Kec. Grogol petamburan, Kota Jakarta Barat
                                Daerah Khusus Ibukota Jakarta, 11470
                            </Box>
                            <Stack pt={2} flexDirection="row">
                                <Box mr={2}>
                                    <Box
                                        sx={{
                                            backgroundColor: '#39d059',
                                            color: '#fff',
                                            padding: '3px 10px',
                                            borderRadius: 5
                                        }}
                                    >
                                        Default Address
                                    </Box>
                                </Box>
                                <Box mr={2}>
                                    <Button
                                        size="small"
                                        color="primary"
                                    >
                                        Change to Default
                                    </Button>
                                </Box>
                                <Box mr={2}>
                                    <Button
                                        size="small"
                                        color="info"
                                        onClick={() => {
                                            handleOpen('Update')
                                        }}
                                    >
                                        Change Address
                                    </Button>
                                </Box>
                                <Box>
                                    <Button
                                        size="small"
                                        color="error"
                                    >
                                        Remove Address
                                    </Button>
                                </Box>
                            </Stack>
                        </Box>
                    </Paper>
                </Stack>
            ))}

            <Dialog open={open.open} maxWidth="lg" fullWidth={true}  >
                <form onSubmit={onClickSubmit}>
                    <DialogTitle>{open.name}</DialogTitle>
                    <DialogContent>
                        <Stack>
                            <TextField 
                                label="Name / House / Office"
                                onChange={onChangeValue}
                                name="name"
                                type="text"
                                margin='dense'
                            />
                            <TextField 
                                label="Address"
                                onChange={onChangeValue}
                                name="address"
                                multiline
                                rows={4}
                                margin='dense'
                            />
                        </Stack>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="error">Cancel</Button>
                        <Button variant="contained" type="submit">
                            {/* { store_address.loading_post ? "Loading" : "Request Preferred" }  */}
                            Submit
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        </Stack>
    )
}

export default CompanyAddress
