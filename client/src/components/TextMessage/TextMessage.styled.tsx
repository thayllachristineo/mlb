import styled from 'styled-components';

import color from '@styles/color';
import font from '@styles/font';

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  height: 60vh;
  justify-content: center;

  h1 {
    color: ${color.black};
    font-weight: ${font.weight.medium};
  }
`;

export { Wrapper };
