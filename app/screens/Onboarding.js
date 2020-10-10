import React, { useState } from 'react'
import { useWindowDimensions, ScrollView, StyleSheet, View } from 'react-native'

import Button from '../components/Button'

import Slide from '../components/Slide'
import Image1 from '../components/SVG/SlidesImage/Image1'
import Image2 from '../components/SVG/SlidesImage/Image2'
import Image3 from '../components/SVG/SlidesImage/Image3'
import Girl from '../components/SVG/images/Girl'
import Leaf from '../components/SVG/images/Leaf'
import Tree from '../components/SVG/images/Tree'
import Dot from '../components/Dot'
import colors from '../config/colors'

const onboardingData = [
  {
    index: 0,
    title: 'Discounted Secondhand Books',
    subTitle: 'Used and near new secondhand books at great prices.'
  },
  {
    index: 1,
    title: '20 Book Grocers Nationally',
    subTitle: "We've successfully opened 20 stores across Australia."
  },
  {
    index: 2,
    title: 'Sell or Recycle Your Old Books With Us',
    subTitle:
      "If you're looking to downsize, sell or recycle old books, the Book Grocer can help."
  },
  {
    index: 3,
    title: 'Books For'
  }
]

const Onboarding = ({ navigation }) => {
  const { width } = useWindowDimensions()
  const [currentIndex, seCurrentIndex] = useState(0)

  const handleScroll = (event) => {
    const positionalWidth = event.nativeEvent.contentOffset.x
    seCurrentIndex(Math.round(positionalWidth / width))
  }

  const registerComponent = (
    <View style={styles.imagesContainer}>
      <Tree style={{ ...styles.svg, top: 0, left: -30 }} />
      <Leaf style={{ ...styles.svg, top: 0, right: -70 }} />
      <View style={styles.buttonContainer}>
        <Button title="Sign In" onPress={() => navigation.navigate('SignIn')} />
        <Button title="Sign Up" onPress={() => navigation.navigate('SignUp')} />
      </View>
      <Girl style={{ ...styles.svg, bottom: -60, left: -180 }} />
    </View>
  )

  return (
    <View style={styles.container}>
      <View style={styles.slider}>
        <ScrollView
          onScroll={(e) => handleScroll(e)}
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          scrollEventThrottle={1}>
          {onboardingData.map((item) => (
            <Slide title={item.title} subTitle={item.subTitle} key={item.index}>
              {item.index === 0 && <Image1 />}
              {item.index === 1 && <Image2 />}
              {item.index === 2 && <Image3 />}
              {item.index === 3 && registerComponent}
            </Slide>
          ))}
        </ScrollView>
        <View style={styles.pagination}>
          {onboardingData.map((item) => (
            <Dot
              key={item.index}
              index={item.index}
              currentIndex={currentIndex}
            />
          ))}
        </View>
      </View>
    </View>
  )
}

export default Onboarding

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  slider: {
    flex: 1
  },
  buttonContainer: {
    position: 'absolute',
    flex: 1,
    width: '100%',
    padding: 5,
    justifyContent: 'center',
    height: '100%'
  },
  svg: {
    position: 'absolute'
  },
  imagesContainer: {
    position: 'relative',
    flex: 1,
    width: '100%',
    height: '100%'
  },
  pagination: {
    width: '100%',
    height: 45,
    position: 'absolute',
    bottom: 120,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
