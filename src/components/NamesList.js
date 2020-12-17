import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, View, FlatList} from 'react-native';
import Person from './Person';
import api from '../services/api';

export default function NamesList( { navigation } ) {
  
const [names, setNames] = useState([]); 

function laodNames(){
  api
    .get("people")
    .then((res) => {
        setNames(res.data);
    });
};

useEffect(() => {
  laodNames();
},[]);


  return (
    
    <View style={st.container}>
      <StatusBar style="auto" />
      <View showsVerticalScrollIndicator={false} style={st.scroller}>
        <FlatList
          // past the array of objetcts
          data={names}
          // Extracting the item by 'email'
          keyExtractor={ (item) => item.email}
          // Rendering item per item and calling the component '<Person />'
          renderItem={({ item }) => 
          <Person
            email={item.email}
            imageUrl={item.avatar}
            name={item.name}
            // paasing the complete object like from params
            onClick={() => navigation.navigate('Detail', item)}
          />
            }
           
        />
      </View>
    </View >
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
  },
  box: {
    borderRadius: 5,
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#c2c2c2',
    width: '95%',
    height: 75,
    padding: 5,
    marginTop: 10
  }
});
