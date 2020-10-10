import React, { useState } from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useFormikContext } from 'formik'

import colors from '../../config/colors'
import Text from '../Text'
import { RectButton } from 'react-native-gesture-handler'

// TODO implement single checkbox Formik
const CheckBox = ({ title, name }) => {
  const { setFieldValue, values } = useFormikContext()

  const [checked, setChecked] = useState(values[name])

  const handleCheck = () => {
    setChecked(!checked)
    setFieldValue(name, !values[name])
  }

  return (
    <RectButton style={styles.container} onPress={handleCheck} name={name}>
      <View style={[styles.checkBox, values[name] ? styles.checked : null]}>
        <MaterialCommunityIcons name="check" size={20} color={colors.white} />
      </View>
      <Text style={styles.text}>{title}</Text>
    </RectButton>
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
