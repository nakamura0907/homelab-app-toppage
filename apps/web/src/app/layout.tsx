import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'HomeLab App Top Page',
    description: '自宅サーバーのトップページ',
};

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
