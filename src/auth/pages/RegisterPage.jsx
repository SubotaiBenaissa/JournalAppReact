import { Link as RouterLink } from 'react-router-dom'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import React from 'react'
import { AuthLayout } from '../layout/AuthLayout'

export const RegisterPage = () => {

    return (
        
        <AuthLayout title="Register">
            <form action="">
                <Grid container >
                    <Grid item xs={ 12 } sx={{ mt: 2 }}>
                        <TextField 
                            label="Username" 
                            type="text" 
                            placeholder="Username"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={ 12 } sx={{ mt: 2 }}>
                        <TextField 
                            label="Email" 
                            type="email" 
                            placeholder="example@email.com"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={ 12 } sx={{ mt: 2 }}>
                        <TextField 
                            label="Password" 
                            type="password" 
                            placeholder="Password"
                            fullWidth
                        />
                    </Grid>
                    <Grid 
                        container
                        spacing={ 2 }
                        sx={{ mt: 1, mb: 1 }}
                    >
                        <Grid item xs={ 12 }>
                            <Button variant="contained" fullWidth>
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

