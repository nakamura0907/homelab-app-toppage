import React from 'react';
import { ServiceModel } from '../../types';
import { ServiceCard } from './service-card';

type Props = {
    models: ServiceModel[];
};

/**
 * サービスのカード一覧コンポーネント
 */
export const ServiceCardList: React.FC<Props> = ({ models }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {models.map((model) => (
                <ServiceCard key={model.address} model={model} />
            ))}
        </div>
    );
};
