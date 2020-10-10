import React from 'react'
import { StyleSheet, View } from 'react-native'

import * as Yup from 'yup'

import SubmitButton from '../components/Forms/SubmitButton'
import CheckBox from '../components/Forms/CheckBox'
import Form from '../components/Forms/Form'
import FormField from '../components/Forms/FormField'
import FormScreenWrapper from '../components/Forms/FormScreenWrapper'

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label('Name'),
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password '),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Passwords must match'
  ),
  checked: Yup.boolean()
})

const SignUp = ({ navigation }) => {
  return (
    <FormScreenWrapper title="Sign Up" navigation={navigation}>
      <Form
        initialValues={{
          name: '',
          email: '',
          password: ' ',
          passwordConfirmation: '',
          checked: false
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}>
        <FormField
          name="name"
          icon="account"
          placeholder="Your Name"
          autoCorrect={false}
          autoCapitalize="words"
          keyboardType="default"
          textContentType="name"
        />
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
        <FormField
          name="passwordConfirmation"
          icon="lock"
          placeholder="Repeat Password"
          type="password"
          autoCorrect={false}
          secureTextEntry
          textContentType="password"
        />
        <View style={styles.subFormContainer}>
          <CheckBox
            title="Please sign me up for the monthly newsletter."
            name="checked"
          />
        </View>
        <SubmitButton title="Sign Up" />
      </Form>
    </FormScreenWrapper>
  )
}

export default SignUp

const styles = StyleSheet.create({
  subFormContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10
  }
})
