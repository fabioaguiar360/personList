import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

 const Header = (props) => (
      <View style={st.header}>
        <Text style={st.titleHeader}>{props.title}</Text>
      </View>
  
  );

const st = StyleSheet.create({
    header: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#000',
      width: '100%',
      height: 75,
      padding: 5,
      marginTop: 40
    },
    titleHeader: {
      fontSize: 25,
      color: '#FFF'
    }
  });

  export default Header;