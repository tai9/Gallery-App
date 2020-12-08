import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;

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
    width: 40%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    float: none !important;
  }

  .text-center {
    text-align: center;
    margin-bottom: 24px;
  }

  .text-center img {
    width: 140px;
    height: 70px;
  }

  .ml-12 {
    margin-left: 12px;
  }

  .form-separator {
    margin: 36px 0;
    text-align: center;
  }

  .form-item {
    margin-bottom: 24px;
    display:flex;
    justify-content: space-between;
  }

  .flex-end{
    justify-content: flex-end;
  }

  .color-black {
    background-color: #000;
    color: #fff;
  }

  .color-black:hover {
    background-color: rgb(0 0 0 / 0.77);
  }

  .btn-facebook {
    background-color: #1778f2;
  }

  .btn-facebook:hover {
    background-color: #0968df;
  }

  .txt-transform {
    text-transform: none;
    }

    .mr-0-10{
        margin: 0 10px;
    }
  }
`;
