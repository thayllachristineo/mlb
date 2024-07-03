import { FC, PropsWithChildren } from 'react';

import Wrapper from './Container.styled';

const Container: FC<PropsWithChildren> = ({ children }) => (
  <Wrapper>
    <div>{children}</div>
  </Wrapper>
);

export default Container;
