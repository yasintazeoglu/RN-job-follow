import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class drawerContent extends Component {
  render() {
    return (
      <View>
	  <Text onPress={this.props.navigation.closeDrawer}> textInComponent </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({})
