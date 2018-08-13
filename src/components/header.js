import React, { Component } from "react";
import { Text, StyleSheet, View,BackAndroid } from "react-native";
import { Icon } from "react-native-elements";
export default class header extends Component {
  state = {};
  render() {
    const { open} = this.props;
    const icon_props = {
      containerStyle: styles.menuicon,
      underlayColor: "transparent",
      name: "menu",
      type: "entypo",
      color: "#4b1d3f",
      size: 25,
      onPress: () => open()
    };
    return (
      <View style={styles.main}>
        <View style={styles.menu}>
          <Icon {...icon_props} />
        </View>
        <View style={styles.logo}>
          <Text style={styles.logotext}>Jbify</Text>
        </View>
        <View style={styles.close}>
          <Text style={styles.closeicon} onPress={BackAndroid.exitApp}>X</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    alignSelf: "stretch",
    height: 40,
    backgroundColor: "#5656faed",
    flexDirection: "row",
    alignItems: "center"
  },
  logo: {
    flexDirection: "row",
    flex: 1
  },
  menu: {
    flex: 1,
    alignItems: "flex-start"
  },
  close: {
    flex: 0.2
  },
  closeicon: {
    textAlign: "right",
    marginRight: 13,
    color: "#4B1D3F",
    fontSize: 22,
    fontWeight: "bold"
  },
  menuicon: {
    marginLeft: 8
  },
  logotext: {
    color: "#A30155",
    fontSize: 20,
    fontWeight: "bold"
  }
});
