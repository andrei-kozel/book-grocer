import React from 'react'
import { StyleSheet, View, Image } from 'react-native'

import Text from './Text'
import TitleText from './TitleText'

const BookCard = ({ image, title, author }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={image} />
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
    width: '100%',
    height: '100%'
  },
  imageContainer: {
    height: 200,
    width: 130,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 10
  }
})
