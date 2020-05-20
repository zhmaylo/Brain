import React from 'react';
import { View, StyleSheet, Button, Alert, Text } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';

export const ErrorAlert = () => {

   const showAlert = () =>{
       Alert.alert(
          'You need to...'
       )
    }
    return (
       <TouchableOpacity onPress = {showAlert} style = {styles.button}>
          <Text>Alert</Text>
       </TouchableOpacity>
    )
 }

  


const styles = StyleSheet.create ({
  button: {
     backgroundColor: '#4ba37b',
     width: 100,
     borderRadius: 50,
     alignItems: 'center',
     marginTop: 100
  }
})

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "space-around",
//     alignItems: "center"
//   }
// });
