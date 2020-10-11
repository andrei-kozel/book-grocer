import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

// Navigators
import LoginNavigartion from './LoginNavigartion'
import HomeNavigation from './HomeNavigation'

const Stack = createStackNavigator()

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginNavigartion}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={HomeNavigation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigator
