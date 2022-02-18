import { Box, Stack } from '@mui/material'
import ButtonContained from '../../../components/ButtonContained'
import ButtonOutlined from '../../../components/ButtonOutlined'
import ButtonMenu from '../../../components/ButtonMenu';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../../assets/img/logo.png'

function NavbarApp() {
    const location = useLocation()

    const login = location.pathname 

    return (
        <Stack pt={1} pb={1}>
            <Stack flexDirection="row" justifyContent="space-between">
                <div className='logo-groperti'>
                    <a href="/">
                        <img src={logo} alt="logo" />
                    </a>
               </div> 
                <Stack flexDirection="row" justifyContent='space-between'>
                    { login === '/' ?
                    <Box>
                        <Link to="/register">
                            <ButtonOutlined 
                                name="Daftar" 
                                size="16"
                                color="#fff"
                                contrast="#fff"
                            />
                        </Link>
                    </Box>
                    : login === '/register' ? <Box>
                        <Link to="/">
                            <ButtonContained 
                                name="Masuk" 
                                size="16"
                                color="#fff"
                                contrast="#2d2a6d"
                                />
                        </Link>
                    </Box> : null }
                </Stack>
            </Stack>
            <Stack flexDirection="row" sx={{ mt: 2 }}>
                {/* <ButtonMenu 
                    name="Kalkulator KPR" 
                    size="14"
                    color="#fff"
                    contrast="#fff"
                    href="https:/groperti.com/calculator"
                />
                <ButtonMenu 
                    name="Tentang Kami" 
                    size="14"
                    color="#fff"
                    contrast="#fff"
                    href="https:/groperti.com/about-us"
                /> */}
                <ButtonMenu 
                    name="Pusat Bantuan" 
                    size="14"
                    color="#fff"
                    contrast="#fff"
                    href="https:/groperti.com/faq"
                />
                <ButtonMenu 
                    name="Blog" 
                    size="14"
                    color="#fff"
                    contrast="#fff"
                    href="https://blog.groperti.com"
                />
            </Stack>
        </Stack>
    )
}

export default NavbarApp
