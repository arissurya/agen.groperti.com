import { Box, Stack } from '@mui/material'
import ButtonContained from '../../../components/ButtonContained'
import ButtonOutlined from '../../../components/ButtonOutlined'
import ButtonMenu from '../../../components/ButtonMenu';
import { Link, useLocation } from 'react-router-dom';

function NavbarApp() {
    const location = useLocation()

    const login = location.pathname 

    return (
        <Stack pt={1} pb={1}>
            <Stack flexDirection="row" justifyContent="space-between">
                <a href="/">
                <Stack color="#fff" fontSize={31} fontWeight={500}>
                    Groperti.com
                </Stack>
                </a>
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
                <ButtonMenu 
                    name="Kalkulator KPR" 
                    size="14"
                    color="#fff"
                    contrast="#fff"
                    to="/calculator"
                />
                <ButtonMenu 
                    name="Tentang Kami" 
                    size="14"
                    color="#fff"
                    contrast="#fff"
                    to="/about-us"
                />
                <ButtonMenu 
                    name="Pusat Bantuan" 
                    size="14"
                    color="#fff"
                    contrast="#fff"
                    to="/faq"
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
