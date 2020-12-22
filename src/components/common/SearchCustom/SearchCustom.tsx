import React, { Dispatch, useState } from "react";
import { useStyles } from "./SearchCustom.styles";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import { GalleryActions } from "../../../types/index";
import * as actions from "../../../actions/gallery.actions";
import { connect } from "react-redux";
import { useDebounce } from "../../../utils/hook/useDebounce";
import { IconButton } from "@material-ui/core";

const mapStateDispatchToProps = (dispatch: Dispatch<GalleryActions>) => {
  return {
    searchImage: (key: string) => dispatch(actions.searchImages(key)),
  };
};

type Props = {
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
};

type ReduxType = Props & ReturnType<typeof mapStateDispatchToProps>;

const SearchCustom: React.FC<ReduxType> = ({
  searchImage,
  handleChange,
  handleSubmit,
}) => {
  const [text, setText] = useState<string>("");
  const classes = useStyles();
  const debounce = useDebounce();

  handleChange = (event) => {
    const textInput = event.currentTarget.value;
    setText(textInput);
    debounce(() => searchImage(textInput));
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    debounce(() => searchImage(text));
  };
  return (
    <form onSubmit={handleSubmit} className={classes.search}>
      <IconButton className={classes.searchIcon} type="submit">
        <SearchIcon />
      </IconButton>
      <InputBase
        autoFocus
        placeholder="Search photos..."
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        name="searchInput"
        onChange={handleChange}
      />
    </form>
  );
};

export default connect(null, mapStateDispatchToProps)(SearchCustom);
