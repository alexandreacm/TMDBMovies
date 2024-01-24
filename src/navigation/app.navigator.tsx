import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import DetailMovie from '../screens/DetailMovie';
import {theme} from '../style/theme';

// export interface RootStackParamList {
//   Home: undefined;
//   DetailMovie: undefined;
// }

const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: theme.COLORS.bg.primary},
        headerTitleStyle: {color: theme.COLORS.text.white},
      }}>
      <Stack.Screen
        options={{
          title: '',
          headerShown: false,
        }}
        name="Home"
        component={Home}
      />
      <Stack.Screen name="DetailMovie" component={DetailMovie} />
    </Stack.Navigator>
  );
};
