import { ServiceModel } from './type';

/**
 * サーバーのサービス一覧
 */
export const services = [
  {
    title: 'Proxmox',
    address: 'https://192.168.0.200:8006/',
  },
  {
    title: 'Pi-hole',
    address: 'http://192.168.0.231/',
  },
  {
    title: 'Grafana',
    address: 'http://192.168.0.241:3000/',
  },
  {
    title: 'Prometheus',
    address: 'http://192.168.0.241:9090/',
  },
] as const satisfies ServiceModel[];
