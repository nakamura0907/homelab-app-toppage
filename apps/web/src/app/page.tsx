import { ServiceCardList } from '@/entities/service';
import { fetchServices } from '@/features/fetch-services';

export default async function Home() {
    const services = await fetchServices();
    return <ServiceCardList models={services} />;
}
