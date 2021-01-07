import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import { Button, Icon } from 'react-native-elements';

export default function Detail(props) {
  const [person, setPerson] = useState([]);
  const getPerson = () => {
    //I'm geting the object from onClick (NameList) like a params
    setPerson(props.route.params || []);
    // console.log(props);
  };

  useEffect(() => {
      getPerson();
  },[props]);

  return (
        <View style={st.box}>
          <ImageBackground source={require('../img/background.jpg')}  style={st.background}>
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
            <View style={st.button}>
              <Button 
                title="Change data"
                onPress={() => props.navigation.navigate('Person Data', person)}
              />
            </View>
          </ImageBackground>
        </View>
  );
}

const st = StyleSheet.create({
    box: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: '#B0C4DE',
    },
    background: {
      flex: 1,
      resizeMode: "cover",
      // justifyContent: "center",
      width: '100%'
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
        borderWidth: 1,
        marginTop: 100
    },
    button:{
      padding: 10,
      marginTop: 10
    }
  });