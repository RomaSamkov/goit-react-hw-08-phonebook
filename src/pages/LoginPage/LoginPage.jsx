import { useDispatch, useSelector } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { authOperations, authSelectors } from 'redux/auth';
import { LoginForm, Input, ErrorMsg } from './LoginPage.styled';
import Spiner from 'components/Spinner';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';

let loginSchema = yup.object().shape({
  email: yup.string().email(),
  password: yup
    .string('Enter your password')
    .min(6, 'Password should be of minimum 6 characters length')
    .required('Password is required'),
});

export default function LoginPage() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(
    authSelectors.getIsFetchingCurrentUser
  );

  const handleSubmit = (value, { resetForm }) => {
    dispatch(authOperations.logIn(value));
    resetForm();
  };

  return (
    <>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {isFetchingCurrentUser ? (
          <Box>{Spiner.customSpinner}</Box>
        ) : (
          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={handleSubmit}
            validationSchema={loginSchema}
          >
            <LoginForm>
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Input
                type="email"
                name="email"
                placeholder="Enter your email"
              ></Input>
              <ErrorMessage name="email">
                {msg => <ErrorMsg>{msg}</ErrorMsg>}
              </ErrorMessage>
              <Input
                type="password"
                name="password"
                placeholder="password"
              ></Input>
              <ErrorMessage name="password">
                {msg => <ErrorMsg>{msg}</ErrorMsg>}
              </ErrorMessage>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
            </LoginForm>
          </Formik>
        )}
      </Box>
    </>
  );
}
