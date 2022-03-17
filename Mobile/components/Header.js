import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Logo from "../assets/logo.svg";
import ArrowLeft from "../assets/arrow_left.svg";
import IconClose from "../assets/close.svg"

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.mostrarBotao = true;
  }
  render() {
    return (
      <View style={styles.container}>
        {
        this.mostrarBotao ?  
        <ArrowLeft style={styles.imageIcon} width="20" height="20" /> 
        :
        <IconClose style={styles.imageIcon} width="30" height="30"/>
          }
       

        <Logo width="150" height="60" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F4F4F4",
  },
  imageIcon: {
    marginRight: 70,
    margin: 25,
  },
});
