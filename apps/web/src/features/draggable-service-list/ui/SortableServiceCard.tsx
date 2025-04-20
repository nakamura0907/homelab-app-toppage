import { ServiceModel, ServiceCard } from "@/entities/service";
import { useSortable, CSS } from "@/shared";
import React from "react";

type Props = {
    model: ServiceModel;
};

/**
 * ソート可能なサービスカードコンポーネント
 */
export const SortableServiceCard: React.FC<Props> = ({ model }) => {
    const { attributes, listeners, setNodeRef, transition, transform, isDragging } = useSortable({ id: model.address });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        opacity: isDragging ? 0.5 : 1,
    };

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
            <ServiceCard model={model} />
        </div>
    );
};
