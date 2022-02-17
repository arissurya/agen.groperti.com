import { 
    Box,
    Stack,
    Skeleton,
} from '@mui/material';
import { useState } from 'react';
import swal from 'sweetalert';
import { v4 as uuid } from 'uuid';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

const Input = styled('input')({
  display: 'none',
});

const ImagesItems : React.FC<any> = ({
    imagesItems,
    setImagesItems,
}) => {

    const [loading, setLoading] = useState(false);
    const [index, setIndex] = useState("");

    const onChangeValue = (index : any, value : any) => {
        let copy_array = [...imagesItems]
        const newData = copy_array.map((obj : any, i : any) => {
            if(i === index)
            return {
                ...obj,
                [value.target.name]: value.target.value,
            }
            return obj
        });
        setImagesItems(newData)
    }

    const onChangeValueFile = (index : any, e : any) => {
        setLoading(true)
        setIndex(index)
        const copy_array = [...imagesItems]
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
                            Key: 'groperti/' + random + file_name
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
                    swal(`${err}`, `${err.stack}`, 'error')
                } 
                else {      
                    const imageUrl = `${process.env.REACT_APP_S3_CDN_URL}${random}${file_name}`
                    const newData = copy_array.map((obj : any, i : any) => {
                        if(i === index)
                        return {
                            ...obj,
                            image : imageUrl,
                        }
                        return obj
                    });
                    setImagesItems(newData)
                    setLoading(false)
                }}
            )} 
        }, 1000);
    }

    const onClickAddNewField = () => {
        let copy_item = [...imagesItems]
        let new_object = {
            image: "",
        }
        copy_item.push(new_object)
        setImagesItems(copy_item)
    }

  return (
    <Stack flexDirection="row" alignItems="bottom">
        { imagesItems.map((row :any, i : any) => (
        <Box ml={1} mr={1}>
            { loading && i === index ? 
            <Skeleton 
                variant="rectangular" 
                width={50} height={50} 
                sx={{ borderRadius: '4px' }}
            /> :
            <Box>
                { row.image === "" ?
                <Box pt={1}>
                    <label htmlFor="icon-button-files" style={{ border: '1px solid #ccc', padding: '10px', }}>
                        <Input accept="image/*" id="icon-button-files" type="file"  onChange={(e) => onChangeValueFile(i,e)} />
                            <IconButton color="primary" aria-label="upload picture" component="span">
                        <PhotoCamera />
                        </IconButton>
                    </label>
                </Box>
                :
                <Stack flexDirection="column"  >
                    <Box 
                        component="img"
                        src={row.image}
                        sx={{
                            width: '100px',
                            borderRadius: '4px',
                            border: '1px solid #ccc',
                            padding: '5px'
                        }}
                    />
                    <Box
                        sx={{
                            color: 'blue',
                            cursor: 'pointer',
                            fontSize: 12,
                            pt: 1
                        }}
                        onClick={() => onChangeValue(i,{target : {value : "", name : "image"}})}
                    >Change</Box>
                </Stack> }
            </Box> 
            }
        </Box>
        ))}
        <Box ml={1} mr={1}>
            <Box mt={1} sx={{border: '1px solid #ccc', padding: '8px', cursor: 'pointer'}}>
                <Box fontSize={15} onClick={onClickAddNewField}>
                    Add More
                </Box>
            </Box> 
        </Box>
    </Stack>
  );
}

export default ImagesItems