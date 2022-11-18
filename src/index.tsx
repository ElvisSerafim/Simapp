import React, { FC } from 'react';
import Navigation from './navigation';
import { NativeBaseProvider } from "native-base";
import { theme } from './theme';

const App: FC = () => {

  return (
    <NativeBaseProvider theme={theme}>
        <Navigation />
    </NativeBaseProvider>
  )
};

export default App;
