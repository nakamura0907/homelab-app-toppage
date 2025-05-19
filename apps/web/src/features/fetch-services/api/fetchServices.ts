import { serviceClientFactory } from '@/entities/service';

/**
 * サービス一覧を取得する
 * @returns サービス一覧
 */
export const fetchServices = async () => {
    const { fetchServices } = serviceClientFactory();
    return fetchServices();
};
