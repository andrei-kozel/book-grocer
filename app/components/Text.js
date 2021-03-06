import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../config/colors'

const AppText = ({ style, children }) => {
  return <Text style={[styles.text, style]}>{children}</Text>
}

export default AppText

const styles = StyleSheet.create({
  text: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 12,
    color: colors.medium
  }
})
