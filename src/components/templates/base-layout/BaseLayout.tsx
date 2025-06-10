import React from 'react';

/**
 * アプリケーションのベースレイアウトコンポーネント
 */
export const BaseLayout = (props: { children: React.ReactNode }) => {
  return (
    <>
      <header></header>
      <main>{props.children}</main>
      <footer></footer>
    </>
  );
};
