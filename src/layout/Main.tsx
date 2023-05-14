import * as React from 'react'
import { Formik, FormikHelpers } from 'formik'
import { IValues } from '~/types'
import * as Yup from 'yup'
import Loader from '~/components/Loader'
import Input from '~/components/Input'

const ValidationSchema = Yup.object().shape({
  namespace: Yup.string().required('Required'),
  data: Yup.string().required('Required'),
  gas: Yup.number().min(80000).required('Required'),
  fee: Yup.number().min(2000).required('Required'),
})

const Main = () => {
  return (
    <div className="space-y-10 w-full">
      <div className="flex gap-8 w-full">
        <Formik
          initialValues={{
            namespace: 'dd',
            data: 'dd',
            gas: 80000,
            fee: 2000,
          }}
          validationSchema={ValidationSchema}
          onSubmit={(
            values: IValues,
            { setSubmitting }: FormikHelpers<IValues>
          ) => {
            setSubmitting(true)

            setTimeout(() => {
              console.log(values)
              setSubmitting(false)
            }, 1000)
          }}
        >
          {({ errors, touched, getFieldProps, isSubmitting, handleSubmit }) => {
            return (
              <form
                onSubmit={handleSubmit}
                className="bg-white shadow-sm border border-neutral-400 rounded-xl w-5/12"
              >
                <div className="px-4 py-6 sm:p-8">
                  <Input
                    errors={errors.namespace}
                    touched={touched.namespace}
                    getFieldProps={getFieldProps}
                    name="namespace"
                    title="Namespace | ID *"
                    className="mb-4"
                  />
                  <Input
                    errors={errors.data}
                    touched={touched.data}
                    getFieldProps={getFieldProps}
                    name="data"
                    title="Data | hex-coded bytes *"
                    className="mb-4"
                  />
                  <Input
                    errors={errors.gas}
                    touched={touched.gas}
                    getFieldProps={getFieldProps}
                    name="gas"
                    title="Gas limit *"
                    className="mb-4"
                  />
                  <Input
                    errors={errors.fee}
                    touched={touched.fee}
                    getFieldProps={getFieldProps}
                    name="fee"
                    title="Fee *"
                    className="mb-4"
                  />
                </div>
                <div className="flex items-center justify-end gap-x-6 border-t border-neutral-400 px-4 py-4 sm:px-8">
                  <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-20 text-center"
                  >
                    {isSubmitting ? <Loader /> : 'Submit'}
                  </button>
                </div>
              </form>
            )
          }}
        </Formik>

        <div className="px-4 sm:px-0 w-7/12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Response
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Response data here
          </p>
        </div>
      </div>
    </div>
  )
}

export default Main
