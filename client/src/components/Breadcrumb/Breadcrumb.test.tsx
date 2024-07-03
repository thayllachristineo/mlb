import { render, screen } from '@testing-library/react';
import Breadcrumb from './index';

describe('<Breadcrumb />', () => {
  it('renders breadcrumbs correctly', () => {
    const breadcrumbs = ['Home', 'Categoria', 'Produto'];
    render(<Breadcrumb breadcrumbs={breadcrumbs} />);

    const listElement = screen.getByRole('list');
    expect(listElement).toBeInTheDocument();

    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(breadcrumbs.length);

    listItems.forEach((item, index) => {
      expect(item).toHaveTextContent(breadcrumbs[index]);
    });
  });
});
