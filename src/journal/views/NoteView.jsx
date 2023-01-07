import React from 'react'
import { SaveOutlined } from '@mui/icons-material'
import { Button, Grid, TextField, Typography } from '@mui/material'
import { ImageGalleryComponent } from '../components'
import { useForm } from '../../hooks/useForm'
import { useSelector } from 'react-redux'
import { useMemo } from 'react'

export const NoteView = () => {

    const { active:note } = useSelector( state => state.journal )
    const { body, title, date, onInputChange, formState } = useForm( note )

    const dateString = useMemo(() => {
        const newDate = new Date( date )
    }, [date])

    return (
        
        <Grid
            className="animate__animated animate__fadeIn animate__faster"
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
                    name="title"
                    value={ title }
                    onChange={ onInputChange }
                />
                <TextField 
                    type="text"
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder="¿Qué sucedió hoy XD?"
                    minRows={ 5 }
                    name="body"
                    value={ body }
                    onChange={ onInputChange }
                />
                <ImageGalleryComponent />
            </Grid>
        </Grid>

    )

}
