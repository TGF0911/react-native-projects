import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import {Home, ItemDetail} from './src/screens'
import { useFonts } from 'expo-font';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: 'transparent',
  }
}

const Stack = createStackNavigator()

const App = () => {
  const [loaded] = useFonts({
    "Roboto-Black": require('./assets/fonts/Roboto-Black.ttf'),
    "Roboto-Bold": require('./assets/fonts/Roboto-Bold.ttf'),
    "Roboto-Regular": require('./assets/fonts/Roboto-Regular.ttf'),
  })

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer theme={theme} >
      <Stack.Navigator
        screenOptions = {{
          headerShown:false
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ItemDetail" component={ItemDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  )

}

export default () => {
  return <App />;
}