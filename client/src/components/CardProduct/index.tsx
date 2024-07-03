import { FC } from 'react';

import * as Styled from './CardProduct.styled';

import formatCurrencyPrice from '@utils/formatCurrencyPrice';

type Props = {
  thumbnail: string;
  priceCurrency: string;
  priceAmount: number;
  priceDecimals: number;
  title: string;
  sellerCity: string;
};

const CardProduct: FC<Props> = ({
  thumbnail,
  title,
  priceCurrency,
  priceAmount,
  priceDecimals,
  sellerCity,
}): JSX.Element => (
  <Styled.Wrapper>
    <Styled.Image>
      <img src={thumbnail} alt={title} />
    </Styled.Image>

    <Styled.Content>
      <Styled.Price>
        {priceCurrency} {formatCurrencyPrice(priceAmount, priceCurrency)}
        <span>{priceDecimals}</span>
      </Styled.Price>

      <h1>{title}</h1>
    </Styled.Content>

    <Styled.Locale>
      <p>{sellerCity}</p>
    </Styled.Locale>
  </Styled.Wrapper>
);

export default CardProduct;
