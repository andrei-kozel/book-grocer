import React from 'react'
import { StyleSheet, View, Image } from 'react-native'

import Text from './Text'
import TitleText from './TitleText'
import colors from '../config/colors'

const BookCard = ({ image, title, author }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <View style={styles.imageRadius}>
          <Image style={styles.image} source={image} />
        </View>
      </View>
      <TitleText style={{ marginTop: 20, textAlign: 'center', width: 130 }}>
        {title}
      </TitleText>
      <Text style={{ textAlign: 'center', marginTop: 10, width: 130 }}>
        {author}
      </Text>
    </View>
  )
}

export default BookCard

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginHorizontal: 30
  },
  image: {
    width: 130,
    height: 200
  },
  imageRadius: {
    borderRadius: 10,
    overflow: 'hidden'
  },
  imageContainer: {
    height: 200,
    width: 130,
    borderRadius: 10,
    elevation: 5,
    shadowColor: colors.dark,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.6,
    shadowRadius: 3.84
  }
})
