import { FC, PropsWithChildren } from 'react';

import Container from '@components/Container';
import Breadcrumb from '@components/Breadcrumb';

import * as Styled from './Base.styled';

type Props = {
  breadcrumbs: Array<string>;
};

const Base: FC<PropsWithChildren<Props>> = ({
  children,
  breadcrumbs,
}): JSX.Element => (
  <Container>
    <Breadcrumb breadcrumbs={breadcrumbs} />
    <Styled.Wrapper>{children}</Styled.Wrapper>
  </Container>
);

export default Base;
