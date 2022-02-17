import { Stack } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const ButtonContained : React.FC<any> = ({ name, size, color, contrast, outlined }) => {
    return (
        <Stack
            sx={{
                backgroundColor: color,
                padding: '10px 20px',
                textAlign: 'center',
                borderRadius: 1,
                cursor: 'pointer',
            }}
        >   
            <Box color={contrast} fontSize={size} fontWeight="bold">{name}</Box> 
        </Stack>
    )
}

export default ButtonContained
