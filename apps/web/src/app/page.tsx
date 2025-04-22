import { DraggableServiceList } from '@/features/draggable-service-list';
import { fetchServices } from '@/features/fetch-services';
import { RegisterServiceDialog } from '@/features/register-service';

export default async function Home() {
    const services = await fetchServices();
    return (
        <div className='container mx-auto p-4'>
            <RegisterServiceDialog />
            <DraggableServiceList services={services} />
        </div>
    )
}
