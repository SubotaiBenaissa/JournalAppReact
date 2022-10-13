import { SaveOutlined } from '@mui/icons-material'
import { Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'

export const NoteView = () => {

    return (
        
        <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ mb: 1 }}
        >
            <Grid item>
                <Typography fontSize={ 39 } fontWeight="light">08 de octubre, 2023</Typography>
            </Grid>
            <Grid item>
                <Button color="primary" sx={{ padding: 2 }}>
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }}/>
                    Guardar
                </Button>
            </Grid>
            <Grid container>
                <TextField 
                    type="text"
                    variant="filled"
                    fullWidth
                    placeholder="Ingresar un título"
                    label="Título"
                    sx={{ border: 'none', mb: 1, mt: 2 }}
                />
                <TextField 
                    type="text"
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder="¿Qué sucedió hoy XD?"
                    minRows={ 5 }
                />
            </Grid>
        </Grid>

    )

}
