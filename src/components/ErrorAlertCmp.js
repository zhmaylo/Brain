import React from 'react';
import { View, StyleSheet, Button, Alert } from "react-native";

export const ErrorAlert = () => {

  const errorAlert = () => { console.log("Into errorAlert");

    // alert(title, message?, buttons?, options?);
    Alert.alert(
      "Alert Title",
      "My Alert Msg",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    )
    console.log("Finish errorAlert");
  };

  return (
    <View style={styles.container}>
      <Button title={"Error message"} onPress={errorAlert} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center"
  }
});
