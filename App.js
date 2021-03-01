/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import NavigationPage from './config/routes';
import store from './store/state/store';
import {Provider} from 'react-redux';


const App = () => {
  return (
    <Provider store={store}>
     <NavigationPage/>
    </Provider>
  );
};



export default App;
