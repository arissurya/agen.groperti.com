import { Stack } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const ButtonOutlined : React.FC<any> = ({ name, size, color, contrast, icon }) => {
    return (
        <Stack
            sx={{
                border: `1px solid ${color}`,
                textAlign: 'center',
                cursor: 'pointer',
                mr: 1,
                padding: '10px 20px',
                borderRadius: 1,
            }}
            flexDirection="row"
            alignItems='center'
        >
            <Box color={contrast} fontSize={size} fontWeight={400} >{name}</Box> 
        </Stack>
    )
}

export default ButtonOutlined
