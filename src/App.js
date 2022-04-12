import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import { BtnOne } from './components/Btn';
import { TxtOne } from './components/Txt';
import { TxtInputOne } from './components/TxtInput';
import { HeaderOne } from './components/Header';


export default () => { 
  
  const[txt, setTxt] = React.useState('Campo Vazio')
  const[txtInput, setTxtInput] = React.useState()

  function BtnFunction(){
    if(txtInput){
      setTxt(txtInput)
    }
    else{
      setTxt("Campo vazio")
    }
  }

  function TxtInputFunction(txt){
    setTxtInput(txt)
  }

  return (

    <SafeAreaView style={styles.container}>

        <StatusBar 
            backgroundColor={'black'}
            barStyle="default"
            />

        <HeaderOne />
        <TxtOne txt={txt} />
        <TxtInputOne txtInputFunction={TxtInputFunction} />
        <BtnOne btnFunction={BtnFunction} />

    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
