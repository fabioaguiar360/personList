import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import NamesList from './src/components/NamesList';
import Detail from './src/components/Detail';
import PersonForm from './src/components/PersonForm';
import AddPerson from './src/components/AddPerson';

export default function App() {
 const Stack = createStackNavigator();
 const Drawer = createDrawerNavigator();

  return (
    
    <NavigationContainer>
      <Drawer.Navigator initialRouteName={'Contact List'}>
        <Drawer.Screen 
          name="Contact List" 
          component={NamesList} 
        />
        <Drawer.Screen
         name="Detail" 
         component={Detail} 
        />
        <Drawer.Screen 
          name="Person Data" 
          component={PersonForm} 
        />
        <Drawer.Screen 
          name="Add Person" 
          component={AddPerson} 
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
