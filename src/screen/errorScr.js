import React, { useContext } from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import { ContextApp } from "../reducers/unionRdc";

export default function errorScr (props) {
   const { state, dispatch } = useContext(ContextApp);
        
   const errorResp = state.statusResponseRdc.statusResponse;
   return (
      <View style={styles.container}>
         <Text>Alert</Text>
         <Text id="errMes">{errorResp.message} </Text>
         {/* <TouchableOpacity>
            <Button 
               onPress={() => props.navigation.goBack()}
               title="Back" color="blue" 
            />
         </TouchableOpacity> */}
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
