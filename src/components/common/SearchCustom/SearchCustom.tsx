import { motion } from "framer-motion";
import React from "react";
import { useStyles } from "./SearchCustom.styles";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";

const SearchCustom = () => {
  const classes = useStyles();
  return (
    <motion.div className={classes.search} whileHover={{ scale: 1.1 }}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        autoFocus
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ "aria-label": "search" }}
      />
    </motion.div>
  );
};

export default SearchCustom;
