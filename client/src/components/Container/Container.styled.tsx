import styled from 'styled-components';

import color from '@styles/color';

const Wrapper = styled.div`
  align-items: center;
  background-color: ${color.gray.lighten};
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100vh;
  padding: 16px 16px 48px;
  width: 100%;

  > div {
    width: 80%;
  }
`;

export default Wrapper;
