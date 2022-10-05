import { Link as RouterLink } from 'react-router-dom'
import { Google } from '@mui/icons-material'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import React from 'react'
import { AuthLayout } from '../layout/AuthLayout'

export const LoginPage = () => {

    return (
        
        <AuthLayout title="Log in">
            <form action="">
                <Grid container >
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
                        <Grid item xs={ 12 } sm={ 6 }>
                            <Button variant="contained" fullWidth>
                                <Typography>Login</Typography>
                            </Button>
                        </Grid>
                        <Grid item xs={ 12 } sm={ 6 }>
                            <Button variant="contained" fullWidth>
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
