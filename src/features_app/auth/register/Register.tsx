import { useEffect } from 'react';
import {
    Stack,
    Container,
    CssBaseline,
    Box,
    TextField,
    Button, 
    Grid, 
    Link, 
    CircularProgress 
} from '@mui/material';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../app/store';
import { registerAction } from './reducers/registerReducers';
import { UserFormSubmit } from './registerTypes'

const validationSchema = yup
  .object({
    email: yup.string()
      .required("Email is required")
      .email("Email is invalid"),
    password: yup.string()
      .required("Password is required")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Password Must Contain 8 Characters and at least have One Uppercase, One Lowercase, One Number and one special case Character"
      ),
    fullname: yup.string()
      .required("Full Name is required")
  })
  .required();


const Register = () => {
  const dispatch = useDispatch()
  const register_store = useSelector((state : RootState) => state.register )

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<UserFormSubmit>({
    mode: "onBlur",
    resolver: yupResolver(validationSchema)
  });
  
  const onSubmit = (data: UserFormSubmit): void => {
    dispatch(registerAction(data))
  }


   /* istanbul ignore next */
   useEffect(() => {
    if(register_store.register) {
      setTimeout(() => {
          reset()
          window.location.href = "/"
        }, 1000);
    }
  }, [register_store.register, reset]);

  
  return (
    <>
      
      <div>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 5,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Box color="secondary">
              <Stack flexDirection="column" alignItems="center">
              <h1>Pre Register</h1>
              <p>Daftar sebagai agen properti di Groperti</p>
              </Stack>
            </Box>

            <Box sx={{ mt: 1 }}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                error={!!errors.fullname}
                helperText={errors.fullname && errors.fullname.message}
                {...register('fullname', { required: true })}
                margin="normal"
                fullWidth
                id="fullname"
                label="Full Name"
                name="fullname"
                autoComplete="fullname"
              />
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
                Daftar
                
                { /* istanbul ignore next */
                  register_store.loading && <CircularProgress  size={30} color="inherit" style={{marginLeft: 10}} /> }
              </Button>
              <Grid container justifyContent="space-between">
                <Grid item>
                  {"Sudah punya akun? "}
                  <Link href="/">
                    Masuk
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

export default Register;
