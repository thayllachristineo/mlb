import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import DetailsProduct from '.';

import formatCurrencyPrice from '@utils/formatCurrencyPrice';

jest.mock('@utils/formatCurrencyPrice', () => ({
  __esModule: true,
  default: jest.fn().mockReturnValue('formattedPrice'),
}));

describe('DetailsProduct', () => {
  const props = {
    picture: 'https://example.com/product.jpg',
    description: 'Descrição do produto',
    title: 'Produto de teste',
    condition: 'Novo',
    soldQuantity: 10,
    priceCurrency: 'ARS',
    priceAmount: 328999,
    priceDecimals: 0,
    to: '/comprar-produto',
  };

  beforeEach(() => {
    jest.clearAllMocks();
    (formatCurrencyPrice as jest.Mock).mockReturnValue('328.999');
  });

  it('renders product details correctly', () => {
    render(
      <MemoryRouter>
        <DetailsProduct {...props} />
      </MemoryRouter>,
    );

    expect(screen.getByRole('img', { name: props.title })).toBeInTheDocument();
    expect(screen.getByText(props.description)).toBeInTheDocument();
    expect(screen.getByText(props.condition)).toBeInTheDocument();
    expect(
      screen.getByText(`${props.soldQuantity} vendidos`),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 1, name: props.title }),
    ).toBeInTheDocument();
    expect(screen.getByText('328.999')).toBeInTheDocument();

    const buyLink = screen.getByRole('link', { name: 'Comprar' });
    expect(buyLink).toBeInTheDocument();
    expect(buyLink).toHaveAttribute('href', props.to);
  });

  it('does not render price if priceCurrency is undefined', () => {
    render(
      <MemoryRouter>
        <DetailsProduct {...props} priceCurrency={undefined} />
      </MemoryRouter>,
    );
    expect(screen.queryByText('ARS 199,90')).not.toBeInTheDocument();
  });
});
