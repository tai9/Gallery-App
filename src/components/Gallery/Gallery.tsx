import React, { useState, useEffect } from "react";
import GalleryStyled from "./Gallery.styles";
import Image from "./Image";

type ImageProps = {
  src: string;
  alt: string;
};

const Gallery = () => {
  const [images, setImages] = useState<ImageProps[]>([]);

  useEffect(() => {
    setImages([
      {
        src:
          "https://images.unsplash.com/photo-1608170825938-a8ea0305d46c?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        alt: "",
      },
      {
        src:
          "https://images.unsplash.com/photo-1608142172696-935a6fe39d48?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        alt: "",
      },
      {
        src:
          "https://images.unsplash.com/photo-1608161316733-7ffcbc8d1aa0?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        alt: "",
      },
      {
        src:
          "https://images.unsplash.com/photo-1608161316733-7ffcbc8d1aa0?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        alt: "",
      },
    ]);
  }, []);

  return (
    <GalleryStyled>
      {images.map((image, index) => {
        return <Image key={index} src={image.src} alt={image.alt} />;
      })}
    </GalleryStyled>
  );
};

export default Gallery;
