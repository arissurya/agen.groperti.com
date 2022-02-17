import { Stack } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'

const ButtonMenu : React.FC<any> = ({ name, size, color, contrast, icon, href, to }) => {
    return (
        <Stack
            sx={{
                textAlign: 'center',
                cursor: 'pointer',
                mr: 2,
            }}
            flexDirection="row"
            alignItems='center'
        >
            { href ? 
            <a href={href} target="_blank"  rel="noreferrer">
                <Box color={contrast} fontSize={size} fontWeight={400}>{name}</Box> 
            </a> : 
            <Link to={to}>
                <Box color={contrast} fontSize={size} fontWeight={400}>{name}</Box> 
            </Link>
            }
        </Stack>
    )
}

export default ButtonMenu
