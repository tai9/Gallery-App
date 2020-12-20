import React, { useEffect, useState } from "react";
import { useFetchImages } from "../../utils/useFetchImages";
import GalleryStyled from "./Gallery.styles";
import Image from "./Image";

const Gallery = () => {
  const [images, setImages] = useFetchImages();
  const [columnCount, setColumnCount] = useState(3);

  useEffect(() => {
    if (images && images.length < 3) {
      setColumnCount(1);
    } else if (images && images.length < 5) {
      setColumnCount(2);
    }
  }, [images]);

  const handleRemove = (index: number) => {
    if (images) {
      setImages([
        ...images.slice(0, index),
        ...images.slice(index + 1, images.length),
      ]);
    }
  };

  return (
    <GalleryStyled columCount={columnCount}>
      <section id="photos">
        {images?.map((image, index) => {
          return (
            <Image
              key={index}
              src={image.urls.regular}
              alt={image.alt_description}
              handleRemove={() => handleRemove(index)}
            />
          );
        })}
      </section>
    </GalleryStyled>
  );
};

export default Gallery;
