import { StatusBar } from 'expo-status-bar'
import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Animated,
  useWindowDimensions
} from 'react-native'
import BookCard from '../../components/BookCard'
import ScreenWrapper from '../../components/ScreenWrapper'

const featuredBooks = [
  { key: 'left_spacer' },
  {
    title: 'The Dissapearance of Emila Zola',
    author: 'Michael Rosen',
    image: require('../../assets/images/featured/2.jpg')
  },
  {
    title: 'Fatherhood',
    author: 'Marcus Berkmann',
    image: require('../../assets/images/featured/1.jpg')
  },
  {
    title: 'The Time Travellers Handbook',
    author: 'Stride Lottie',
    image: require('../../assets/images/featured/3.jpg')
  },
  {
    title: 'Doctor Who',
    author: 'Giovanni Rigano',
    image: require('../../assets/images/featured/4.jpg')
  },
  {
    title: 'Illegal',
    author: 'Giovanni Rigano',
    image: require('../../assets/images/featured/5.jpg')
  },
  {
    title: 'SLUGFEST',
    author: 'Marvel and DC',
    image: require('../../assets/images/featured/6.jpg')
  },
  {
    title: 'Tank Girl',
    author: 'Alan Martin',
    image: require('../../assets/images/featured/7.jpg')
  },
  { key: 'right_spacer' }
]

const HomeScreen = () => {
  const scrollX = React.useRef(new Animated.Value(0)).current
  const { width } = useWindowDimensions()

  return (
    <ScreenWrapper title="Our Top Picks">
      <StatusBar style="light" />
      <ScrollView>
        <View style={styles.featuredBooksContainer}>
          <Animated.FlatList
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              { useNativeDriver: true }
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToInterval={190}
            scrollEventThrottle={16}
            decelerationRate={0}
            bounces={false}
            data={featuredBooks}
            contentContainerStyle={{ alignItems: 'center' }}
            keyExtractor={(item) => item.title}
            renderItem={({ item, index }) => {
              const inputRange = [
                (index - 2) * 190,
                (index - 1) * 190,
                index * 190
              ]
              const translateY = scrollX.interpolate({
                inputRange,
                outputRange: [0, -20, 0]
              })
              const scale = scrollX.interpolate({
                inputRange,
                outputRange: [0.9, 1.1, 0.9]
              })

              if (!item.title) {
                return <View key={index} style={{ width: (width - 190) / 2 }} />
              }
              return (
                <View style={{ width: 190 }}>
                  <Animated.View
                    style={{
                      paddingTop: 40,
                      transform: [{ translateY }, { scale }]
                    }}>
                    <BookCard
                      key={item.title}
                      image={item.image}
                      title={item.title}
                      author={item.author}
                    />
                  </Animated.View>
                </View>
              )
            }}
          />
        </View>
      </ScrollView>
    </ScreenWrapper>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})
