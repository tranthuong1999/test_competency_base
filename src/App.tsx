import React, { ReactNode } from 'react';
import Appbar from './components/Appbar';
// cách chia layout 1 chiều thì sử dụng flex box còn 2 chiều thì sử dụng grid

type LayoutProps = {
  children: ReactNode;
};

function App() {
  return (
    <>
      <Appbar />
    </>
  );
}

export default App;
