import React, { Component } from "react";
import { Text, View } from "react-native";
import { Icon } from "react-native-elements";
import Items from "./items";

export default class drawerContent extends Component {
  render() {
    const { navigate } = this.props.navigation;
    const router = [
      { title: "Expenses", iconName: "credit", screen: "Expenses" },
      { title: "Companies", iconName: "xing", screen: "Companies" },
      { title: "Works", iconName: "wallet", screen: "Works" },
      { title: "Type of Expense", iconName: "ticket", screen: "Expense_Type" }
    ];
    return (
      <View style={styles.container}>
        <View style={styles.logo}>
          <View style={styles.iconCover}>
            <View style={{ zIndex: 1 }}>
              <Icon {...styles.icon} />
            </View>
            <View style={styles.logoBackground} />
          </View>
          <View style={styles.textCover}>
            <Text style={styles.logoText_J}>J</Text>
            <Text style={styles.logoText}>bify</Text>
          </View>
        </View>
        <View style={styles.items}>
          <Items router={router} navigate={navigate} />
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#5656faed",
    alignItems: "center"
  },
  logoBackground: {
    position: "absolute",
    backgroundColor: "white",
    width: 50,
    height: 50,
    zIndex: 0,
    margin: 25
  },
  logo: {
    width: 100,
    alignItems: "center"
  },
  iconCover: {},
  icon: {
    name: "stumbleupon-with-circle",
    type: "entypo",
    size: 100,
    color: "#A30155"
  },
  logoText: {
    // color: "#A30155",
    color: "white",
    // fontWeight: "bold",
    fontSize: 25,
    // rotation: -30
transform:[
      {rotate:"-30deg"}
    ]
  },
  logoText_J: {
    color: "#A30155",
    fontWeight: "bold",
    fontSize: 25,
    marginTop: 15,
    transform:[
      {rotate:"-30deg"}
    ]
  },
  textCover: {
    flexDirection: "row",
    marginLeft: 50,
    marginTop: -15
  },
  items: {
    marginTop: 60
  }
};
