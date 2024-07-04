import { Link as LinkComponent } from 'react-router-dom';
import styled from 'styled-components';

import color from '@styles/color';
import font from '@styles/font';

const Navigation = styled.nav`
  background-color: ${color.yellow};
  display: flex;
  justify-content: center;
  padding: 12px;
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
  align-items: center;
  border-radius: 0 4px 4px 0;
  border: none;
  cursor: pointer;
  display: flex;
  padding: 8px;

  &:active,
  &:focus {
    border: none;
    outline: none;
  }

  &:disabled {
    background-color: ${color.gray.lighten};
    cursor: not-allowed;
  }

  img {
    height: 16px;
  }
`;

export { Navigation, Content, Link, Logo, Input, Icon };
