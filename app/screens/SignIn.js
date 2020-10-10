import React from 'react'
import { StyleSheet, View } from 'react-native'

import Button from '../components/Button'
import CheckBox from '../components/Forms/CheckBox'
import HeaderTitle from '../components/HeaderTitle'
import TextInput from '../components/TextInput'
import colors from '../config/colors'
import Text from '../components/Text'

const SignIn = () => {
  return (
    <View style={styles.container}>
      <HeaderTitle>Sign In</HeaderTitle>
      <TextInput
        icon="email"
        placeholder="Email Address"
        autoCorrect={false}
        autoCapitalize="none"
        keyboardType="email-address"
        textContentType="emailAddress"
      />
      <TextInput
        icon="onepassword"
        placeholder="Password"
        type="password"
        autoCorrect={false}
        secureTextEntry
        textContentType="password"
      />
      <View style={styles.subFormContainer}>
        <CheckBox title="Stay Logged In" />
        <Text>Forgot Your Password?</Text>
      </View>
      <Button title="Sign In" disabled={true} />
    </View>
  )
}

export default SignIn

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: colors.white,
    flex: 1
  },
  subFormContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10
  }
})
