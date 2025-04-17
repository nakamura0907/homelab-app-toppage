import { fetchServices } from '../fetchServices';

describe('fetchServices', () => {
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
});
