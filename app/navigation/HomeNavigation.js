import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// Components
import HomeScreen from '../screens/HomeScreen'

const Home = createStackNavigator()

const HomeNavigation = () => {
  return (
    <Home.Navigator>
      <Home.Screen name="Home" component={HomeScreen} />
    </Home.Navigator>
  )
}

export default HomeNavigation
