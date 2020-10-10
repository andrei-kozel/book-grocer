import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

// Navigators
import LoginNavigartion from './LoginNavigartion'

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <LoginNavigartion />
    </NavigationContainer>
  )
}

export default MainNavigator
