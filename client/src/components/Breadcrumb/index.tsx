import { FC } from 'react';
import * as Styled from './Breadcrumb.styled';

type Props = {
  breadcrumbs: Array<string>;
};

const Breadcrumb: FC<Props> = ({ breadcrumbs }): JSX.Element => (
  <Styled.Wrapper>
    <Styled.List>
      {breadcrumbs.map((breadcrumb: string, id: number) => (
        <Styled.Item key={id}>{breadcrumb}</Styled.Item>
      ))}
    </Styled.List>
  </Styled.Wrapper>
);

export default Breadcrumb;
