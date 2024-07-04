import { FC } from 'react';

import * as Styled from './Card.styled';

type Props = {
  title: string;
  image: {
    src: string;
    alt: string;
  };
  description: string;
  link: {
    text: string;
    href: string;
  };
};
const Card: FC<Props> = ({
  title,
  image: { src, alt },
  description,
  link: { text, href },
}) => {
  return (
    <Styled.Card>
      <Styled.Title>{title}</Styled.Title>
      <Styled.ImageGroup>
        <Styled.Image src={src} alt={alt} />
      </Styled.ImageGroup>
      <Styled.Description>
        <Styled.Text>{description}</Styled.Text>
      </Styled.Description>
      <Styled.Footer>
        <Styled.Link href={href}>{text}</Styled.Link>
      </Styled.Footer>
    </Styled.Card>
  );
};

export default Card;
