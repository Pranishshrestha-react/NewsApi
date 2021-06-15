import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {View, Text} from 'react-native';
import MainNavigator from './navigations/MainNavigator';
import NewsProvider from './store/providers/NewsProvider';

const App = () =>  {
  return(
    <NewsProvider>
      <PaperProvider>
        <MainNavigator/>
      </PaperProvider>  
    </NewsProvider>
  )
}

export default App;
