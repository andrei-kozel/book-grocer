import React from 'react'
import Constants from 'expo-constants'
import { StyleSheet, View } from 'react-native'

const Screen = ({ children }) => {
  return <View style={styles.container}>{children}</View>
}

export default Screen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    fontFamily: 'Roboto'
  }
})
