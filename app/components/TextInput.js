import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../config/colors'

const AppTextInput = ({ icon, width = '100%', ...otherProps }) => {
  return (
    <View style={[styles.container, { width }]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput
        width="100%"
        placeholderTextColor={colors.medium}
        {...otherProps}
      />
    </View>
  )
}

export default AppTextInput

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.light,
    borderRadius: 20,
    flexDirection: 'row',
    padding: 15,
    marginVertical: 10
  },
  icon: {
    marginRight: 10
  }
})
