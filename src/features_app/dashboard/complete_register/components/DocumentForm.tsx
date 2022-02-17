import React, { useState, useEffect } from 'react'
import {
    Button,
    Grid,
    Box,
    TextField,
    Backdrop,
    CircularProgress 
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux'
import { changeStep } from './stepFormSlice';
import { v4 as uuid } from 'uuid';
import { RootState } from '../../../../app/store';

import { userCredentials } from '../../../../utilities/config';
const DocumentForm : React.FC<any> = ({
    profile
}) => {

      
    const dispatch = useDispatch()

    const [legalDocState, setLegalDocState] = useState<any>([
        {
            id: 1,
            title: 'Kartu Tanda Penduduk',
            short_title : 'ktp',
            value : "",
            url : "",
            error : false
        }
    ]);

    const onChangeValue = (event : any) => {
        let { name, value }  = event.target
        let copyState = [...legalDocState]
        if(copyState.find(element => element.short_title === name)) {
            copyState.find(el => el.short_title === name).value = value
            setLegalDocState(copyState)
        }
    }

    const onChangeFile = (e : any) => {
        const copyState = [...legalDocState]
        const { name  }  = e.target

        const random = uuid();
        setTimeout(() => {
            var S3 = require("aws-sdk/clients/s3");
            const s3bucket = new S3({
                endpoint: process.env.REACT_APP_S3_BUCKET_ENDPOINT,
                accessKeyId: process.env.REACT_APP_S3_BUCKET_KEY,
                secretAccessKey: process.env.REACT_APP_S3_BUCKET_SECRET
            });
        
            if (e.target.files && e.target.files[0]) {
            const blob = e.target.files[0]
            const file_name = blob.name.replace(/\s/g, "")
            const params = { Body: blob, 
                            Bucket: process.env.REACT_APP_S3_BUCKET_NAME, 
                            Key: 'vendor/' + random + file_name
                            };
            s3bucket.putObject(params)
            .on('build', (request : any) => {
                request.httpRequest.headers.Host = process.env.REACT_APP_S3_API_URL
                request.httpRequest.headers['Content-Length'] = blob.size;
                request.httpRequest.headers['Content-Type'] = blob.type;
                request.httpRequest.headers['Access-Control-Allow-Origin']= '*';
                request.httpRequest.headers['x-amz-acl'] = 'public-read';
            })
            .send((err : any, data : any) => {
                if (err){  
                    console.log(err, err.stack,);
                } 
                else {      
                    const imageUrl = `${process.env.REACT_APP_S3_CDN_URL}${random}${file_name}`
                    if(copyState.find(element => element.short_title === name)) {
                        copyState.find(el => el.short_title === name).url = imageUrl
                        setLegalDocState(copyState)
                    }
                    // setDataImage(imageUrl)
                }}
            )} 
        }, 1000);
    }

    const onClickNext = (e : any) => {
        e.preventDefault()
        dispatch(changeStep(2))
        // const body_send = {
        //     _id: userCredentials.vendor_id,
        //     legal_docs: legalDocState
        // }
        // dispatch(postLegalDocument(body_send))
        // localStorage.setItem('legal_document', JSON.stringify(legalDocState))
    }

    

    return (
        <div>
            {/* <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={state_stepregister.loading_legal_document}
            >
                <CircularProgress color="inherit" />
            </Backdrop> */}
           
            <Box mt={2} pl={2} pb={2}>
                <h2>Document </h2>
            </Box>
           <div className="section-form-company-detail">
               <form onSubmit={(e) => onClickNext(e)}>
                <Box pl={2}>
                    {legalDocState?.map((val : any, i :any) => (
                        <Box key={i}>
                            <Grid container >
                                <Grid item xl={3} lg={4} xs={12}>
                                    <Box pt={2}><h4>{val.title}</h4></Box>
                                </Grid>
                                <Grid item xl={9} lg={8} xs={12}>
                                    <TextField
                                        margin="dense"
                                        fullWidth
                                        label={`Number ${val.title}`}
                                        name={val.short_title}
                                        size="small"
                                        onChange={onChangeValue}
                                        required
                                    />
                                </Grid>
                            </Grid>
                            <Grid container >
                                <Grid item xl={3} lg={4} xs={12}>
                                    <Box pt={2}><h4>Upload {val.short_title}</h4></Box>
                                </Grid>
                                <Grid item xl={9} lg={8} xs={12}>
                                    <TextField
                                        margin="dense"
                                        fullWidth
                                        type="file"
                                        name={val.short_title}
                                        size="small"
                                        onChange={onChangeFile}
                                        required
                                    />
                                </Grid>
                            </Grid>
                        </Box>
                    ))}
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 4, pb: 2 }}>
                        <Button
                            variant="contained"
                            color="inherit"
                            onClick={() => { 
                                dispatch(changeStep(0))
                            }}
                            sx={{ mr: 1 }}
                        >
                            Back
                        </Button>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button 
                            variant="contained"
                            type="submit"
                        >
                            Next
                        </Button>
                    </Box> 
                </Box>
                </form>
           </div>
        </div>
    )
}

export default DocumentForm
