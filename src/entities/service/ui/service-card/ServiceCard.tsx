import { Card, CardHeader, CardTitle } from '@/components';
import { ServiceModel } from '../../model';
import Link from 'next/link';

type Props = {
  model: ServiceModel;
};

/**
 * サーバーのサービスカードコンポーネント
 */
export const ServiceCard: React.FC<Props> = ({ model }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <Link href={model.address} target="_blank" rel="noopener noreferrer">
            {model.title}
          </Link>
        </CardTitle>
      </CardHeader>
    </Card>
  );
};
