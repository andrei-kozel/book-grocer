import React from 'react'
import { StyleSheet, View, Dimensions } from 'react-native'
import Constants from 'expo-constants'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../config/colors'
import { HeaderTitle } from '@react-navigation/stack'

const { width } = Dimensions.get('window')

const ScreenWrapper = ({ children, title }) => {
  return (
    <View style={styles.container}>
      <View style={styles.background} />
      <View style={styles.header}>
        <HeaderTitle style={{ color: colors.white }}>{title}</HeaderTitle>
        <MaterialCommunityIcons name="menu" color={colors.white} size={34} />
      </View>
      {children}
    </View>
  )
}

export default ScreenWrapper

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    position: 'relative'
  },
  background: {
    backgroundColor: colors.green,
    borderRadius: (width + 100) / 2,
    height: width + 100,
    left: -50,
    position: 'absolute',
    top: -width / 2,
    width: width + 100
  },
  header: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 20
  }
})
