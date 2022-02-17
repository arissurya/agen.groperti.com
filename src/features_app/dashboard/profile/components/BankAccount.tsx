import { Stack, Box, Button, Paper, TextField } from '@mui/material'
import {useState, useEffect} from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { userCredentials } from '../../../../utilities/config';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../app/store';
import { changeDefaultBankAccount, getBankAccount, postBankAccount, removeBankAccount } from '../reducers/profilesReducers';
import swal from 'sweetalert';

const BankAccount = () => {

    const dispatch = useDispatch()
    const store_profile = useSelector((state : RootState) => state.profile)

    const [index, setIndex] = useState<any>("");
    const [open, setOpen] = useState({
        open : false,
        name : ""
    });

    const [valueBank, setValueBank] = useState({
        bank_number : "",
        bank_name : "",
        bank_account_name: ""
    });

    const onChangeValue = (e:any) => {
        setValueBank({...valueBank, [e.target.name]: e.target.value })
    }

    const handleClose = () => {
        setOpen({...open, open: false, name : "" })
    }

    const handleOpen = (name : any) => {
        setOpen({...open, open: true, name : name })
    }

    const onClickSubmit = (e : any) => {
        e.preventDefault()
        let body_send = {
            "vendor_id": userCredentials.vendor_id,
            "bank": valueBank.bank_name,
            "account_number": valueBank.bank_number,
            "account_name":valueBank.bank_account_name,
            "is_default": false
        }
        dispatch(postBankAccount(body_send))
    }

    useEffect(() => {
        if(store_profile.bank_post) {
            handleClose()
            setValueBank({...valueBank, 
                bank_number : "",
                bank_name : "",
                bank_account_name: ""
            })
            swal('Success', 'Success Add Bank Account', 'success')
            dispatch(getBankAccount())
        }
        // eslint-disable-next-line
    }, [store_profile.bank_post])

    useEffect(() => {
        if(store_profile.bank_default) {
            setIndex("")
            swal('Success', 'Success Change to Default Bank Account', 'success')
            dispatch(getBankAccount())
        }
        // eslint-disable-next-line
    }, [store_profile.bank_default])

    useEffect(() => {
        if(store_profile.bank_remove) {
            setIndex("")
            swal('Success', 'Success Remove Bank Account', 'success')
            dispatch(getBankAccount())
        }
        // eslint-disable-next-line
    }, [store_profile.bank_remove])

    useEffect(() => {
        dispatch(getBankAccount())
        // eslint-disable-next-line
    }, []);

    return (
        <Stack mt={1}>
            <Stack flexDirection="row" justifyContent="space-between">
                <Box>
                    <Box fontWeight="700" fontSize={22}>List of Bank Account </Box>
                    <Box fontSize={14}>You can add bank account maximum 3 account.</Box>
                </Box>
                <Box>
                    <Button
                        variant='contained'
                        size="small"
                        color="primary"
                        onClick={() => handleOpen('Create New')}
                    >
                        Add New Bank Account
                    </Button>
                </Box>
            </Stack>

            { store_profile.loading_bank ? 
            <Box pt={3}>Loading...</Box>
            :
            <Stack>
                { store_profile.bank.length === 0 ? 
                <Stack mt={2}>
                    <Paper elevation={3} sx={{ border: '#023047 2px solid' }}>
                        <Box p={3}>
                            <Box pt={1} fontWeight="700">
                                You dont have any bank account. Please create at least one bank account!
                            </Box>
                        </Box>
                    </Paper>
                </Stack> 
                :  
                <Stack>
                {store_profile.bank.map((val:any, i: any) => (
                <Stack mt={2} key={i}>
                    <Paper elevation={3} sx={{ border: !val.is_default ? '#fff 4px solid' : '#0091d6 2px solid' }}>
                        <Box p={3}>
                            <Box fontWeight="400">{val.bank}</Box>
                            <Box pt={1} fontWeight="700">
                                {val.account_number}
                            </Box>
                            <Box pt={1} fontWeight="500">
                                an {val.account_name}
                            </Box>
                            <Stack pt={2} flexDirection="row">
                                { val.is_default ? 
                                <Box mr={2}>
                                    <Box
                                        sx={{
                                            backgroundColor: '#0091d6',
                                            color: '#fff',
                                            padding: '3px 10px',
                                            borderRadius: 5
                                        }}
                                    >
                                        Default Bank
                                    </Box> 
                                </Box> : 
                                <Box mr={2}>
                                    <Button
                                        size="small"
                                        color="primary"
                                        onClick={() => {
                                            setIndex(i)
                                            dispatch(changeDefaultBankAccount(val._id))
                                        }}
                                    >
                                        { store_profile.loading_bank_default && index === i ?
                                         "Loading..." : 
                                         "Change to Default" }
                                    </Button>
                                </Box> }
                                <Box>
                                    <Button
                                        size="small"
                                        color="error"
                                        onClick={() => {
                                            setIndex(i)
                                            dispatch(removeBankAccount(val._id))
                                        }}
                                    >
                                         { store_profile.loading_bank_remove && index === i ?
                                         "Loading..." : 
                                         "Remove" }
                                    </Button>
                                </Box>
                            </Stack>
                        </Box>
                    </Paper>
                </Stack> 
                ))}
                </Stack> }
            </Stack> }

            <Dialog open={open.open} maxWidth="lg" fullWidth={true}  >
                <form onSubmit={onClickSubmit}>
                    <DialogTitle>{open.name}</DialogTitle>
                    <DialogContent>
                        <Stack>
                            <TextField 
                                label="Bank Name"
                                onChange={onChangeValue}
                                name="bank_name"
                                type="text"
                                margin='dense'
                            />
                            <TextField 
                                label="Bank Number"
                                onChange={onChangeValue}
                                name="bank_number"
                                type="number"
                                margin='dense'
                            />
                            <TextField 
                                label="Account Name"
                                onChange={onChangeValue}
                                name="bank_account_name"
                                type="text"
                                margin='dense'
                            />
                        </Stack>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="error">Cancel</Button>
                        <Button variant="contained" type="submit">
                            { store_profile.loading_bank_post ? "Loading" : "Submit" } 
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        </Stack>
    )
}

export default BankAccount
