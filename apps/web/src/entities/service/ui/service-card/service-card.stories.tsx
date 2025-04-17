import type { Meta, StoryObj } from '@storybook/react';
import { ServiceCard } from './service-card';
import { ServiceModel } from '../../types';

const meta: Meta<typeof ServiceCard> = {
    title: 'Entities/Service/ServiceCard',
    component: ServiceCard,
    tags: ['autodocs'],
    argTypes: {
        model: {
            control: 'object',
            description: 'サービス情報',
        },
    },
};

export default meta;
type Story = StoryObj<typeof ServiceCard>;

const defaultService: ServiceModel = {
    title: 'Proxmox VE',
    address: 'https://192.168.0.200:8006',
};

export const Default: Story = {
    args: {
        model: defaultService,
    },
};

export const LongTitle: Story = {
    args: {
        model: {
            title: '非常に長いタイトルのサービス名が入ります。最大でどのくらい表示されるか確認しましょう。',
            address: 'https://example.com',
        },
    },
};

export const DifferentService: Story = {
    args: {
        model: {
            title: 'Home Assistant',
            address: 'https://192.168.0.201:8123',
        },
    },
};
