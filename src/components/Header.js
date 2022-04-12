import React from 'react';
import { Text, StyleSheet, View, Alert, TouchableOpacity } from 'react-native';

export function HeaderOne() {
    return (
        
    <View>

        <View style={styles.container}>

            <View style={styles.teste}>

                <Text style={styles.titleText}>        
                    Projeto 2                 
                </Text>

                <View></View>
                <View></View>
                <View></View>
                <View></View>

                <TouchableOpacity 
                    color={'transparent'} 
                    onPress={() => Alert.alert('Insira um texto no campo indicado e aperte o botão para atualizar o campo')}
                    >
                    <Text style={styles.txtButtonMais}>Dica</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    color={'transparent'} 
                    onPress={() => Alert.alert('App fechado')}
                    >
                    <Text style={styles.txtButtonMais}>X</Text>
                </TouchableOpacity>

            </View>

        </View>

    </View>

);
}

const styles = StyleSheet.create({

    container: {
        flex:1,
        backgroundColor: 'blue',
        padding: 60, 
    },

   teste: {
        flexDirection:'row',
        paddingTop: 2,
        paddingHorizontal: 20,
        height: 60, 
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: -50,
        marginRight: -50,
    },
      
    txtButtonMais: {
        color: 'white',
        fontSize: 20
    },

    titleText: {
        color: 'white',
        fontSize: 32,
    },

  });