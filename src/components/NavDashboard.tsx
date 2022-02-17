import React from 'react';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Popover from '@mui/material/Popover';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useHistory } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { RootState } from '../app/store';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import Box from '@mui/material/Box';
import { userCredentials } from '../utilities/config';
import { Stack } from '@mui/material';
import Feedback from './Feedback';

const drawerWidth = 240;

interface Props {
    window?: () => Window;
  }

const NavDashboard = (props: Props) => {
    // const auth = useSelector((state : RootState) => state.login )

    const history = useHistory()
    const { window } = props

    const [dropDownOpen, setDropdownOpen] = React.useState({
        name : '',
        open : false
    });

    const handleDropDownMenu = (name : string) => {
        setDropdownOpen({...dropDownOpen, name : name, open : !dropDownOpen.open });
    };

    const [mobileOpen, setMobileOpen] = React.useState(false);
        
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    // dropdown menu 
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event : any) => {
        setAnchorEl(event.currentTarget);
    };

    /* istanbul ignore next */
    const handleClose = () => {
        setAnchorEl(null);
    };
    
    const open = Boolean(anchorEl);
    /* istanbul ignore next */
    const id = 2 ? 'simple-popover' : undefined;

    /* istanbul ignore next */
    const onClickSignOut = () : void => {
        localStorage.clear()
        history.go(0)
    }

    const data_navigation = [
        {
            id: 1,
            module_detail : {
                name : "Dashboard",
                path : '/dashboard',
                iconImage : ""
            },
            child_navigations: []
        },
        // {
        //     id: 2,
        //     module_detail : {
        //         name : "Appointment",
        //         path : '/appointment',
        //         iconImage : ""
        //     },
        //     child_navigations: [
        //         {
        //             name : "Request",
        //             path : '/appointment',
        //             iconImage : ""
        //         },
        //         {
        //             name : "Schedule",
        //             path : '/schedule',
        //             iconImage : ""
        //         }
        //     ]
        // },
        {
            id: 4,
            module_detail : {
                name : "Property Listing",
                path : '/dashboard/products',
                iconImage : ""
            },
            child_navigations: []
        },
        {
            id: 7,
            module_detail : {
                name : "Profile",
                path : '/dashboard/profile',
                iconImage : ""
            },
            child_navigations: []
        }
    ]

    const complete_register = [
        {
            id: 1,
            module_detail : {
                name : "Completing Register",
                path : '/completing-register',
                iconImage : ""
            },
            child_navigations: []
        },
    ]

  const drawer = (
    <div>   
        <Toolbar sx={{ backgroundColor: '#2d2a6d' }}>
            <div className="logo-groperti">
                <a href="/dashboard">
                    {/* <img 
                        alt="logo mpi dashboard" 
                        src={logo}
                    /> */}
                    Groperti.com 
                </a>
            </div>
        </Toolbar>
        <Divider />

        <div className="sidebar-navbar">
            { userCredentials.first_time ? 
            <div>
                { complete_register.map((nav:any, index:any) => (
                <div key={index}>
                { nav.child_navigations.length === 0 ?
                <>
                <NavLink exact to={nav.module_detail.path} activeClassName="active-link" >
                    <ul>
                        <li className="navbar-list">
                            <div className="icon">
                            </div>
                            <span>{nav.module_detail.name}</span>
                        </li>
                    </ul>
                </NavLink>
                <Divider />
                </>
                : 
                <>
                <div className="sidebar-navbar-dropdown">
                    <div className="menu-dropdown" onClick={() => handleDropDownMenu(nav.module_detail.name)}>
                        <Stack flexDirection="row">
                            <div className="icon">
                            
                            </div>
                            <Box ml={1} mr={1}>{nav.module_detail.name}</Box>
                            <Box>
                                { dropDownOpen.name === nav.module_detail.name && dropDownOpen.open ? 
                                <ArrowDropUpIcon/> : <ArrowDropDownIcon/>  }
                            </Box>
                        </Stack>
                    </div>
                    <div className={dropDownOpen.name === nav.module_detail.name && dropDownOpen.open ? 'menu-list-dropdown-active' : 'menu-list-dropdown'}>
                        { nav.child_navigations.map((child:any, index:any) => (
                        <div key={index}>
                            <Divider />
                            <NavLink exact to={child.path} activeClassName="active-link" >
                                <ul>
                                    <li className="navbar-list">
                                        <div className="icon">
                                        
                                        </div>
                                        <span>{child.name}</span>
                                    </li>
                                </ul>
                            </NavLink>
                        </div>
                        ))}
                    </div>
                </div>
                <Divider />
                </>
                }
                </div>
                ))}
            </div> 
            :
            <div>
                { data_navigation.map((nav:any, index:any) => (
                <div key={index}>
                { nav.child_navigations.length === 0 ?
                <>
                <NavLink exact to={nav.module_detail.path} activeClassName="active-link" >
                    <ul>
                        <li className="navbar-list">
                            <div className="icon">
                            </div>
                            <span>{nav.module_detail.name}</span>
                        </li>
                    </ul>
                </NavLink>
                <Divider />
                </>
                : 
                <>
                <div className="sidebar-navbar-dropdown">
                    <div className="menu-dropdown" onClick={() => handleDropDownMenu(nav.module_detail.name)}>
                        <Stack flexDirection="row">
                            <div className="icon">
                            
                            </div>
                            <Box ml={1} mr={1}>{nav.module_detail.name}</Box>
                            <Box>
                                { dropDownOpen.name === nav.module_detail.name && dropDownOpen.open ? 
                                <ArrowDropUpIcon/> : <ArrowDropDownIcon/>  }
                            </Box>
                        </Stack>
                    </div>
                    <div className={dropDownOpen.name === nav.module_detail.name && dropDownOpen.open ? 'menu-list-dropdown-active' : 'menu-list-dropdown'}>
                        { nav.child_navigations.map((child:any, index:any) => (
                        <div key={index}>
                            <Divider />
                            <NavLink exact to={child.path} activeClassName="active-link" >
                                <ul>
                                    <li className="navbar-list">
                                        <div className="icon">
                                        
                                        </div>
                                        <span>{child.name}</span>
                                    </li>
                                </ul>
                            </NavLink>
                        </div>
                        ))}
                    </div>
                </div>
                <Divider />
                </>
                }
                </div>
                ))}
            </div> 
            }
            <Feedback disabled={userCredentials.first_time ? true : false} />
        </div>

    </div>
  );

    /* istanbul ignore next */
  const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    backgroundColor: '#2d2a6d'
                }} 
            >
                <Toolbar>
                    <IconButton
                        data-testid="menuButton"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' }, color: '#000' }}
                    >
                        <MenuIcon />
                    </IconButton> 
                    <div style={{flexGrow: 1}} />
                    <Box>
                        <div 
                            className="right-navbar"  
                            data-testid="dropdownButton"
                            onClick={handleClick}
                        >
                            <Box> <AccountCircleIcon/>  </Box>
                            <Box pl={1}>{userCredentials.name}</Box>
                            <Box pl={1}> <ArrowDropDownIcon/></Box>
                        </div>
                        {/* Dropdown Menu */}
                        <Popover
                            data-testid="dropdown"
                            id={id}
                            open={open}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            className="popper-style"
                        >
                        <Box>
                            <div style={{ width: 150 }}>
                            <List component="nav" aria-label="secondary mailbox folders">
                                <ListItem 
                                    button 
                                    onClick={() => {
                                        /* istanbul ignore next */
                                        onClickSignOut()
                                    }}>
                                    <ListItemText className="btn-navlist" primary="Sign Out" />
                                </ListItem>
                            </List>
                            </div>
                        </Box>
                        </Popover>
                    </Box>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    data-testid="drawer"
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
        </div>
    )
}

export default NavDashboard;
