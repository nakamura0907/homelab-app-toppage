import type { Meta, StoryObj } from '@storybook/nextjs';
import { ServiceCard } from './ServiceCard';

const meta = {
  component: ServiceCard,
} satisfies Meta<typeof ServiceCard>;

export default meta;
type Story = StoryObj<typeof ServiceCard>;

export const Primary: Story = {
  args: {
    model: {
      title: 'mock service',
      address: 'http://localhost:3000',
    },
  },
};
