import { fetchServices } from '../fetchServices';
import { serviceClientFactory } from '@/entities/service';

// モックの設定
jest.mock('@/entities/service', () => ({
    serviceClientFactory: jest.fn(() => ({
        fetchServices: jest.fn().mockResolvedValue([
            {
                title: 'Proxmox VE',
                address: 'https://192.168.0.200:8006',
            },
            {
                title: 'Pi-hole',
                address: 'http://192.168.0.231',
            },
        ]),
    })),
}));

describe('fetchServices', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should return an array of services', async () => {
        const result = await fetchServices();

        expect(Array.isArray(result)).toBe(true);
        expect(result.length).toBeGreaterThan(0);
    });

    it('should return services with correct structure', async () => {
        const result = await fetchServices();

        result.forEach((service) => {
            expect(service).toHaveProperty('title');
            expect(service).toHaveProperty('address');
            expect(typeof service.title).toBe('string');
            expect(typeof service.address).toBe('string');
        });
    });

    it('should call serviceClientFactory', async () => {
        await fetchServices();
        expect(serviceClientFactory).toHaveBeenCalled();
    });
});