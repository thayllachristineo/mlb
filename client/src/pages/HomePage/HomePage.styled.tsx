import styled from 'styled-components';

import color from '@styles/color';

export const Banner = styled.div`
  background-color: ${color.yellow};
  padding-top: 36px;
`;

export const Image = styled.img`
  max-width: 100%;
  width: 100vw;
`;

export const CardContainer = styled.div`
  position: relative;
`;

export const CardGroup = styled.div`
  display: flex;
  position: absolute;
  top: -48px;
  margin: 0 auto;
  width: 100%;
  overflow-x: scroll;
  display: flex;
  justify-content: center;

  @media only screen and (min-width: 768px) {
    top: -72px;
    overflow-x: auto;
  }
`;
