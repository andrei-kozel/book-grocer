import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../config/colors'

const HeaderTitle = ({ children, style }) => {
  return <Text style={[styles.text, style]}>{children}</Text>
}

export default HeaderTitle

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    color: colors.dark,
    fontFamily: 'OpenSans-Bold',
    marginBottom: 20
  }
})
