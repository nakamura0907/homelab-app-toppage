import type { Meta, StoryObj } from '@storybook/nextjs';
import { ServiceCardList } from './ServiceCardList';
import { ServiceModel } from '../../model';

const meta = {
  component: ServiceCardList,
} satisfies Meta<typeof ServiceCardList>;

export default meta;
type Story = StoryObj<typeof ServiceCardList>;

const mockServices: ServiceModel[] = [
  {
    title: 'Nginx',
    address: 'http://localhost:3000',
  },
  {
    title: 'Plex',
    address: 'http://localhost:4000',
  },
  {
    title: 'Pi-hole',
    address: 'http://localhost:5000',
  },
];

export const Primary: Story = {
  args: {
    services: mockServices,
  },
};

export const Empty: Story = {
  args: {
    services: [],
  },
};
