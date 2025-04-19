import { DraggableServiceList } from '@/features/draggable-service-list';
import { fetchServices } from '@/features/fetch-services';

export default async function Home() {
    const services = await fetchServices();
    return <DraggableServiceList services={services} />;
}
