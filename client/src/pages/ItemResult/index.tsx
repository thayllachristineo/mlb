import { FC, useContext, useEffect, useState } from 'react';

import Base from '@pages/Base';

import Container from '@components/Container';
import CardProduct from '@components/CardProduct';
import Spinner from '@components/Spinner';
import TextMessage from '@components/TextMessage';

import useQuery from '@hooks/useQuery';

import { AppContext } from '@contexts/AppContext';
import ContextType, { Data } from '@contexts/AppContext.types';

import searchProducts from '@services/searchProduct';

import * as S from './ItemResult.styled';

const ItemsResult: FC = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const queryParam = useQuery().get('search') ?? '';

  const { data, setSearchResult } = useContext<ContextType>(AppContext);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);

        const result = await searchProducts(queryParam);

        if (result) {
          const { products, breadcrumbs }: Data = result;
          setSearchResult([...breadcrumbs, queryParam], products);
        }
      } catch (error) {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [queryParam]);

  if (isLoading)
    return (
      <Container>
        <Spinner />
      </Container>
    );

  if (hasError)
    return (
      <Container>
        <TextMessage>some error ocurred :/</TextMessage>
      </Container>
    );

  if (!data.products.length)
    return (
      <Container>
        <TextMessage>404 | There's nothing here!</TextMessage>
      </Container>
    );

  return (
    <Base breadcrumbs={data.breadcrumbs}>
      <ul>
        {data.products.map(product => (
          <S.Link to={`/items/${product.id}`} key={product.id}>
            <CardProduct
              thumbnail={product.picture}
              title={product.title}
              sellerCity={product.sellerCity}
              priceCurrency={product.price.currency}
              priceAmount={product.price.amount}
              priceDecimals={product.price.decimals}
            />
          </S.Link>
        ))}
      </ul>
    </Base>
  );
};

export default ItemsResult;
