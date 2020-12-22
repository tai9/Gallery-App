import React, { useEffect, useState } from "react";
import { useFetchImages } from "../../utils/hook/useFetchImages";
import GalleryStyled from "./Gallery.styles";
import Image from "./Image";
import InfiniteScroll from "react-infinite-scroll-component";
// import Loading from "../../pages/Loading/Loading";
import CircularProgress from "@material-ui/core/CircularProgress";
import { RootState } from "../../reducers";
import { connect } from "react-redux";

const mapStateToProps = ({ gallery }: RootState) => {
  return {
    searchKey: gallery.searchKey,
  };
};

type ReduxType = ReturnType<typeof mapStateToProps>;

const Gallery: React.FC<ReduxType> = ({ searchKey }) => {
  const [page, setPage] = useState<number>(1);
  const [key, setKey] = useState<string>("");
  const [images, setImages] = useFetchImages(page, key);
  const [columnCount, setColumnCount] = useState(5);

  useEffect(() => {
    setKey(searchKey);
    setPage(1);
  }, [searchKey]);

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
              urls={image.urls}
              alt_description={image.alt_description}
              description={image.description}
              handleRemove={() => handleRemove(index)}
            />
          );
        })}
      </InfiniteScroll>
    </GalleryStyled>
  );
};

export default connect(mapStateToProps)(Gallery);
