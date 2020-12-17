import React,  {useState, useEffect} from 'react';
// import api from '../services/api';
import { TextImput, Image, TouchableOpacity, Text} from 'react-native';

export default function PersonForm(props){

    const [person, setPerson] = useState([]);

    function getPersonData(){
        setPerson(props.route.params);
        // console.log(props.route.params);
    };

    useEffect(() =>{
        getPersonData();
    },[]);

    return(
        <Text>{person.name}</Text>
    )
}