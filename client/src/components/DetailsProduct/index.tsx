import { FC } from 'react';

import * as Styled from './DetailsProduct.styled';

import formatCurrencyPrice from '@utils/formatCurrencyPrice';

type Props = {
  picture: string;
  description: string;
  title: string;
  condition: string;
  soldQuantity: number;
  priceCurrency: string;
  priceAmount: number;
  priceDecimals: number;
  to: string;
};

const DetailsProduct: FC<Props> = ({
  picture,
  description,
  title,
  condition,
  soldQuantity,
  priceCurrency,
  priceAmount,
  priceDecimals,
  to,
}): JSX.Element => {
  return (
    <Styled.Wrapper>
      <div>
        <Styled.Image>
          <img src={picture} alt={title} />
        </Styled.Image>

        <Styled.Description>
          <h2>Descripción del producto</h2>
          <article>{description}</article>
        </Styled.Description>
      </div>

      <Styled.Infos>
        <Styled.Subtitle>
          <p>{condition}</p>
          <p>{soldQuantity} vendidos</p>
        </Styled.Subtitle>

        <Styled.Title>{title}</Styled.Title>
        {priceCurrency && (
          <Styled.Price>
            {formatCurrencyPrice(priceAmount, priceCurrency)}
            <span>{priceDecimals}</span>
          </Styled.Price>
        )}

        <Styled.Link to={to}>Comprar</Styled.Link>
      </Styled.Infos>
    </Styled.Wrapper>
  );
};

export default DetailsProduct;
