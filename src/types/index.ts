import { ActionType } from "typesafe-actions";
import * as actions from "../actions/gallery.actions";

export type GalleryActions = ActionType<typeof actions>;

export type GalleryState = {
  searchKey: string;
};

export enum Constants {
  SEARCH_ITEM = "SEARCH_ITEM",
}
