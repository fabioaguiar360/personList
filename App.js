import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import NamesList from './src/components/NamesList';
import Detail from './src/components/Detail';

export default function App() {
 const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Contact List" 
          component={NamesList} 
        />
        <Stack.Screen
         name="Detail" 
         component={Detail} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const st = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  scroller:  {
    width: '100%'
  }
});
