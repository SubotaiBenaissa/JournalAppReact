import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Google } from '@mui/icons-material'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'
import { useDispatch } from 'react-redux'
import { checkingAuth, displayGoogleSignIn } from '../../store/auth'

export const LoginPage = () => {

    const dispatch = useDispatch();

    const { email, password, onInputChange } = useForm({
        email: 'alangobe01@gmail.com',
        password: '1357908642'
    });

    const onSubmit = ( event ) => {
        event.preventDefault();
        console.log({ email, password });
        dispatch( checkingAuth() );
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
                    <Grid 
                        container
                        spacing={ 2 }
                        sx={{ mt: 1, mb: 1 }}
                    >
                        <Grid item xs={ 12 } sm={ 6 }>
                            <Button variant="contained" type="submit" fullWidth>
                                <Typography>Login</Typography>
                            </Button>
                        </Grid>
                        <Grid item xs={ 12 } sm={ 6 }>
                            <Button variant="contained" onClick={ onGoogleSignIn } fullWidth>
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
