import { ServiceModel } from '../../model';
import { ServiceCard } from '../service-card/ServiceCard';

type Props = {
  services: ServiceModel[];
};

/**
 * サーバーのサービスカード一覧コンポーネント
 */
export const ServiceCardList: React.FC<Props> = ({ services }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {services.map((service) => (
        <ServiceCard key={service.address} model={service} />
      ))}
    </div>
  );
};
