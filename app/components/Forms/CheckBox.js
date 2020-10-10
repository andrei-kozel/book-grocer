import React, { useState } from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../../config/colors'
import Text from '../Text'

const CheckBox = ({ title }) => {
  const [isChecked, setIsChecked] = useState(false)

  const handlePress = () => {
    setIsChecked((prevState) => !prevState)
  }

  return (
    <TouchableOpacity style={styles.container} onPress={() => handlePress()}>
      <View style={[styles.checkBox, isChecked ? styles.checked : null]}>
        <MaterialCommunityIcons name="check" size={20} color={colors.white} />
      </View>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CheckBox

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  checkBox: {
    borderColor: colors.medium,
    borderRadius: 8,
    borderWidth: 1,
    height: 24,
    marginRight: 8,
    width: 24
  },
  checked: {
    backgroundColor: colors.green,
    borderColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center'
  },

  text: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 12,
    color: colors.medium
  }
})
