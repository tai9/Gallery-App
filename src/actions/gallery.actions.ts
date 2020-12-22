import { action } from "typesafe-actions";
import { Constants } from "../types/index";

export const searchImages = (key: string) => {
  return action(Constants.SEARCH_ITEM, { key });
};
