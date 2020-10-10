import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import * as Font from 'expo-font'

import MainNavigator from './app/navigation/MainNavigator'

const fetchFonts = () => {
  return Font.loadAsync({
    'OpenSans-Regular': require('./assets/fonts/OpenSans-Regular.ttf'),
    'OpenSans-Bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
}
export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false)

  if (!fontLoaded) {
    fetchFonts().then(() => setFontLoaded(true))
    return null
  } else {
    return (
      <>
        <StatusBar style="dark" />
        <MainNavigator />
      </>
    )
  }
}
