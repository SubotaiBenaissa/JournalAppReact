import React, { useMemo } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Google } from '@mui/icons-material'
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'
import { useDispatch, useSelector } from 'react-redux'
import { displayGoogleSignIn, startLogInEmailPassword } from '../../store/auth'

export const LoginPage = () => {

    const { status, errorMessage } = useSelector( state => state.auth );

    const dispatch = useDispatch();

    const { email, password, onInputChange } = useForm({
        email: '',
        password: ''
    });

    const isAuthenticating = useMemo(() => status === "checking", [status])

    const onSubmit = ( event ) => {

        event.preventDefault();        
        dispatch( startLogInEmailPassword({ email, password }) );
    }

    const onGoogleSignIn = () => {
        console.log('Inicio de sesión con google');
        dispatch( displayGoogleSignIn() );
    }

    return (
        
        <AuthLayout title="Log in">
            <form onSubmit={ onSubmit }>
                <Grid container >
                    <Grid item xs={ 12 } sx={{ mt: 2 }}>
                        <TextField 
                            label="Email" 
                            type="email" 
                            placeholder="example@email.com"
                            name="email"
                            onChange={ onInputChange }
                            value={ email }
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={ 12 } sx={{ mt: 2 }}>
                        <TextField 
                            label="Password" 
                            type="password" 
                            placeholder="Password"
                            name="password"
                            onChange={ onInputChange }
                            value={ password }
                            fullWidth
                        />
                    </Grid>
                    <Grid container display={ !!errorMessage ? '' : 'none' } sx={{ mt: 1 }}>
                            <Grid item xs={ 12 }>
                                <Alert severity='error'>
                                    { errorMessage }
                                </Alert>
                            </Grid>
                        </Grid>
                    <Grid 
                        container
                        spacing={ 2 }
                        sx={{ mt: 1, mb: 1 }}
                    >
                        <Grid item xs={ 12 } sm={ 6 }>
                            <Button variant="contained" type="submit" fullWidth disabled = { isAuthenticating }>
                                <Typography>Login</Typography>
                            </Button>
                        </Grid>
                        <Grid item xs={ 12 } sm={ 6 }>
                            <Button variant="contained" onClick={ onGoogleSignIn } fullWidth disabled = { isAuthenticating }>
                                <Google />
                                <Typography sx={{ml: 1}}>Google</Typography>
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container direction="row" justifyContent="end">
                        <Link component={ RouterLink } color="inherit" to="/auth/register">
                            Register
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>

    )
    
}
