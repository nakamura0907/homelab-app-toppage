import type { Metadata } from 'next';
import { enableMockNode } from '@/shared/helpers';
import './globals.css';

export const metadata: Metadata = {
    title: 'HomeLab App Top Page',
    description: '自宅サーバーのトップページ',
};

await enableMockNode();
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ja">
            <body>
                <main>{children}</main>
            </body>
        </html>
    );
}
