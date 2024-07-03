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
  onClick: () => void;
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
  onClick,
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

        <Styled.Button onClick={onClick}>Comprar</Styled.Button>
      </Styled.Infos>
    </Styled.Wrapper>
  );
};

export default DetailsProduct;
