"use client";

import { ServiceModel } from "@/entities/service";
import { arrayMove, DndContext, DragEndEvent, SortableContext } from "@/shared";
import React, { useState } from "react";
import { SortableServiceCard } from "./SortableServiceCard";

type Props = {
    services: ServiceModel[]
}

/**
 * ドラッグ可能なサービス一覧コンポーネント
 */
export const DraggableServiceList: React.FC<Props> = ({ services: initialServices }) => {
    const [services, setServices] = useState<ServiceModel[]>(initialServices);

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
            const oldIndex = services.findIndex(value => value.address === active.id);
            const newIndex = services.findIndex(value => value.address === over.id);

            // ドラッグ元とドラッグ先のインデックスを入れ替え
            const newServices = arrayMove(services, oldIndex, newIndex);
            setServices(newServices);
        }
    }

    return (
        <DndContext onDragEnd={handleDragEnd}>
            <SortableContext items={services.map(value => value.address)}>
                {services.map(value => (
                    <SortableServiceCard key={value.address} model={value} />
                ))}
            </SortableContext>
        </DndContext>
    )
};

