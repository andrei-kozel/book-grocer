import React from 'react'
import { StyleSheet, View } from 'react-native'
import * as Yup from 'yup'

import SubmitButton from '../components/Forms/SubmitButton'
import CheckBox from '../components/Forms/CheckBox'
import Text from '../components/Text'
import Form from '../components/Forms/Form'
import FormField from '../components/Forms/FormField'
import FormScreenWrapper from '../components/Forms/FormScreenWrapper'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password '),
  checked: Yup.boolean()
})

const SignIn = ({ navigation }) => {
  return (
    <FormScreenWrapper title="Sign In" navigation={navigation}>
      <Form
        initialValues={{ email: '', password: '', checked: false }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}>
        <FormField
          name="email"
          icon="email"
          placeholder="Email Address"
          autoCorrect={false}
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
        />
        <FormField
          name="password"
          icon="lock"
          placeholder="Password"
          type="password"
          autoCorrect={false}
          secureTextEntry
          textContentType="password"
        />
        <View style={styles.subFormContainer}>
          <CheckBox title="Stay Logged In" name="checked" />
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('ForgotPassword')}>
            <Text>Forgot Your Password?</Text>
          </TouchableWithoutFeedback>
        </View>
        <SubmitButton title="Sign In" />
      </Form>
    </FormScreenWrapper>
  )
}

export default SignIn

const styles = StyleSheet.create({
  subFormContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10
  }
})
