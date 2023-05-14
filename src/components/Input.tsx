import { FieldInputProps } from 'formik'
import React, { FC } from 'react'

interface IInputProps {
  errors: string | undefined
  touched: boolean | undefined
  getFieldProps: (
    props: any
  ) => FieldInputProps<string | number | readonly string[] | undefined>

  name: string
  title: string
  className?: string
}

const Input: FC<IInputProps> = ({
  errors,
  touched,
  getFieldProps,
  name,
  title,
  className,
}) => {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {title}
      </label>
      <div className="mt-2">
        <div
          className={`relative flex rounded shadow-sm border border-gray-300 sm:max-w-md ${
            errors && touched ? '' : 'ring-red-500'
          }`}
        >
          <input
            type="text"
            id={name}
            className={`block ring-0 outline-none !focus:ring-0 flex-1 rounded border-0 bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400  sm:text-sm sm:leading-6 `}
            {...getFieldProps(name)}
          />
          {errors && touched ? (
            <div className="right-2 top-3 absolute text-xs text-red-500">
              {errors}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default Input
