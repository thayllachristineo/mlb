import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

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
    onClick: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
    (formatCurrencyPrice as jest.Mock).mockReturnValue('328.999');
  });

  it('renders product details correctly', () => {
    render(<DetailsProduct {...props} />);

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

    const buyButton = screen.getByRole('button', { name: 'Comprar' });
    expect(buyButton).toBeInTheDocument();
  });

  it('calls onClick when buy button is clicked', async () => {
    render(<DetailsProduct {...props} />);
    const buyButton = screen.getByRole('button', { name: 'Comprar' });

    await userEvent.click(buyButton);
    expect(props.onClick).toHaveBeenCalledTimes(1);
  });

  it('does not render price if priceCurrency is undefined', () => {
    render(<DetailsProduct {...props} priceCurrency={undefined} />);
    expect(screen.queryByText('ARS 199,90')).not.toBeInTheDocument();
  });
});
