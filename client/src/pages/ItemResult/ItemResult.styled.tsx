import styled from 'styled-components';
import { Link as LinkComponent } from 'react-router-dom';

const Link = styled(LinkComponent)`
  text-decoration: none;

  &:focus {
    outline: none;
  }
`;

export { Link };
