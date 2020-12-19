import styled from "styled-components";

const ImageStyled = styled.div`
  position: relative;
  overflow: hidden;
  display: inline-block;
  border: 1px solid #d7d7d7;
  padding: 5px;
  margin: 5px;

  :hover {
    border: 1px solid rgb(170 184 194);
    .remove-button,
    .like-button {
      opacity: 1;
    }
    .overlay {
      opacity: 1;
    }
  }

  .remove-button,
  .like-button {
    opacity: 0;
    transition: all 0.5s ease;
  }

  .remove-button {
    position: absolute;
    right: 10px;
    top: 2px;
    z-index: 10;

    button {
      color: rgb(170 184 194);
    }

    .MuiIconButton-root:hover {
      background-color: rgba(0, 0, 0, 0);
    }
  }

  .image {
    width: 100%;
    height: auto;
    cursor: pointer;
    transition: all 0.5s ease;
    &:hover {
    }
  }

  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: 0.5s ease;
    background-color: rgba(170, 184, 194, 0.3);
  }

  .text {
    color: white;
    font-weight: bold;
    font-size: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
  }
`;
export default ImageStyled;
