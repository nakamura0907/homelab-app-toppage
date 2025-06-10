import type { Meta, StoryObj } from '@storybook/nextjs';

import { BaseLayout } from './BaseLayout';

const meta = {
  component: BaseLayout,
} satisfies Meta<typeof BaseLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: <span>BaseLayout</span>,
  },
};
