import {
    Container,
    CssBaseline,
    Stack,
    Button
} from '@mui/material';
import notfound from '../../assets/img/notfound.svg'

const Error404 = () => {

    return (
    <>
      <div>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
            <Stack sx={{ 
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <div className="img-notfound">
                  <img alt="notfound" src={notfound} />
                </div>
                <div className="text-notfound">
                  <h2>Page Not Found </h2>
                  <Button 
                    variant="contained"
                    href="/dashboard"
                    size="small"
                    sx={{mt:2}}
                  >Back to safe place</Button>
                </div>
                
            </Stack>
        </Container>
      </div>
    </>
    )
}

export default Error404;
