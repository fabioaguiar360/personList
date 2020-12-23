import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, View, FlatList, Text, TouchableOpacity} from 'react-native';
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
});


  return (
    
    <View style={st.container}>
      <TouchableOpacity
       style={st.addButton}
       onPress={() => {navigation.navigate('Add Person')}}
       >
        <Text style={st.addButtonLable}>+</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
      <View showsVerticalScrollIndicator={false} style={st.scroller}>
        <FlatList
          // past the array of objetcts
          data={names}
          // Extracting the item by 'id'
          keyExtractor={ (item) => String(item.id)}
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
    backgroundColor: '#B0C4DE',
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
  },
  addButton: {
    width: 80,
    height: 80,
    borderRadius: 80,
    backgroundColor: '#FFA500',
    shadowColor: '#000',
    position: 'absolute',
    bottom: 30,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignSelf: 'center',
    elevation: 5,
    zIndex: 9,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {
      height: 7,
      width: 3 
    }
  },
  addButtonLable: {
    color: '#FFF',
    fontSize: 50,
    alignSelf: 'center',
    justifyContent: 'center'
  }
});
