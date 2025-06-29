import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { ServiceCard } from './ServiceCard';
import { ServiceModel } from '../../model';

const mockServiceModel = {
  title: 'Nginx',
  address: 'http://localhost:3000',
} satisfies ServiceModel;

afterEach(() => {
  cleanup();
});

describe('ServiceCard', () => {
  describe('render', () => {
    it('should match snapshot.', () => {
      const { container } = render(<ServiceCard model={mockServiceModel} />);

      expect(container).toMatchSnapshot();
    });
  });

  it('should render the title', () => {
    render(<ServiceCard model={mockServiceModel} />);

    expect(screen.getByText(mockServiceModel.title)).toBeInTheDocument();
  });

  it('should render a correct link', () => {
    render(<ServiceCard model={mockServiceModel} />);
    const link = screen.getByRole('link', { name: /Nginx/i });

    expect(link).toHaveAttribute('href', mockServiceModel.address);
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
