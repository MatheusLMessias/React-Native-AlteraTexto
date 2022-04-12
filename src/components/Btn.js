import React from "react";
import {  View, Text, TouchableOpacity, StyleSheet } from "react-native";

export function BtnOne(props) {

  return (

    <View style={styles.container}>

        <View>
          <TouchableOpacity 
          style={styles.input}
          onPress={()=>{props.btnFunction()}}
          >
            <Text style={styles.textStyleBtn}>Clique para mudar</Text>
          </TouchableOpacity>
        </View>

    </View>

  );
}

 const styles = StyleSheet.create({

    container: {
        padding: 10,
      },

    textStyleBtn:{
        textAlign: "center",
        fontSize: 15,
        color: 'white',
        },
      
    input: {
        borderRadius:30,
        backgroundColor:'blue',
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },

});
