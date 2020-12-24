import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  .backdrop{
    color: #fff;
    z-index: 1201;
  }

  a:visited{
    color:black
  }

  .form-item .MuiFormLabel-root,
  .form-item .MuiInputBase-root {
      font-size: larger;
    }
  }

  .h-100 {
    height: 100%;
  }
  .vertical-wrapper {
    display: table;
    width: 100%;
    height: 100%;
  }
  .vertical-cell {
    display: table-cell;
    vertical-align: middle;
  }

  .center-block {
    width: 100%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    float: none !important;
  }

  .text-center {
    text-align: center;
    margin-bottom: 24px;
  }

  .text-center h1 {
    letter-spacing: 0.5rem;
  }

  .text-center img {
    width: 140px;
    height: 70px;
  }

  .ml-12 {
    margin-left: 12px;
  }

  .form-separator {
    margin: 24px 0;
    text-align: center;
  }

  .form-item {
    margin-bottom: 24px;
    display: flex;
    justify-content: space-between;
  }

  .color-black {
    background-color: #000;
    color: #fff;
  }

  .color-black:hover {
    background-color: rgb(0 0 0 / 0.77);
  }

  .btn-facebook button {
    background-color: #1778f2 !important;
    border-radius: 4px;
    max-width: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .btn-facebook .firebaseui-container {
    max-width: none;
  }

  .btn-facebook .firebaseui-container {
    max-width: none;
  }

  .btn-facebook .firebaseui-card-content {
    padding: 0;
  }

  .btn-facebook button:hover {
    background-color: #0968df !important;
  }

  .txt-transform {
    text-transform: none;
  }

  .mr-0-10 {
    margin: 0 10px;
  }

  .error-message {
    text-align: center;
    color: red;
    font-size: medium;
  }

  @media only screen and (min-width: 768px) {
    .center-block {
      width: 50%;
    }
  }

  @media only screen and (min-width: 992px) {
    .center-block {
      width: 30%;
    }
  }
`;
