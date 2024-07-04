import styled from 'styled-components';

import color from '@styles/color';

export const Banner = styled.div`
  background-color: ${color.yellow};
  height: 225px;

  @media only screen and (min-width: 768px) {
    height: 335px;
    padding-top: 36px;
  }
`;

export const Image = styled.img`
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  width: 100%;

  @media only screen and (min-width: 768px) {
    width: 100vw;
  }
`;

export const CardContainer = styled.div`
  position: relative;
`;

export const CardGroup = styled.div`
  display: flex;
  margin: 0 auto;
  overflow-x: scroll;
  position: absolute;
  top: -48px;
  width: 100%;

  @media only screen and (min-width: 768px) {
    overflow-x: auto;
    top: -72px;
  }
`;
