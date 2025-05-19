'use client';

import { ServiceCardList, ServiceModel } from '@/entities/service';
import { DndContext, DragEndEvent, SortableContext } from '@/shared';
import React from 'react';
import { SortableServiceCard } from './sortable-service-card';
import { useDraggableServiceList } from '../model';

type PresentationProps = {
    services: ServiceModel[];
};

const DraggableServiceListPresentation: React.FC<PresentationProps> = ({
    services,
}) => {
    return (
        <ServiceCardList>
            {services.map((value) => (
                <SortableServiceCard key={value.address} model={value} />
            ))}
        </ServiceCardList>
    );
};

type Props = {
    services: ServiceModel[];
};

/**
 * ドラッグ可能なサービス一覧コンポーネント
 */
export const DraggableServiceList: React.FC<Props> = ({
    services: initialServices,
}) => {
    const { services, changeServiceOrder } =
        useDraggableServiceList(initialServices);

    /**
     * ドラッグ可能なサービスがドロップされた際に発火
     *
     * サービスの並び順を変更する
     */
    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;

        // ドロップされた かつ ドラッグされた要素と違う要素の場合
        if (over && active.id !== over.id) {
            // ドラッグ元とドラッグ先のインデックスを取得
            const oldIndex = services.findIndex(
                (value) => value.address === active.id
            );
            const newIndex = services.findIndex(
                (value) => value.address === over.id
            );

            // ドラッグ元とドラッグ先のインデックスを入れ替え
            changeServiceOrder(oldIndex, newIndex);
        }
    };

    return (
        <DndContext onDragEnd={handleDragEnd}>
            <SortableContext items={services.map((value) => value.address)}>
                <DraggableServiceListPresentation services={services} />
            </SortableContext>
        </DndContext>
    );
};
