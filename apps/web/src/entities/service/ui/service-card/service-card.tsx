import React from 'react';
import { ServiceModel } from '../../types';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

type Props = {
    model: ServiceModel;
};

export const ServiceCard: React.FC<Props> = ({ model }) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    <Link
                        href={model.address}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {model.title}
                    </Link>
                </CardTitle>
            </CardHeader>
        </Card>
    );
};
