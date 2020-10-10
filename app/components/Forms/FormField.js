import React from 'react'
import { useFormikContext } from 'formik'

import ErrorMessage from './ErrorMessage'
import TextInput from '../TextInput'

const FormField = ({ name, ...otherProps }) => {
  const { handleChange, setFieldTouched, errors, touched } = useFormikContext()
  return (
    <>
      <TextInput
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  )
}

export default FormField
