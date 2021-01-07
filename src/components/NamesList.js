import { StatusBar } from 'expo-status-bar';
import React, {useCallback, useMemo, useEffect, useState} from 'react';
import { StyleSheet, View, FlatList, Text, TouchableOpacity, SafeAreaView, Animated, Image} from 'react-native';
import { SearchBar } from 'react-native-elements';
import Person from './Person';
import api from '../services/api';
import { includes, propertyOf } from 'lodash';

export default function NamesList( { navigation } ) {
  
const [names, setNames] = useState([]);
const [filtredNames, setFiltredNames] = useState([]); 
const [search, setSearch] = useState('');

const laodNames = useCallback(() => {
  api
    .get("people")
    .then((res) => {
        setNames(res.data);
    });
});

useEffect(() => {
  // laodNames;
  // setFiltredNames(names);
},[]);

function updateSearch(data){
  setSearch(data);
};

useMemo(() => {
  if(search.length > 0){
    
    let filtred = names.filter(data => data.name.includes(search));
    filtred != '' ? setFiltredNames(filtred) : filtred = names.filter(data => data.email.includes(search));
    setFiltredNames(filtred);

  }else{
    //laodNames();
    setFiltredNames(names);
  }
},[search]);

  return (
    <SafeAreaView style={st.container}>
      <StatusBar style={"dark"} />
      

      <TouchableOpacity
       style={st.addButton}
       onPress={() => {navigation.navigate('Add Person')}}
       >
        <Text style={st.addButtonLable}>+</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
      
      <Animated.View showsVerticalScrollIndicator={false} style={st.scroller}>
      <SearchBar 
        placeholder="Type the name or email..."
        onChangeText={(text) => updateSearch(text)}
        value={search}
        lightTheme
        round        
        autoCorrect={false}
      />
      {
        filtredNames.length == 0 ? 
        <View style={st.info}>
          <Image source={require('../img/info-ico2.png')} style={st.infoImage} />
          <Text style={st.infoText}>
            You can search by name or email
          </Text>
          <Text style={st.infoText}>
            Try it!
          </Text>
        </View>
        : <FlatList
        // past the array of objetcts
        data={filtredNames}
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
      
      }
        
      </Animated.View>
    </SafeAreaView >
  );
}

const st = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#B0C4DE',
    alignItems: 'center'
  },
  scroller:  {
    width: '100%',
    marginTop: 40
  },
  box: {
    borderRadius: 5,
    flexDirection: 'row',
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
  },
  info:{
    alignItems: 'center',
    marginTop: '50%'
  },
  infoImage: {
    width: 270,
    height: 130
  },
  infoText: {
    fontSize: 20,
    alignSelf: 'center'
  }
});
