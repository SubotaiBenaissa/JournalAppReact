import { Link as RouterLink } from 'react-router-dom'
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material'
import React, { useMemo, useState } from 'react'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'
import { useDispatch, useSelector } from 'react-redux'
import { creatingUserEmailPassword } from '../../store/auth'

const formData = {
    email:'',
    password: '',
    displayName: ''
}

const formValidations = {
    email: [ (value) => value.includes('@'), 'Email must have @' ],
    password: [ (value) => value.length >= 8, 'Password cannot have less than 8 characters' ],
    displayName: [ (value) => value.length >= 1, 'Username required' ]
}

export const RegisterPage = () => {

    const dispatch = useDispatch()

    const [formSubmitted, setFormSubmitted] = useState(false);

    const { status, errorMessage } = useSelector( state => state.auth );
    const isCheckingAuthentication = useMemo(() => status === 'checking', [ status ]) 

    const { 
        displayName, 
        email, 
        password, 
        onInputChange, 
        formState, 
        isFormValid, 
        displayNameValid, 
        emailValid, 
        passwordValid } = useForm(formData, formValidations);

    const onSubmit = ( event ) => {
        event.preventDefault();
        setFormSubmitted(true)
        if (!isFormValid) return;
        dispatch(creatingUserEmailPassword(formState))
    }


    return (
        
        <AuthLayout title="Register">
            <form onSubmit={ onSubmit } className="animate__animated animate__fadeIn animate__faster">
                <Grid container >
                    <Grid item xs={ 12 } sx={{ mt: 2 }}>
                        <TextField 
                            label="Username" 
                            type="text" 
                            placeholder="Username"
                            fullWidth
                            name='displayName'
                            value={ displayName }
                            onChange={ onInputChange }
                            error={ !!displayNameValid && formSubmitted }
                            helperText={ displayNameValid }
                        />
                    </Grid>
                    <Grid item xs={ 12 } sx={{ mt: 2 }}>
                        <TextField 
                            label="Email" 
                            type="email" 
                            placeholder="example@email.com"
                            fullWidth
                            name='email'
                            value={ email }
                            onChange={ onInputChange }
                            error={ !!emailValid && formSubmitted }
                            helperText={ emailValid }
                        />
                    </Grid>
                    <Grid item xs={ 12 } sx={{ mt: 2 }}>
                        <TextField 
                            label="Password" 
                            type="password" 
                            placeholder="Password"
                            fullWidth
                            name='password'
                            value={ password }
                            onChange={ onInputChange }
                            error={ !!passwordValid && formSubmitted }
                            helperText={ passwordValid }
                        />
                    </Grid>
                    <Grid 
                        container
                        spacing={ 2 }
                        sx={{ mt: 1, mb: 1 }}
                    >
                        <Grid item xs={ 12 } display={ !!errorMessage ? '' : 'none' }>
                            <Alert severity='error'>
                                { errorMessage }
                            </Alert>
                        </Grid>
                        <Grid item xs={ 12 }>
                            <Button variant="contained" fullWidth type="submit" disabled={ isCheckingAuthentication }>
                                <Typography>Register</Typography>
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container direction="row" justifyContent="end">
                        <Typography sx={{ mr: 1 }}>Already have an account?</Typography>
                        <Link component={ RouterLink } color="inherit" to="/auth/login">
                            Log in
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>

    )
    
}

