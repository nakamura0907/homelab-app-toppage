import type { ServiceModel } from '@/entities/service';
import { http, HttpResponse } from 'msw';

const MOCK_SERVER_URL = 'https://example.com';
const makeMockServerUrl = (path: string) => {
    return `${MOCK_SERVER_URL}${path}`;
};

const serviceListMock = [
    {
        title: 'Proxmox VE',
        address: 'https://192.168.0.200:8006',
    },
    {
        title: 'Pi-hole',
        address: 'http://192.168.0.231',
    },
    {
        title: 'Prometheus',
        address: 'http://192.168.0.232:9090',
    },
    {
        title: 'Loki',
        address: 'http://192.168.0.233:3100',
    },
] satisfies ServiceModel[];

export const handlers = [
    http.get(makeMockServerUrl('/services'), () => {
        return HttpResponse.json({ services: serviceListMock });
    }),
];
