import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

export default function Detail(props) {

  const [person, setPerson] = useState([]);
  function getPerson(){
    //I'm geting the object from onClick (NameList) like a params
    setPerson(props.route.params);
  }; 

  useEffect(() => {
      getPerson();
  },[]);

  return (
        <View style={st.box}>
          <Image style={st.image} 
            source={{uri: person.avatar}}
          />
          <Text style={st.text}>
            {person.name}
          </Text>
          <Text style={st.email}>
            {person.email}
          </Text>
          <Text style={st.info}>
            Location: {person.number}, {person.street}
          </Text>
          <Text style={st.info}>
            City: {person.city} State: {person.state}
          </Text>
          <Text style={st.info, {fontSize:20, alignSelf: 'center'}}>
            Country: {person.country}
          </Text>
        </View>
  );
}

const st = StyleSheet.create({
    box: {
    flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
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
        borderRadius: 20,
        marginTop: 30,
        marginBottom: 30,
        borderColor: '#000',
        borderWidth: 1
    }
  });