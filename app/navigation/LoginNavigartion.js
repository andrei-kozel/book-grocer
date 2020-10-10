import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// Components
import Onboarding from '../screens/Onboarding'
import SignIn from '../screens/SignIn'
import SignUp from '../screens/SignUp'

const Login = createStackNavigator()

const LoginNavigartion = () => {
  return (
    <Login.Navigator>
      <Login.Screen
        options={{ headerShown: false }}
        name="Onboarding"
        component={Onboarding}
      />
      <Login.Screen
        options={{
          headerStyle: {
            elevation: 0
          },
          headerTitle: false
        }}
        name="SignIn"
        component={SignIn}
      />
      <Login.Screen name="SignUp" component={SignUp} />
    </Login.Navigator>
  )
}

export default LoginNavigartion
