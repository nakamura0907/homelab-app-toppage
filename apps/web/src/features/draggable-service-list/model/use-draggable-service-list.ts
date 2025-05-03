import { ServiceModel } from "@/entities/service";
import { arrayMove } from "@/shared";
import { useEffect, useState } from "react";

/**
 * ドラッグ可能なサービス一覧のカスタムフック
 * 
 * @param initialServices 初期サービス一覧
 * @returns
 */
export const useDraggableServiceList = (initialServices: ServiceModel[]) => {
    const [services, setServices] = useState<ServiceModel[]>(initialServices);

    // initialServicesが変更されたらservicesの状態を更新
    useEffect(() => {
        setServices(prevServices => {
            // JavaScript heap out of memory対策のため
            // 中身に変更があった場合のみ処理を続ける
            const prevIds = prevServices.map(s => s.address);
            const incomingIds = initialServices.map(s => s.address);

            const sameOrder =
                prevIds.length === incomingIds.length &&
                prevIds.every((id, i) => id === incomingIds[i]);

            // 中身に変更がない場合
            if (sameOrder) return prevServices;

            // 既存のサービスの並び順を保持して末尾に追加する
            const existingIds = new Set(prevServices.map(s => s.address));
            const newServices = initialServices.filter(s => !existingIds.has(s.address));
            return [...prevServices, ...newServices];
        });
    }, [initialServices]);

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
