import React from 'react';

export const BaseLayout = (props: { children: React.ReactNode }) => {
  return (
    <>
      <header></header>
      <main>{props.children}</main>
      <footer></footer>
    </>
  );
};
