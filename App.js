import 'react-native-gesture-handler';
import React from 'react';
import {enableScreens} from 'react-native-screens';
import Navigator from './src/Navigator';

enableScreens();

const App = () => {
  return (
    <>
      <Navigator />
    </>
  );
};

export default App;
