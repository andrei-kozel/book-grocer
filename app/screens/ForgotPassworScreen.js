import React from 'react'
import { StyleSheet } from 'react-native'
import * as Yup from 'yup'

import Form from '../components/Forms/Form'
import FormField from '../components/Forms/FormField'
import FormScreenWrapper from '../components/Forms/FormScreenWrapper'
import SubmitButton from '../components/Forms/SubmitButton'
import Text from '../components/Text'

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email')
})

const ForgotPassworScreen = ({ navigation }) => {
  return (
    <FormScreenWrapper title="Forgot password" navigation={navigation}>
      <Text>
        Please enter your email address. We will send you an email with
        instructions.
      </Text>
      <Form
        initialValues={{
          email: ''
        }}
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
        <SubmitButton title="Send email" />
      </Form>
    </FormScreenWrapper>
  )
}

export default ForgotPassworScreen

const styles = StyleSheet.create({})
