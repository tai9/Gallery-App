import { IconButton } from "@material-ui/core";
import { motion } from "framer-motion";
import React from "react";
import LikeButton from "../common/LikeButton/LikeButton";
import ClearIcon from "@material-ui/icons/Clear";
import ImageStyled from "./Image.styles";

type ImageProps = {
  src: string;
  alt: string;
  handleRemove?: () => any;
};

const Image: React.FC<ImageProps> = ({ src, alt, handleRemove }) => {
  return (
    <ImageStyled>
      <LikeButton index={src} />
      <motion.div
        className="remove-button"
        whileTap={{ scale: 1.5 }}
        whileHover={{ scale: 1.2 }}
        onClick={handleRemove}
      >
        <IconButton>
          <ClearIcon fontSize="large" />
        </IconButton>
      </motion.div>

      <motion.img className="image" src={src} alt={alt} />
      <div className="overlay">
        <div className="text">Hello World</div>
      </div>
    </ImageStyled>
  );
};

export default Image;
