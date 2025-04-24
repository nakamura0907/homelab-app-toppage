import type { Meta, StoryObj } from '@storybook/react';
import { RegisterServiceDialog } from './register-service-dialog';

const meta: Meta<typeof RegisterServiceDialog> = {
    title: 'Features/RegisterService/RegisterServiceDialog',
    component: RegisterServiceDialog,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof RegisterServiceDialog>;

export const Default: Story = {
    render: () => (
        <div className="w-[800px]">
            <RegisterServiceDialog />
        </div>
    ),
};
