import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NamesList from './src/components/NamesList';
import Detail from './src/components/Detail';
import PersonForm from './src/components/PersonForm';

export default function App() {
 const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Contact List'}>
        <Stack.Screen 
          name="Contact List" 
          component={NamesList} 
        />
        <Stack.Screen
         name="Detail" 
         component={Detail} 
        />
        <Stack.Screen 
          name="Person Data" 
          component={PersonForm} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const st = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center'
//   },
//   scroller:  {
//     width: '100%'
//   }
// });
