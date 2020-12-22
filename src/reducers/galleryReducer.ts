import { Constants, GalleryActions, GalleryState } from "../types/index";

const initialState: GalleryState = {
  searchKey: "",
};

export const galleryReducer = (
  state: GalleryState = initialState,
  action: GalleryActions
): GalleryState => {
  switch (action.type) {
    case Constants.SEARCH_ITEM: {
      return { searchKey: action.payload.key };
    }
    default:
      return state;
  }
};
