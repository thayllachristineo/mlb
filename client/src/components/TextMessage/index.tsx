import { FC, PropsWithChildren } from 'react';

import * as Styled from './TextMessage.styled';

const TextMessage: FC<PropsWithChildren> = ({ children }): JSX.Element => (
  <Styled.Wrapper>
    <h1>{children}</h1>
  </Styled.Wrapper>
);

export default TextMessage;
