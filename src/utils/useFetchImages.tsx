import Axios from "axios";
import { useEffect, useState } from "react";

const url = process.env.REACT_APP_UNSPLASH_URL;
const secret = process.env.REACT_APP_UNSPLASH_KEY;

type ImageProps = {
  id: string;
  description: string;
  alt_description: string;
  urls: {
    regular: string;
  };
  likes: number;
};

export const useFetchImages = (page: number) => {
  const [images, setImages] = useState<ImageProps[]>([]);
  useEffect(() => {
    Axios.get(`${url}/?client_id=${secret}&page=${page}`)
      .then((res) => {
        setImages([...images, ...res.data]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [page]);

  return [images, setImages] as const;
};
