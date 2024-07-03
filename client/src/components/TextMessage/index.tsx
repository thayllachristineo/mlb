import { FC } from 'react';

import * as Styled from './TextMessage.styled';

type Props = {
  text: string;
};

const TextMessage: FC<Props> = ({ text }): JSX.Element => (
  <Styled.Wrapper>
    <h1>{text}</h1>
  </Styled.Wrapper>
);

export default TextMessage;
