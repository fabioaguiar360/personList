import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { Button } from 'react-native-elements';

export default function Detail(props) {
// O props traz o navigate e com isso posso criar uma rota para chamar o formulário de atualização do perfil
  const [person, setPerson] = useState([
    {
      "id": 12,
      "name": "Herbert Borer",
      "gender": "Two-spirit",
      "userName": "Candice.Franecki",
      "password": "PjHDA5g4npoRyTq",
      "phone": "259-888-5413 x622",
      "email": "Ellis_Hickle42@yahoo.com",
      "city": "North Gwendolynview",
      "street": "Germaine Rapid",
      "number": 55136,
      "state": "Idaho",
      "zipCode": "33448",
      "country": "Guinea-Bissau",
      "avatar": "https://st.depositphotos.com/2593537/4781/i/950/depositphotos_47817439-stock-photo-man-pointing-up.jpg"
    }
  ]);
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
          {/* <Button
            icon={{
              name: "arrow-right",
              size: 15,
              color: "white"
            }}
            title="Button with icon object"
            onClick={() => props.navigation.navigate('Person Data', person)}
          /> */}
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