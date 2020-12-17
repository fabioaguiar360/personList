import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, FlatList} from 'react-native';
// import api from '../services/api';
import axios from 'axios';
export default function Detail(props) {

  const [person, setPerson] = useState([]);
  function getPerson(){
    axios
    .get("http://10.0.2.2:3000/people/2")
    .then(response => setPerson(response.data));
  }; 

  useEffect(() => {
      getPerson();
  },[]);

  return (
     
      <View >
        <FlatList
          // past the array of objetcts
          data={person}
          // Extracting the item by 'id'
          keyExtractor={ (item) => item.email}
          // Rendering item per item and calling the component '<Person />'
          renderItem={({ item }) => 
          <View>
            <Image style={st.image} 
              source={{uri: item.avatar}}
            />
            <Text style={st.text}>
              {item.name}
            </Text>
            <Text style={st.email}>
              {item.email}
            </Text>
            <Text style={st.info}>
              Location: {item.number}, {item.street}
            </Text>
            <Text style={st.info}>
              City: {item.city} State: {item.state}
            </Text>
            <Text style={st.info, {fontSize:20, alignSelf: 'center'}}>
              Country: {item.country}
            </Text>
          </View>
          
  }
           
        />
      </View>
  
  );
}

const st = StyleSheet.create({
    box: {
    flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#000',
      width: '100%',
      height: 75,
      padding: 5
    },
    text: {
      fontSize: 30, 
      color: '#000',
      marginLeft:20,
      alignSelf: 'center'
    },
    email: {
      fontSize: 20, 
      color: '#000',
      marginLeft:20,
      alignSelf: 'center'
    },
    info: {
      fontSize: 15, 
      color: '#000',
      marginLeft:20,
      alignSelf: 'center'
    },
    image:{
        width: 350,
        height: 350,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 50,
        marginTop: 30,
        marginBottom: 30,
        borderColor: '#000',
        borderWidth: 1,
        borderStyle: 'solid' 
    }
  });