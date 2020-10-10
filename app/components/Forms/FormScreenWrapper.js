import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import Screen from '../Screen'
import HeaderTitle from '../HeaderTitle'
import colors from '../../config/colors'

const FormScreenWrapper = ({ navigation, title, children }) => {
  return (
    <View style={styles.container}>
      <Screen>
        <TouchableOpacity
          style={styles.circleBackButton}
          onPress={() => navigation.goBack()}>
          <Ionicons name="ios-arrow-back" size={34} color={colors.green} />
        </TouchableOpacity>
        <HeaderTitle>{title}</HeaderTitle>
        {children}
      </Screen>
    </View>
  )
}

export default FormScreenWrapper

const styles = StyleSheet.create({
  circleBackButton: {
    padding: 10,
    marginLeft: -10
  },
  container: {
    paddingHorizontal: 20,
    backgroundColor: colors.white,
    flex: 1
  }
})
