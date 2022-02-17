import { useEffect } from 'react';
import {
    Container,
    CssBaseline,
    Box,
    TextField,
    Button, 
    Grid, 
    Link, 
    CircularProgress, 
    Stack
} from '@mui/material';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../app/store';
import { loginAction } from './reducers/loginReducers';
import { UserFormSubmit } from './loginTypes'

const validationSchema = yup
  .object({
    email: yup.string()
      .required("Email is required")
      .email("Email is invalid"),
    password: yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
  })
  .required();


const Login = () => {
  const dispatch = useDispatch()
  const auth = useSelector((state : RootState) => state.login )

  console.log(auth, 'authh')

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<UserFormSubmit>({
    mode: "onBlur",
    resolver: yupResolver(validationSchema)
  });
  
  const onSubmit = (data: UserFormSubmit): void => {
    dispatch(loginAction(data))
  }


  /* istanbul ignore next */
  useEffect(() => {
    if(auth.login && auth.data?.first_time) {
      setTimeout(() => {
        window.location.href = '/completing-register'
      }, 1000);
    } else if (auth.login && !auth.data?.first_time) {
      setTimeout(() => {
        window.location.href = '/dashboard'
      }, 1000);
    }
    // eslint-disable-next-line
  }, [auth.login]);

  
  return (
    <>
      <div >
      <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 12,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Box color="secondary">
              <Stack flexDirection="column" alignItems="center">
              <h1>Login</h1>
              <p>Masuk sebagai agen di Groperti</p>
              </Stack>
            </Box>

            <Box sx={{ mt: 1 }}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                error={!!errors.email}
                helperText={errors.email && errors.email.message}
                {...register('email', { required: true })}
                margin="normal"
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
              <TextField
                error={!!errors.password}
                helperText={errors.password && errors.password.message}
                {...register('password', { required: true })}
                margin="normal"
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                size="medium"
                color="primary"
              >
                Masuk
                
                { /* istanbul ignore next */
                  auth.loading && <CircularProgress  size={30} color="inherit" style={{marginLeft: 10}} /> }
              </Button>
              <Grid container justifyContent="space-between">
                <Grid item>
                  {"Belum punya akun? "}
                  <Link href="/register">
                    Daftar
                  </Link>
                </Grid> 
                <Grid item>
                  <Link href="/forgot-password">
                    Lupa password?
                  </Link>
                </Grid>
              </Grid>
            </form>
            </Box>
          </Box>
        </Container>
      </div>
    </>
    )
}

export default Login;
