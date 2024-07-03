import { Link as LinkComponent } from 'react-router-dom';
import styled from 'styled-components';

import color from '@styles/color';
import font from '@styles/font';

const Wrapper = styled.nav`
  background-color: ${color.yellow};
  display: flex;
  font-family: 'Roboto', sans-serif;
  justify-content: center;
  padding: 10px;
`;

const Content = styled.div`
  display: flex;
  width: 80%;
`;

const Link = styled(LinkComponent)`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-right: 16px;
`;

const Logo = styled.img`
  width: 50px;
  @media (min-width: 425px) {
    width: 45px;
  }
`;

const Input = styled.input`
  background-color: ${color.white};
  border-radius: 4px 0 0 4px;
  border: none;
  color: ${color.gray.darken};
  font-size: ${font.size.small};
  padding: 8px 12px;
  width: 100%;

  &:active,
  &:focus {
    border: none;
    outline: none;
  }

  &::placeholder {
    font-size: ${font.size.small};
  }

  @media (min-width: 425px) {
    font-size: ${font.size.medium};
    &::placeholder {
      font-size: ${font.size.medium};
    }
  }
`;

const Icon = styled.button`
  background-color: ${color.gray.lighten};
  border-radius: 0 4px 4px 0;
  border: none;
  cursor: pointer;
  padding: 8px;

  &:active,
  &:focus {
    border: none;
    outline: none;
  }

  img {
    height: 16px;
  }
`;

export { Wrapper, Content, Link, Logo, Input, Icon };
