import React from 'react'
import Button from '../Button'
import { useFormikContext } from 'formik'

const SubmitButton = ({ title, disabled }) => {
  const { handleSubmit } = useFormikContext()

  return <Button title={title} disabled={disabled} onPress={handleSubmit} />
}

export default SubmitButton
