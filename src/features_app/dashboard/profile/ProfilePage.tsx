import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../app/store'
import BreadCrumbs from '../../../components/BreadCrumbs'
import { getProfileCompany } from './reducers/profilesReducers'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import UserInfo from './components/UserInfo'
import UserAccount from './components/UserAccount'

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}


function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  

function ProfilePage() {

    const dispatch = useDispatch()
    const store_profile = useSelector((state : RootState) => state.profile)

    // console.log(store_profile,'store_profile')

    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    useEffect(() => {
        dispatch(getProfileCompany())
        // eslint-disable-next-line
    }, []);

    return (
        <Box sx={{pt:2, pl:3, pr:3}}>
            <BreadCrumbs 
                isPage={false}
                current="Profile Page"
            />
            <Box sx={{pt:2, pb:2}}>
                <h2>Profile Information</h2>
            </Box>

            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="User Detail" {...a11yProps(0)} />
                        <Tab label="Account" {...a11yProps(1)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <UserInfo
                        data={store_profile}
                   /> 
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <UserAccount
                        data={store_profile}
                    /> 
                </TabPanel>
            </Box>

            {/* <Paper elevation={3}>
                <Box p={3}>
                    <FormCompanyDetail
                        profile={true}
                    />
                </Box>
            </Paper>

            <Box sx={{pt:4, pb:2}}>
                <h2>Legal Documents</h2>
            </Box>

            <Paper elevation={3}>
                { store_profile.loading ? 
                <Box p={3}>
                    Loading...
                </Box> :
                <Box p={3}>
                    { dataLegal && dataLegal.map((data : any, index : any) => (
                        <Grid container key={index}>
                            <Grid item xl={2} lg={2} xs={12}>
                                <Box pt={2}><h4>{data.title}</h4></Box>
                            </Grid>
                            <Grid item xl={10} lg={10} xs={12}>
                                <Box pt={2}><h4>{data.value}</h4></Box>
                                <Box pt={2}>
                                    <img alt={data.title} src={data.url} style={{ width: 150, height: 150 }} />
                                </Box>
                            </Grid>
                        </Grid>
                    )) }
                </Box> }
            </Paper> */}
           
        </Box>
    )
}

export default ProfilePage
