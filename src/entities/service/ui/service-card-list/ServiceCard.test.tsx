import { render, screen } from '@testing-library/react';
import { describe, it, expect, afterEach } from 'vitest';
import { ServiceCardList } from './ServiceCardList';
import { ServiceModel } from '../../model';
import { cleanup } from '@testing-library/react';

const mockServices: ServiceModel[] = [
  { title: 'Nginx', address: 'http://localhost:3000' },
  { title: 'Plex', address: 'http://localhost:4000' },
];

afterEach(() => {
  cleanup();
});

describe('ServiceCardList', () => {
  describe('render', () => {
    it('should match snapshot', () => {
      const { container } = render(<ServiceCardList services={mockServices} />);

      expect(container).toMatchSnapshot();
    });

    it('should render all service cards', () => {
      render(<ServiceCardList services={mockServices} />);

      for (const service of mockServices) {
        expect(screen.getByText(service.title)).toBeInTheDocument();
      }
    });
  });
});
