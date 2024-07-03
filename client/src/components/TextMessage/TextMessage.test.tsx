import { render, screen } from '@testing-library/react';
import TextMessage from '.';

describe('<TextMessage />', () => {
  it('renders text message correctly', () => {
    const text = 'Hello, this is a test message!';

    render(<TextMessage>{text}</TextMessage>);

    const textElement = screen.getByText(text);
    expect(textElement).toBeInTheDocument();
  });
});
