import Axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

const api = process.env.REACT_APP_UNSPLASH_URL;
const secret = process.env.REACT_APP_UNSPLASH_KEY;

export type ImageApiProps = {
  id?: string;
  description: string;
  alt_description: string;
  urls: {
    regular: string;
  };
  likes?: number;
};

export const useFetchImages = (page: number, key: string) => {
  console.log(key);

  const [images, setImages] = useState<ImageApiProps[]>([]);
  useEffect(() => {
    const url = key === "" ? "photos?" : `search/photos/?query=${key}&`;
    Axios.get(`${api}/${url}client_id=${secret}&page=${page}`)
      .then((res) => {
        key === "" ? fetchRandom(res) : fetchSearch(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [page, key]);

  const fetchRandom = (res: AxiosResponse<any>) => {
    setImages([...images, ...res.data]);
  };

  const fetchSearch = (res: AxiosResponse<any>) => {
    page > 1
      ? setImages([...images, ...res.data.results])
      : setImages([...res.data.results]);
  };

  return [images, setImages] as const;
};
