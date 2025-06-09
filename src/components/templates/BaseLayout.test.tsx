import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { BaseLayout } from './BaseLayout';

describe('BaseLayout', () => {
  describe('render', () => {
    it('should have header tag.', () => {
      const { container } = render(<BaseLayout>test</BaseLayout>);

      const header = container.querySelector('header');
      expect(header).toBeInTheDocument();
    });
  });
  it('should match snapshot.', () => {
    const { container } = render(<BaseLayout>test</BaseLayout>);

    expect(container).matchSnapshot();
  });
});
