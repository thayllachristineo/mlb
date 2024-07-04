import { FC } from 'react';

import Container from '@components/Container';

import * as Styled from './HomePage.styled';
import Card from './components/Card';
import data from './card.data';

const HomePage: FC = () => {
  return (
    <div>
      <Styled.Banner>
        <Styled.Image
          src="https://http2.mlstatic.com/D_NQ_997463-MLA77165019410_072024-OO.webp"
          alt="Mercado Libre"
        />
      </Styled.Banner>
      <Container>
        <Styled.CardContainer>
          <Styled.CardGroup>
            {data.map(card => (
              <Card key={card.title} {...card} />
            ))}
          </Styled.CardGroup>
        </Styled.CardContainer>
      </Container>
    </div>
  );
};

export default HomePage;
