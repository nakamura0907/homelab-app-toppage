import { renderHook, act } from '@testing-library/react';
import { useDraggableServiceList } from '../use-draggable-service-list';
import { ServiceModel } from '@/entities/service';

describe('useDraggableServiceList', () => {
    const mockServices: ServiceModel[] = [
        {
            title: 'Proxmox VE',
            address: 'https://192.168.0.200:8006',
        },
        {
            title: 'Home Assistant',
            address: 'https://192.168.0.201:8123',
        },
        {
            title: 'Portainer',
            address: 'https://192.168.0.202:9000',
        },
    ];

    it('初期状態が正しく設定されること', () => {
        const { result } = renderHook(() => useDraggableServiceList(mockServices));

        expect(result.current.services).toEqual(mockServices);
    });

    it('サービスの並び順が正しく変更されること', () => {
        const { result } = renderHook(() => useDraggableServiceList(mockServices));

        act(() => {
            result.current.changeServiceOrder(0, 2);
        });

        expect(result.current.services).toEqual([
            mockServices[1],
            mockServices[2],
            mockServices[0],
        ]);
    });

    it('同じインデックスを指定した場合、並び順が変更されないこと', () => {
        const { result } = renderHook(() => useDraggableServiceList(mockServices));

        act(() => {
            result.current.changeServiceOrder(1, 1);
        });

        expect(result.current.services).toEqual(mockServices);
    });

    it('空の配列を初期値として渡した場合、正しく動作すること', () => {
        const { result } = renderHook(() => useDraggableServiceList([]));

        expect(result.current.services).toEqual([]);
    });

    it('複数回の並び順変更が正しく反映されること', () => {
        const { result } = renderHook(() => useDraggableServiceList(mockServices));

        act(() => {
            result.current.changeServiceOrder(0, 2);
        });

        act(() => {
            result.current.changeServiceOrder(1, 0);
        });

        expect(result.current.services).toEqual([
            mockServices[2],
            mockServices[1],
            mockServices[0],
        ]);
    });
}); 
