import { ServiceModel } from '@/entities/service';

const serviceListMock = [
    {
        title: 'Proxmox VE',
        address: 'https://192.168.0.200:8006',
    },
    {
        title: 'Pi-hole',
        address: 'http://192.168.0.231'
    },
    {
        title: 'Prometheus',
        address: 'http://192.168.0.232:9090'
    },
    {
        title: 'Loki',
        address: 'http://192.168.0.233:3100'
    }
] as const satisfies ServiceModel[];

/**
 * サービス一覧を取得する
 * @returns サービス一覧
 */
export const fetchServices = async () => {
    return serviceListMock;
};
