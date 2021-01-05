import React,  { useState, useEffect } from 'react';
import api from '../services/api';
import { TextInput, Image, Text, View, StyleSheet, ScrollView, NumericInput} from 'react-native';
import { Button } from 'react-native-elements';

export default function PersonForm(props){

    const [person, setPerson] = useState([]);

    function getPersonData(){
        setPerson(props.route.params);
    };

    async function updateData(){
       await api.put('people/'+person.id, person).then(
           () => props.navigation.navigate('Contact List')
       );
    }

   useEffect(() =>{
        getPersonData();
    },[]);

    return(
        <View style={st.container}>
            <View style={st.imageDisplay}>
                <Image source={{uri: person.avatar}} style={st.image}/>
                <Button
                    title='Change it'
                    onPress={() => {
                        updateData();
                    }}
                />
            </View>
            <ScrollView style={st.infoDisplay} showsVerticalScrollIndicator={false}>
                <Text style={st.lable}>Name:</Text>
                <TextInput style={st.input}
                    placeholder="Put the name!"
                    onChangeText={text => setPerson({...person, name: text})}
                    defaultValue={person.name}
                />
                <Text style={st.lable}>Gender:</Text>
                <TextInput style={st.input}
                    placeholder="Put the gender!"
                    onChangeText={text => setPerson({...person, gender: text})}
                    defaultValue={person.gender}
                />
                 <Text style={st.lable}>Phone:</Text>
                <TextInput style={st.input}
                    placeholder="Put the phone number!"
                    onChangeText={text => setPerson({...person, phone: text})}
                    defaultValue={person.phone}
                />
                <Text style={st.lable}>Email:</Text>
                <TextInput style={st.input}
                    placeholder="Put the email!"
                    onChangeText={text => setPerson({...person, email: text})}
                    defaultValue={person.email}
                />
                <Text style={st.lable}>User Name:</Text>
                <TextInput style={st.input}
                    placeholder="Put the User Name!"
                    onChangeText={text => setPerson({...person, userName: text})}
                    defaultValue={person.userName}
                />
                <Text style={st.lable}>Password:</Text>
                <TextInput style={st.input}
                    placeholder="Put the password!"
                    onChangeText={text => setPerson({...person, password: text})}
                    defaultValue={person.password}
                />
                 <Text style={st.lable}>Avatar URL:</Text>
                <TextInput style={st.input}
                    placeholder="Put the number of your house!"
                    onChangeText={text => setPerson({...person, avatar: text})}
                    defaultValue={person.avatar}
                />
                <Text style={st.lable}>Email:</Text>
                <TextInput style={st.input}
                    placeholder="Put the email!"
                    onChangeText={text => setPerson({...person, email: text})}
                    defaultValue={person.email}
                />
                 <Text style={st.lable}>City:</Text>
                <TextInput style={st.input}
                    placeholder="Put the city!"
                    onChangeText={text => setPerson({...person, city: text})}
                    defaultValue={person.city}
                />
                <Text style={st.lable}>Street:</Text>
                <TextInput style={st.input}
                    placeholder="Put the street name!"
                    onChangeText={text => setPerson({...person, street: text})}
                    defaultValue={person.street}
                />
                <Text style={st.lable}>Number:</Text>
                <TextInput style={st.input}
                    placeholder="Put the number of your house!"
                    keyboardType = 'numeric'
                    onChangeText={text => setPerson({...person, number: text})}
                    defaultValue={String(person.number)}
                />
                <Text style={st.lable}>State:</Text>
                <TextInput style={st.input}
                    placeholder="Put the number of your house!"
                    onChangeText={text => setPerson({...person, state: text})}
                    defaultValue={person.state}
                />
                <Text style={st.lable}>Country:</Text>
                <TextInput style={st.input}
                    placeholder="Put the number of your house!"
                    onChangeText={text => setPerson({...person, country: text})}
                    defaultValue={person.country}
                />
            </ScrollView>
            
        </View>
    )
}

const st = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#B0C4DE',
        flexDirection: 'row',

      },
      imageDisplay: {
        backgroundColor: '#4682B4',
        alignItems: 'center',
        marginTop: 60

      },
      image: {
        width: 100,
        height: 100,
        borderRadius: 10,
        borderColor: '#000',
        borderWidth: 1,
        alignItems: 'center',
        margin: 15,
        marginTop: 30
      },
      infoDisplay: {
          padding: 10,
          marginTop: 40
      },
      lable: {
          fontSize: 20
      },
      input: {
          width: "100%",
          height: 40,
          borderColor: '#000',
          padding: 5,
          backgroundColor: '#fff',
          color: '#000',
          borderRadius: 5,
          marginTop: 5,
          marginBottom: 5
          
      }
});