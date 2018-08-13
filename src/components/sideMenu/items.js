import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Icon } from "react-native-elements";
export default class Items extends Component {
  render() {
    const { router, navigate } = this.props;
    const Item = ({ title, iconName, screen},k) => (
      <View style={styles.container} key={k}>
        <View style={styles.iconTextCover}>
          <View style={styles.icon}>
            <Icon color="#A30155" name={iconName} type="entypo" size={25} />
          </View>
          <View style={styles.titleCover}>
            <Text style={styles.title}>{title}</Text>
          </View>
        </View>
        <View style={styles.goIcon}>
          <Icon
            underlayColor="transparent"
            name="ios-arrow-forward"
            type="ionicon"
            size={25}
            onPress={() => navigate(screen)}
            color="#A30155"
          />
        </View>
      </View>
    );
    return <View>{router.map((v, k) => Item(v,k))}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderBottomWidth: 0.5,
    borderColor: "white",
    height: 30,
    marginBottom: 10
  },
  icon: {
    marginRight: 10
  },
  titleCover: {
    // flex:1
  },
  title: {
    fontSize: 16,
    color: "white"
  },
  goIcon: {
    // flex:1
  },
  iconTextCover: {
    flexDirection: "row",
    width: 120,
    marginRight: 50
  }
});
