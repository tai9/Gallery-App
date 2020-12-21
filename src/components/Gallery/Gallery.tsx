import React, { useEffect, useState } from "react";
import { useFetchImages } from "../../utils/useFetchImages";
import GalleryStyled from "./Gallery.styles";
import Image from "./Image";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "../../pages/Loading/Loading";
import CircularProgress from "@material-ui/core/CircularProgress";

const Gallery = () => {
  const [page, setPage] = useState(1);
  const [images, setImages] = useFetchImages(page);
  const [columnCount, setColumnCount] = useState(5);

  useEffect(() => {
    if (images.length !== 0) {
      if (images.length < 3) {
        setColumnCount(1);
      } else if (images.length < 5) {
        setColumnCount(2);
      }
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

  const ImageLoading: React.FC = () => {
    return (
      <div className="loading">
        <CircularProgress />
      </div>
    );
  };

  return (
    <GalleryStyled columCount={columnCount}>
      <InfiniteScroll
        dataLength={images ? images.length : 0}
        hasMore={true}
        next={() => setPage(page + 1)}
        loader={<ImageLoading />}
        className="photos"
      >
        {images.map((image, index) => {
          return (
            <Image
              key={index}
              src={image.urls.regular}
              alt={image.alt_description}
              handleRemove={() => handleRemove(index)}
            />
          );
        })}
      </InfiniteScroll>
    </GalleryStyled>
  );
};

export default Gallery;
