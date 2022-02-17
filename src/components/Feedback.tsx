import React, { useState } from 'react';
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { CircularProgress } from '@mui/material';
import Box from '@mui/material/Box';
import { userCredentials } from '../utilities/config';
import axios from 'axios';
import swal from 'sweetalert';

const Feedback : React.FC<any> = ({ disabled }) => {

    const [feedbackValue, setFeedbackValue] = useState("");
    const [loading, setLoading] = useState(false);
    const [openDialog, setOpenDialog] = React.useState(false);
    const handleOpenDialog = () => {
        setOpenDialog(true);
      };
    
    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    const onClickSubmit = (e : any) => {
        e.preventDefault()
        let data_feedback = {
            name : userCredentials.fullname,
            company_name : userCredentials.vendor_name,
            feedback : feedbackValue
        }
        setLoading(true)
        setTimeout(async() => {
            try {
                const response : any = await axios.post(`${process.env.REACT_APP_API_SERVER}/feedback`, data_feedback)
                if(response.data.errors === null) {
                    let message = response.data.message
                    handleCloseDialog()
                    swal("Success", `${message}`, 'success')
                    setLoading(false)
                } else {
                    swal("Error", `${response.data.message}`, 'error')
                    setLoading(false)
                }
              } catch (err : any) {
                swal("Error", `${err}`, 'error')
                setLoading(false)
            }
        }, 1500);
    }

    return (
        <div>
            <div className="floating-button">
                <Box sx={{ '& > :not(style)': { m: 1 } }}>
                    <Fab variant="extended" onClick={() => handleOpenDialog()} disabled={disabled}> 
                        <NavigationIcon sx={{ mr: 1, color: '#2d2a6d' }} />
                        Feedback
                    </Fab>
                </Box>
            </div>

            <Dialog open={openDialog} onClose={handleCloseDialog}>
                <form onSubmit={onClickSubmit}>
                    <DialogTitle>Feedback</DialogTitle>
                    <DialogContent>
                    <DialogContentText>
                       Berikan masukan untuk platform kami lebih baik lagi.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="normal"
                        id="name"
                        label="Enter your feedback"
                        onChange={(e) => setFeedbackValue(e.target.value)}
                        multiline
                        rows={5}
                        fullWidth
                        variant="outlined"
                        required
                    />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCloseDialog} color="error">Cancel</Button>
                        <Button type="submit" variant="contained">
                            { loading ? <CircularProgress color='inherit' size={20} /> : "Submit" }
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        </div>
    )
}

export default Feedback
