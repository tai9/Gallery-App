import styled from "styled-components";

type Porps = {
  columCount: number;
};

const GalleryStyled = styled.div<Porps>`
  #photos {
    /* Prevent vertical gaps */
    line-height: 0;
    column-count: ${(props) => props.columCount};
    column-gap: 0px;
  }

  @media (max-width: 1200px) {
    #photos {
      column-count: ${(props) => props.columCount};
    }
  }
  @media (max-width: 1000px) {
    #photos {
      column-count: ${(props) => props.columCount};
    }
  }
  @media (max-width: 800px) {
    #photos {
      -moz-column-count: 2;
      -webkit-column-count: 2;
      column-count: ${(props) => (props.columCount === 3 ? 2 : 1)};
    }
  }
  @media (max-width: 400px) {
    #photos {
      -moz-column-count: 1;
      -webkit-column-count: 1;
      column-count: 1;
    }
  }
`;
export default GalleryStyled;
