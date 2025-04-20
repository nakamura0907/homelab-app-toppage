import { ServiceModel } from "@/entities/service";
import { arrayMove } from "@/shared";
import { useState } from "react";

/**
 * ドラッグ可能なサービス一覧のカスタムフック
 * 
 * @param initialServices 初期サービス一覧
 * @returns
 */
export const useDraggableServiceList = (initialServices: ServiceModel[]) => {
    const [services, setServices] = useState<ServiceModel[]>(initialServices);

    const changeServiceOrder = (oldIndex: number, newIndex: number) => {
        const newServices = arrayMove(services, oldIndex, newIndex);
        setServices(newServices);
    }

    return {
        services,
        /**
         * サービスの並び順を変更する
         * @param oldIndex 変更前のインデックス
         * @param newIndex 変更後のインデックス
         */
        changeServiceOrder,
    }
}