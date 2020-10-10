import { StatusBar } from 'expo-status-bar'
import React from 'react'
import * as Font from 'expo-font'
import { AppLoading } from 'expo'

import MainNavigator from './app/navigation/MainNavigator'

export default function App() {
  const [isLoaded] = Font.useFonts({
    'OpenSans-Regular': require('./assets/fonts/OpenSans-Regular.ttf'),
    'OpenSans-Bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
  if (!isLoaded) {
    return <AppLoading />
  } else {
    return (
      <>
        <StatusBar style="dark" />
        <MainNavigator />
      </>
    )
  }
}
