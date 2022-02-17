import { Container, Stack } from '@mui/material'
import React from 'react'
import Footer from '../components/Footer'
import NavbarApp from '../components/Navbar'
import Register from './Register'

function RegisterPage() {
    return (
        <Stack>
            <Stack 
                pt={2} pb={2}
                sx={{ backgroundColor: '#2d2a6d'}}
            >
                <Container maxWidth="xl" sx={{ display: {xs: 'none', sm: 'none', lg: 'none', xl: 'block' }}}>
                    <NavbarApp/>
                </Container>
                <Container fixed sx={{ display: { lg: 'block', xl: 'none' }}}>
                    <NavbarApp/>
                </Container>
            </Stack>
           
            <Stack 
                pt={10} pb={10}
                sx={{ minHeight: '78vh' }}
            >
                <Container maxWidth="xl" sx={{ display: {xs: 'none', sm: 'none', lg: 'none', xl: 'block' }}}>
                    <Register/>
                </Container>
                <Container fixed sx={{ display: { lg: 'block', xl: 'none' }}}>
                    <Register/>
                </Container>
            </Stack>
            <Stack
                pt={2} pb={2}
                sx={{ backgroundColor: '#2d2a6d'}}
            >
                <Container maxWidth="xl" sx={{ display: {xs: 'none', sm: 'none', lg: 'none', xl: 'block' }}}>
                    <Footer/>
                </Container>
                <Container fixed sx={{ display: { lg: 'block', xl: 'none' }}}>
                    <Footer/>
                </Container>
            </Stack>
        </Stack>
    )
}

export default RegisterPage
