import React from "react";
import { TextInput, View, Text, StyleSheet } from "react-native";

export function TxtInputOne(props) {

  return (

    <View style={styles.container}>

        <View>
          <Text style={styles.textStyle}>Novo texto</Text>
            <TextInput
                placeholder="Digite"
                style={styles.input}
                onChangeText={(txt) => {props.txtInputFunction(txt)}}    
                />
                
        </View>

    </View>
    

  );
  
}

 const styles = StyleSheet.create({

  container: {
      padding: 10,
    },

  textStyle:{
      fontSize: 15,
      color: 'black',
      marginLeft: 12,
      },

  input: {
      borderRadius:10,
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
  },

});
