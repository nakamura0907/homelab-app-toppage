import type { Meta, StoryObj } from '@storybook/react';
import { ServiceCardList } from './service-card-list';
import { ServiceCard } from './service-card';
import { ServiceModel } from '../../types';
import { expect, userEvent, within } from '@storybook/test';

const meta: Meta<typeof ServiceCardList> = {
    title: 'Entities/Service/ServiceCardList',
    component: ServiceCardList,
    tags: ['autodocs'],
    argTypes: {
        children: {
            control: 'object',
            description: '子要素として表示するServiceCardコンポーネント',
        },
    },
};

export default meta;
type Story = StoryObj<typeof ServiceCardList>;

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
    render: () => (
        <ServiceCardList>
            {defaultServices.map((service) => (
                <ServiceCard key={service.address} model={service} />
            ))}
        </ServiceCardList>
    ),
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        // 全てのリンクが存在することを確認
        const links = canvas.getAllByRole('link');
        expect(links).toHaveLength(defaultServices.length);

        // 各リンクの属性を確認
        links.forEach((link, index) => {
            expect(link).toHaveAttribute(
                'href',
                defaultServices[index].address
            );
            expect(link).toHaveAttribute('target', '_blank');
            expect(link).toHaveAttribute('rel', 'noopener noreferrer');
        });

        // キーボードナビゲーションの確認
        await userEvent.tab();
        expect(links[0]).toHaveFocus();

        await userEvent.tab();
        expect(links[1]).toHaveFocus();

        await userEvent.tab();
        expect(links[2]).toHaveFocus();
    },
};

export const Empty: Story = {
    render: () => <ServiceCardList>{null}</ServiceCardList>,
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const links = canvas.queryAllByRole('link');
        expect(links).toHaveLength(0);
    },
};

const longTitleServices: ServiceModel[] = [
    {
        title: '非常に長いタイトルのサービス名が入ります。最大でどのくらい表示されるか確認しましょう。',
        address: 'https://example.com/1',
    },
    {
        title: 'もう一つの長いタイトルのサービスです。こちらも表示の確認を行います。',
        address: 'https://example.com/2',
    },
];

export const LongTitles: Story = {
    render: () => (
        <ServiceCardList>
            {longTitleServices.map((service) => (
                <ServiceCard key={service.address} model={service} />
            ))}
        </ServiceCardList>
    ),
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const links = canvas.getAllByRole('link');

        // 長いタイトルが正しく表示されているか確認
        links.forEach((link, index) => {
            expect(link).toHaveTextContent(longTitleServices[index].title);
        });
    },
};

const manyServices: ServiceModel[] = [
    ...defaultServices,
    {
        title: 'Grafana',
        address: 'https://192.168.0.203:3000',
    },
    {
        title: 'Prometheus',
        address: 'https://192.168.0.204:9090',
    },
    {
        title: 'Node Exporter',
        address: 'https://192.168.0.205:9100',
    },
];

export const ManyServices: Story = {
    render: () => (
        <ServiceCardList>
            {manyServices.map((service) => (
                <ServiceCard key={service.address} model={service} />
            ))}
        </ServiceCardList>
    ),
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const links = canvas.getAllByRole('link');

        // 全てのサービスが表示されているか確認
        expect(links).toHaveLength(manyServices.length);

        // グリッドレイアウトの確認
        const container = canvasElement.firstElementChild;
        expect(container).toHaveClass('grid');
        expect(container).toHaveClass('grid-cols-1');
        expect(container).toHaveClass('md:grid-cols-2');
        expect(container).toHaveClass('lg:grid-cols-3');
    },
};
