import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';

import Search from '.';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

jest.mock('../../assets/search.svg', () => 'SearchIcon');

describe('<Search />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the search input and button', () => {
    render(
      <MemoryRouter>
        <Search />
      </MemoryRouter>,
    );

    const input = screen.getByPlaceholderText('Nunca dejes de buscar');
    expect(input).toBeInTheDocument();

    const button = screen.getByAltText('search icon');
    expect(button).toBeInTheDocument();
  });

  it('updates the input value on change', async () => {
    render(
      <MemoryRouter>
        <Search />
      </MemoryRouter>,
    );

    const input = screen.getByPlaceholderText('Nunca dejes de buscar');
    await userEvent.type(input, 'iphone');

    expect(input).toHaveValue('iphone');
  });

  it('navigates to search results on button click', async () => {
    render(
      <MemoryRouter>
        <Search />
      </MemoryRouter>,
    );

    const input = screen.getByPlaceholderText('Nunca dejes de buscar');
    await userEvent.type(input, 'iphone');

    const button = screen.getByAltText('search icon');
    await userEvent.click(button);

    expect(mockedUsedNavigate).toHaveBeenCalledWith('/items?search=iphone');
  });

  it('navigates to search results on Enter key press', async () => {
    render(
      <MemoryRouter>
        <Search />
      </MemoryRouter>,
    );

    const input = screen.getByPlaceholderText('Nunca dejes de buscar');
    await userEvent.type(input, 'iphone');
    await fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' }); // Simula o Enter

    expect(mockedUsedNavigate).toHaveBeenCalledWith('/items?search=iphone');
  });

  it('does not navigate if search term is empty', () => {
    render(
      <MemoryRouter>
        <Search />
      </MemoryRouter>,
    );

    const button = screen.getByAltText('search icon');
    userEvent.click(button);

    expect(mockedUsedNavigate).not.toHaveBeenCalled();
  });
});
