import { IconButton } from "@material-ui/core";
import { motion } from "framer-motion";
import React from "react";
import LikeButton from "../common/LikeButton/LikeButton";
import ClearIcon from "@material-ui/icons/Clear";
import ImageStyled from "./Image.styles";

type ImageProps = {
  src: string;
  alt: string;
};

const Image: React.FC<ImageProps> = ({ src, alt }) => {
  return (
    <ImageStyled>
      <LikeButton index={src} />
      <motion.div
        className="remove-button"
        whileTap={{ scale: 1.5 }}
        whileHover={{ scale: 1.2 }}
      >
        <IconButton>
          <ClearIcon fontSize="large" />
        </IconButton>
      </motion.div>

      <img src={src} alt={alt} />
    </ImageStyled>
  );
};

export default Image;
