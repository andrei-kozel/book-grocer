import React from 'react'
import { StyleSheet, Text } from 'react-native'
import colors from '../config/colors'

const TitleText = ({ style, children }) => {
  return <Text style={[styles.text, style]}>{children}</Text>
}

export default TitleText

const styles = StyleSheet.create({
  text: {
    color: colors.dark,
    fontSize: 16
  }
})
