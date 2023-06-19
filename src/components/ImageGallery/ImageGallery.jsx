import React from 'react';
import { Gallery } from './ImageGallery.styled';
import { Item } from './ImageGallery.styled';
import { Image } from './ImageGallery.styled';



const ImageGallery = ({ images, openModal }) => {
  const onClick = (image) => {
    openModal(image)
  }
  return (
    <Gallery>
        {images.map((image) => (
          <Item  key={image.id}>
            <Image
              src={image.webformatURL}
              alt={image.tags}
              onClick={() => onClick(image)}
            />
          </Item>
        ))}
        </Gallery>
     
  );
};

export default ImageGallery;



