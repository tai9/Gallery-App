import { IconButton } from "@material-ui/core";
import { motion } from "framer-motion";
import React from "react";
import LikeButton from "../common/LikeButton/LikeButton";
import ClearIcon from "@material-ui/icons/Clear";
import ImageStyled from "./Image.styles";
import { ImageApiProps } from "../../utils/hook/useFetchImages";

type ImageProps = {
  handleRemove?: () => any;
};

const Image: React.FC<ImageApiProps & ImageProps> = ({
  urls,
  alt_description,
  handleRemove,
}) => {
  return (
    <ImageStyled>
      <LikeButton index={urls.regular} />
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

      <motion.img className="image" src={urls.regular} alt={alt_description} />
      <div className="overlay">
        <div className="text">Hi! 👋👋</div>
      </div>
    </ImageStyled>
  );
};

export default Image;
