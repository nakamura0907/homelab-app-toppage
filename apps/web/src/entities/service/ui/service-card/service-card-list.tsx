import React from 'react';

type Props = {
    children: React.ReactNode;
};

/**
 * サービスのカード一覧コンポーネント
 */
export const ServiceCardList: React.FC<Props> = ({ children }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {children}
        </div>
    );
};
