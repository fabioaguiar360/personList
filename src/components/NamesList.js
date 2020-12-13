import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity, Image} from 'react-native';
import Person from './Person';
import axios from 'axios'; 


export default function NamesList( { navigation } ) {
  
const [names, setNames] = useState([]); 

function laodNames(){
  axios
    .get("https://randomuser.me/api/?nat=br&results=10")
    .then(res => {setNames(res.data.results);
    
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
          // Extracting the item by 'id'
          keyExtractor={ (item) => item.email}
          // Rendering item per item and calling the component '<Person />'
          renderItem={({ item }) => 
          <Person
           email={item.email}
            imageUrl={item.picture.thumbnail}
             name={item.name.first+' '+item.name.last}
             onClick={() => navigation.navigate('Detail')}
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
