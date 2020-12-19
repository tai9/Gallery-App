import styled from "styled-components";

const ImageStyled = styled.div`
  position: relative;
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

    button {
      color: rgb(170 184 194);
    }

    .MuiIconButton-root:hover {
      background-color: rgba(0, 0, 0, 0);
    }
  }

  img {
    width: 100%;
    height: auto;
  }
`;
export default ImageStyled;
