import React from "react";
import { useStyles } from "./SearchCustom.styles";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";

type Props = {
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchCustom: React.FC<Props> = ({ handleChange }) => {
  const classes = useStyles();

  handleChange = (event) => {
    console.log(event.currentTarget.value);
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

export default SearchCustom;
