import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'

import colors from '../config/colors'

const { width } = Dimensions.get('window')

const Slide = ({ title, subTitle, children, imageStyle }) => {
  return (
    <View style={styles.container}>
      {title && <Text style={styles.title}>{title}</Text>}
      {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
      {children && (
        <View style={[styles.children, imageStyle]}>{children}</View>
      )}
    </View>
  )
}

export default Slide

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: width,
    overflow: 'hidden',
    position: 'relative',
    paddingHorizontal: 10
  },
  title: {
    color: colors.green,
    fontSize: 30,
    textAlign: 'center',
    marginTop: 70,
    fontFamily: 'OpenSans-Bold'
  },
  subTitle: {
    color: colors.green,
    fontSize: 14,
    textAlign: 'center',
    marginTop: 16,
    fontFamily: 'OpenSans-Regular'
  },
  children: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
