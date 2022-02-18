import { 
    AppBar,
    Toolbar,
} from '@mui/material';
import logo from '../assets/img/logo.png'

const Navbar = () => {
    return (
    <div>
        <AppBar
            position="static"
            color="default"
            elevation={0}
            sx={{ 
                borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
                backgroundColor: '#2d2a6d'
            }}
        >
            <Toolbar sx={{ flexWrap: 'wrap'}}>
                <div className='logo-groperti'>
                    <a href="/">
                        <img src={logo} alt="logo" />
                    </a>
               </div> 
            </Toolbar>
        </AppBar>
    </div>
    )
}

export default Navbar
