import { ImageList, ImageListItem } from '@mui/material';
import React from 'react';


export const ImageGalleryComponent = ({ images }) => {
    return (

        <ImageList sx={{ width: 900, height: 500 }} cols={3} rowHeight={300}>
        {images.map((image) => (
            <ImageListItem key={image}>
            <img
                src={`${image}`}
                srcSet={`${image}`}
                alt="Imagen de nota"
                loading="lazy"
            />
            </ImageListItem>
        ))}
        </ImageList>
        
    );
}


