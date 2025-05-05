import { ServiceModel } from "../types";

type ServiceClient = {
    fetchServices: () => Promise<ServiceModel[]>
    registerService: (service: ServiceModel) => Promise<void>
}

// FIXME: pnpm startで変更が反映されない
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
] satisfies ServiceModel[];
const inMemoryClient: ServiceClient = {
    fetchServices: async () => {
        return serviceListMock
    },
    registerService: async (service: ServiceModel) => {
        serviceListMock.push(service);
    }
}

/**
 * サービスクライアントを生成するファクトリ関数
 */
export const serviceClientFactory = (): ServiceClient => {
    return inMemoryClient
}
