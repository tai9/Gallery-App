import React, { Dispatch } from "react";
import { useStyles } from "./SearchCustom.styles";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import { GalleryActions } from "../../../types/index";
import * as actions from "../../../actions/gallery.actions";
import { connect } from "react-redux";
import { useDebounce } from "../../../utils/hook/useDebounce";

const mapStateDispatchToProps = (dispatch: Dispatch<GalleryActions>) => {
  return {
    searchImage: (key: string) => dispatch(actions.searchImages(key)),
  };
};

type Props = {
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

type ReduxType = Props & ReturnType<typeof mapStateDispatchToProps>;

const SearchCustom: React.FC<ReduxType> = ({ handleChange, searchImage }) => {
  const classes = useStyles();

  const debounce = useDebounce();
  handleChange = (event) => {
    const text = event.currentTarget.value;
    debounce(() => searchImage(text));
  };
  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        autoFocus
        placeholder="Search photos..."
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        onChange={handleChange}
      />
    </div>
  );
};

export default connect(null, mapStateDispatchToProps)(SearchCustom);
