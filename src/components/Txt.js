import React from "react";
import { View, Text, StyleSheet } from "react-native";

export function TxtOne(props) {
  
  return (

    <View style={styles.container}>

        <View>
        <Text>{"\n"}</Text>
          <Text style={styles.textStyle} >{"\n"}{props.txt}{"\n"}</Text>
        </View>

    </View>

  );
}

 const styles = StyleSheet.create({

      container: {
          padding: 20,
        },

      textStyle:{
          textAlign:"center",
          borderRadius:10,
          borderWidth: 2,
          fontSize: 15,
          color: 'black',
          },

});
