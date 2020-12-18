import React from "react";
import HomeStyled from "./Home.styles";
import LikeButton from "../common/LikeButton/LikeButton";
import { IconButton } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import { motion } from "framer-motion";

const Home: React.FC = () => {
  return (
    <HomeStyled>
      <div className="images">
        <div className="image">
          <LikeButton />
          <motion.div
            className="remove-button"
            whileTap={{ scale: 1.5 }}
            whileHover={{ scale: 1.3 }}
          >
            <IconButton>
              <ClearIcon fontSize="large" />
            </IconButton>
          </motion.div>

          <img
            src="https://images.unsplash.com/photo-1608161316733-7ffcbc8d1aa0?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <div className="image">
          <img
            src="https://images.unsplash.com/photo-1601758125997-67e236238ab0?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <div className="image">
          <img
            src="https://images.unsplash.com/photo-1608161316733-7ffcbc8d1aa0?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <div className="image">
          <img
            src="https://images.unsplash.com/photo-1608170825938-a8ea0305d46c?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <div className="image">
          <img
            src="https://images.unsplash.com/photo-1608142172696-935a6fe39d48?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <div className="image">
          <img
            src="https://images.unsplash.com/photo-1608161316733-7ffcbc8d1aa0?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <div className="image">
          <img
            src="https://images.unsplash.com/photo-1608161316733-7ffcbc8d1aa0?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <div className="image">
          <img
            src="https://images.unsplash.com/photo-1608161316733-7ffcbc8d1aa0?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <div className="image">
          <img
            src="https://images.unsplash.com/photo-1608161316733-7ffcbc8d1aa0?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <div className="image">
          <img
            src="https://images.unsplash.com/photo-1608161316733-7ffcbc8d1aa0?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <div className="image">
          <img
            src="https://images.unsplash.com/photo-1608161316733-7ffcbc8d1aa0?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
      </div>
    </HomeStyled>
  );
};

export default Home;
