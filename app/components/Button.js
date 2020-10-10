import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import colors from '../config/colors'

const Button = ({ title, onPress, disabled = false }) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        disabled ? styles.disabledButton : styles.activeButton
      ]}
      onPress={onPress}>
      <Text
        style={{
          ...styles.text,
          color: disabled ? colors.green : colors.white
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 56,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    zIndex: 1000
  },
  activeButton: {
    color: colors.white,
    backgroundColor: colors.green
  },
  disabledButton: {
    color: colors.green,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.green
  },
  text: {
    fontSize: 15,
    fontFamily: 'OpenSans-Regular'
  }
})
