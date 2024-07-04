import styled from 'styled-components';

import color from '@styles/color';

export const Card = styled.div`
  background-color: ${color.white};
  border: 1px solid ${color.gray.lighten};
  border-radius: 6px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.12);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 265px;
  margin: 8px 4px;

  @media only screen and (min-width: 576px) {
    height: 285px;
    width: 250px;
  }
`;

export const Title = styled.h2`
  color: ${color.black.lighten};
  font-size: 14px;
  margin: 0;
  padding: 14px;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media only screen and (min-width: 768px) {
    font-size: 16px;
    padding: 16px;
  }
`;

export const ImageGroup = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 80px;

  @media only screen and (min-width: 768px) {
    height: 105px;
  }
`;

export const Image = styled.img`
  height: 60%;

  @media only screen and (min-width: 768px) {
    height: 100%;
  }
`;

export const Description = styled.div`
  height: 85px;

  @media only screen and (min-width: 768px) {
    height: 72px;
  }
`;

export const Text = styled.p`
  color: ${color.black.lighten};
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  padding: 14px;
  text-align: center;

  @media only screen and (min-width: 768px) {
    font-size: 14px;
    padding: 16px;
  }
`;

export const Footer = styled.div`
  align-items: center;
  background: ${color.blue.regular};
  border-radius: 4px;
  display: flex;
  justify-content: center;
  margin: 14px;
  max-height: 20px;

  @media only screen and (min-width: 768px) {
    margin: 16px;
    max-height: 24px;
  }
`;

export const Link = styled.a`
  align-items: center;
  background-color: transparent;
  border-color: transparent;
  color: ${color.blue.lighten};
  cursor: pointer;
  display: flex;
  font-size: 12px;
  line-height: 22px;
  text-decoration: none;

  @media only screen and (min-width: 768px) {
    line-height: 24px;
  }
`;
