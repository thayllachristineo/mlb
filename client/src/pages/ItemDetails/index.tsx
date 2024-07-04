import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';

import Base from '@pages/Base';

import Container from '@components/Container';
import DetailsProduct from '@components/DetailsProduct';
import Spinner from '@components/Spinner';
import TextMessage from '@components/TextMessage';

import { AppContext } from '@contexts/AppContext';

import detailsProducts from '@services/detailsProduct';

const INITIAL_VALUE = {
  picture: '',
  description: '',
  title: '',
  sold_quantity: 0,
  condition: '',
  price: {
    currency: '',
    amount: 0,
    decimals: 0,
  },
};

interface Price {
  currency: string;
  amount: number;
  decimals: number;
}

interface Details {
  picture: string;
  description: string;
  title: string;
  sold_quantity: number;
  condition: string;
  price: Price;
}

type Params = {
  id: string;
};

const ItemDetails = () => {
  const [productDetails, setProductDetails] = useState<Details>(INITIAL_VALUE);

  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const {
    data: { breadcrumbs },
  } = useContext(AppContext);

  const { id } = useParams<Params>();

  const productID = id?.split('MLA')[1];
  const urlToBuy = `https://api.mercadolibre.com/items/${productID}`;

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);

        const result = await detailsProducts(id as string);

        if (result) setProductDetails(result);
      } catch (error) {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [id]);

  if (isLoading)
    return (
      <Container>
        <Spinner />
      </Container>
    );

  if (hasError)
    return (
      <Container>
        <TextMessage>
          some error ocurred :/
        </TextMessage>
      </Container>
    );

  if (!productDetails)
    return (
      <Container>
        <TextMessage>there's nothing here! :/</TextMessage>
      </Container>
    );

  return (
    <Base breadcrumbs={breadcrumbs}>
      <DetailsProduct
        picture={productDetails.picture}
        description={productDetails.description}
        soldQuantity={productDetails.sold_quantity}
        condition={productDetails.condition}
        title={productDetails.title}
        priceCurrency={productDetails.price.currency}
        priceAmount={productDetails.price.amount}
        priceDecimals={productDetails.price.decimals}
        to={urlToBuy}
      />
    </Base>
  );
};

export default ItemDetails;
