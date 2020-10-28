import { FieldProps } from 'formik'
import React from 'react'

export const InputField = ({
    field,
    form: _,
    ...props
}: FieldProps) => <input className="uk-input" {...field} {...props} />

