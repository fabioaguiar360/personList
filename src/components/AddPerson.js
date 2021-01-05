import React,  { useState, useEffect } from 'react';
import api from '../services/api';
import { TextInput, Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function AddPerson(props, { navigation }){

    const [person, setPerson] = useState([]);
    async function postData(){
       await api.post('people/', person).then(
           () => navigation.navigate('Contact List')
       );
    }

    return(
        <View style={st.container}>
            <TouchableOpacity
            style={st.addButton}
            onPress={() => postData()}
            >
                <Text style={st.addButtonLable}>+</Text>
            </TouchableOpacity>
            <ScrollView style={st.infoDisplay} showsVerticalScrollIndicator={false}>
                <Text style={st.lable}>Name:</Text>
                <TextInput style={st.input}
                    placeholder="Put the name!"
                    onChangeText={text => setPerson({...person, name: text})}
                />
                <Text style={st.lable}>Gender:</Text>
                <TextInput style={st.input}
                    placeholder="Put the gender!"
                    onChangeText={text => setPerson({...person, gender: text})}

                />
                 <Text style={st.lable}>Phone:</Text>
                <TextInput style={st.input}
                    placeholder="Put the phone number!"
                    onChangeText={text => setPerson({...person, phone: text})}
                />
                <Text style={st.lable}>Email:</Text>
                <TextInput style={st.input}
                    placeholder="Put the email!"
                    onChangeText={text => setPerson({...person, email: text})}
                />
                <Text style={st.lable}>User Name:</Text>
                <TextInput style={st.input}
                    placeholder="Put the User Name!"
                    onChangeText={text => setPerson({...person, userName: text})}
                />
                <Text style={st.lable}>Password:</Text>
                <TextInput style={st.input}
                    placeholder="Put the password!"
                    onChangeText={text => setPerson({...person, password: text})}
                />
                 <Text style={st.lable}>Avatar URL:</Text>
                <TextInput style={st.input}
                    placeholder="Put the number of your house!"
                    onChangeText={text => setPerson({...person, avatar: text})}
                />
                <Text style={st.lable}>Email:</Text>
                <TextInput style={st.input}
                    placeholder="Put the email!"
                    onChangeText={text => setPerson({...person, email: text})}
                />
                 <Text style={st.lable}>City:</Text>
                <TextInput style={st.input}
                    placeholder="Put the city!"
                    onChangeText={text => setPerson({...person, city: text})}
                />
                <Text style={st.lable}>Street:</Text>
                <TextInput style={st.input}
                    placeholder="Put the street name!"
                    onChangeText={text => setPerson({...person, street: text})}
                />
                <Text style={st.lable}>Number:</Text>
                <TextInput style={st.input}
                    placeholder="Put the number of your house!"
                    keyboardType = 'numeric'
                    onChangeText={text => setPerson({...person, number: text})}
                />
                <Text style={st.lable}>State:</Text>
                <TextInput style={st.input}
                    placeholder="Put the number of your house!"
                    onChangeText={text => setPerson({...person, state: text})}
                />
                <Text style={st.lable}>Country:</Text>
                <TextInput style={st.input}
                    placeholder="Put the number of your house!"
                    onChangeText={text => setPerson({...person, country: text})}
                />
            </ScrollView>
            
        </View>
    )
}

const st = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#B0C4DE',
        justifyContent: 'center'
      },
      imageDisplay: {
        backgroundColor: '#4682B4',
        alignItems: 'center'
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