import React from 'react';
import { View, StyleSheet, Button, Alert, Text } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';

export const ErrorAlert = (props) => {


   return (
      <View style={styles.container}>
         <Text>Alert</Text>
         <Text>{props.errorResp.message} </Text>
         <TouchableOpacity>
            <Button 
               onPress={() => props.navigation.navigate('MenuScreen')}
               title="Return" color="blue" 
            />
         </TouchableOpacity>
      </View>
   )
}

  

const styles = StyleSheet.create ({
  button: {
     backgroundColor: '#4ba37b',
     width: 100,
     borderRadius: 50,
     alignItems: 'center',
     marginTop: 100
  },

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})
