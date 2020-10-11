import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// Components
import Onboarding from '../screens/Onboarding'
import SignIn from '../screens/SignIn'
import SignUp from '../screens/SignUp'
import ForgotPassworScreen from '../screens/ForgotPassworScreen'

const Login = createStackNavigator()

const LoginNavigartion = () => {
  return (
    <Login.Navigator screenOptions={{ headerShown: false }}>
      <Login.Screen name="Onboarding" component={Onboarding} />
      <Login.Screen name="SignIn" component={SignIn} />
      <Login.Screen name="SignUp" component={SignUp} />
      <Login.Screen name="ForgotPassword" component={ForgotPassworScreen} />
    </Login.Navigator>
  )
}

export default LoginNavigartion
