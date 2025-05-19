import type { Meta, StoryObj } from '@storybook/react';
import { DraggableServiceList } from './draggable-service-list';
import { ServiceModel } from '@/entities/service';

const meta: Meta<typeof DraggableServiceList> = {
    title: 'Features/DraggableServiceList',
    component: DraggableServiceList,
    tags: ['autodocs'],
    argTypes: {
        services: {
            control: 'object',
            description: 'ドラッグ&ドロップ可能なサービス一覧',
        },
    },
};

export default meta;
type Story = StoryObj<typeof DraggableServiceList>;

const defaultServices: ServiceModel[] = [
    {
        title: 'Proxmox VE',
        address: 'https://192.168.0.200:8006',
    },
    {
        title: 'Home Assistant',
        address: 'https://192.168.0.201:8123',
    },
    {
        title: 'Portainer',
        address: 'https://192.168.0.202:9000',
    },
];

export const Default: Story = {
    args: {
        services: defaultServices,
    },
};
