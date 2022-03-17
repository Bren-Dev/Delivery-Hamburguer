import { StatusBar } from 'expo-status-bar';
import  Constants  from 'expo-constants';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import Header from './components/Header';
import Main from './components/Main';

export default class App extends React.Component{

    render(){
      return(
        <ScrollView style={styles.container} contentContainerStyle={{}}>
          <Header></Header>
          <Main></Main>
        </ScrollView>
      );
    }

}


const styles = StyleSheet.create({
  container: {
    marginTop:Constants.statusBarHeight,
    flex: 1,
    backgroundColor: '#fff',

  },
});
