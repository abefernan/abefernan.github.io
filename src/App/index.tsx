import React from 'react';
import { Content } from './components/Content';
import { Header } from './components/Header';

export { App };

function App(): JSX.Element {
  return (
    <>
      <Header />
      <Content />
    </>
  );
}
