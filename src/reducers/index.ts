import { combineReducers } from "redux";
import { GalleryState } from "../types";
import { galleryReducer } from "./galleryReducer";

export type RootState = {
  gallery: GalleryState;
};

export const rootReducer = combineReducers({
  gallery: galleryReducer,
});
