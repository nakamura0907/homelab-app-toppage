import { services } from '@/entities/service';
import { ServiceCardList } from '@/entities/service/ui/service-card-list/ServiceCardList';
import { BaseLayout } from '@/shared/components';

export default function Home() {
  return (
    <BaseLayout>
      <ServiceCardList services={services} />
    </BaseLayout>
  );
}
