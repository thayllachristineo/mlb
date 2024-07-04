import styled from 'styled-components';
import { Link as LinkComponent } from 'react-router-dom';

import color from '@styles/color';
import font from '@styles/font';

const Wrapper = styled.div`
  grid-template-columns: 2fr 1fr;
  display: flex;
  flex-direction: column-reverse;
  @media (min-width: 596px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    padding: 4px;
  }
`;

const Image = styled.div`
  display: flex;
  justify-content: center;

  @media (min-width: 425px) {
    display: block;
    img {
      width: 264px;
    }
  }

  img {
    border-radius: 4px;
    object-fit: contain;
    width: 220px;
  }
`;

const Description = styled.div`
  h2 {
    font-size: ${font.size.large};
  }

  p {
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    color: ${color.gray.regular};
    display: -webkit-box;
    font-size: ${font.size.small};
    margin-top: 4px;
    overflow: hidden;
  }

  @media (min-width: 596px) {
    margin-top: 24px;
    text-overflow: initial;

    h2 {
      font-size: ${font.size.xlarge};
      font-weight: ${font.weight.regular};
      padding-bottom: 8px;
    }

    p {
      font-size: ${font.size.medium};
      font-weight: ${font.weight.light};
      -webkit-box-orient: initial;
    }
  }
`;

const Infos = styled.div`
  margin-bottom: 16px;
  @media (min-width: 596px) {
    margin: 0 16px;
    padding: 0 8px;
  }
`;

const Title = styled.h1`
  color: ${color.black.lighten};
  font-size: ${font.size.xxlarge};
  margin-bottom: 16px;
`;

const Subtitle = styled.div`
  color: ${color.black.darken};
  display: flex;
  font-size: ${font.size.small};
  margin: 16px 0 8px;

  p:first-child {
    text-transform: uppercase;

    &:after {
      content: '-';
      margin: 0 4px;
    }
  }
`;

const Price = styled.p`
  color: ${color.black.lighten};
  display: flex;
  font-size: ${font.size.xxxlarge};
  font-weight: ${font.weight.regular};
  list-style-type: none;
  margin-bottom: 32px;
  padding: 0;

  span {
    font-size: ${font.size.medium};
    margin-top: 2px;

    @media (min-width: 425px) {
      font-size: ${font.size.large};
      margin-top: 6px;
    }
  }

  @media (min-width: 425px) {
    font-size: ${font.size.xxxxlarge};
    font-weight: ${font.weight.regular};
  }
`;

const Link = styled(LinkComponent)`
  background-color: ${color.blue.lighten};
  border-color: transparent;
  border-radius: 4px;
  box-shadow: 0 0 0 0 ${color.white};
  color: ${color.white};
  cursor: pointer;
  font-weight: ${font.weight.bold};
  height: 42px;
  padding: 8px 16px;
  text-decoration: none;
  width: 100%;

  &:hover {
    border-color: transparent;
    color: ${color.white};
    outline: none;
  }

  &:focus {
    outline: 0;
  }

  &:active {
    background-color: ${color.blue.darken};
    border-color: transparent;
    color: ${color.white};
  }
`;

export { Wrapper, Image, Description, Infos, Title, Subtitle, Price, Link };
