import { render, screen } from '@testing-library/react';

import CardProduct from '.';

import formatCurrencyPrice from '@utils/formatCurrencyPrice';

jest.mock('@utils/formatCurrencyPrice', () => ({
  __esModule: true,
  default: jest.fn().mockReturnValue('formattedPrice'),
}));

describe('CardProduct', () => {
  it('renders product information correctly', () => {
    const props = {
      thumbnail: 'https://example.com/image.jpg',
      priceCurrency: 'ARS',
      priceAmount: 328999,
      priceDecimals: 0,
      title: 'Product Title',
      sellerCity: 'São Paulo',
    };

    (formatCurrencyPrice as jest.Mock).mockReturnValue('328.999');

    render(<CardProduct {...props} />);

    const image = screen.getByRole('img', { name: props.title });
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', props.thumbnail);

    const price = screen.getByText('ARS 328.999');
    expect(price).toBeInTheDocument();

    const decimals = screen.getByText('0');
    expect(decimals).toBeInTheDocument();

    const title = screen.getByRole('heading', { level: 1 });
    expect(title).toHaveTextContent(props.title);

    const sellerCity = screen.getByText(props.sellerCity);
    expect(sellerCity).toBeInTheDocument();
  });
});
