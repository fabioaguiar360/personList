import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

 function Person(props) {
  return (

      <TouchableOpacity style={st.box} onPress={props.onClick}>
        <Image style={st.image} 
        source={{uri: props.imageUrl}}
        />
        <View style={st.data}>
          <Text style={st.name}>{props.name}</Text>
          <Text style={st.email}>{props.email}</Text>
        </View>
        
      </TouchableOpacity>
  
  );
}

const st = StyleSheet.create({
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
    image: {
      width: 60,
      height: 60,
      borderRadius: 60,
      marginRight: 10,
      marginLeft: 10
  },
  name: {
    fontSize: 25,
  },
  email: {
    fontSize: 15,
    marginLeft: 2
  },
  data: {
    flexDirection: 'column'
  }
  });
  
  export default Person;