import { ServiceModel } from '@/entities/service';

const serviceListMock = [
    {
        title: 'Proxmox VE',
        address: 'https://192.168.0.200:8006',
    },
] as const satisfies ServiceModel[];

export const fetchServices = async () => {
    return serviceListMock;
};
