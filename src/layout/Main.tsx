import * as React from 'react'
import { Formik, FormikHelpers } from 'formik'
import { IValues } from '~/types'
import * as Yup from 'yup'

const ValidationSchema = Yup.object().shape({
  namespace: Yup.string().required('Required'),
  data: Yup.string().required('Required'),
  gas: Yup.number().min(80000).required('Required'),
  fee: Yup.string().min(2000).required('Required'),
})

const Main = () => {
  return (
    <div className="space-y-10 w-full">
      <div className="flex gap-8 w-full">
        <Formik
          initialValues={{
            namespace: '',
            data: '',
            gas: 80000,
            fee: 2000,
          }}
          validationSchema={ValidationSchema}
          onSubmit={(
            values: IValues,
            { setSubmitting }: FormikHelpers<IValues>
          ) => {
            console.log(values)
          }}
        >
          {(formik) => (
            <form
              onSubmit={formik.handleSubmit}
              className="bg-white shadow-sm border border-neutral-400 rounded-xl w-5/12"
            >
              <div className="px-4 py-6 sm:p-8">
                <div className="">
                  <div className="mb-4">
                    <label
                      htmlFor="namespace"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Namespace | ID *
                    </label>
                    <div className="mt-2">
                      <div
                        className={`relative flex rounded shadow-sm border border-gray-300 sm:max-w-md ${
                          formik.errors.namespace && formik.touched.namespace
                            ? ''
                            : 'ring-red-500'
                        }`}
                      >
                        <input
                          type="text"
                          id="namespace"
                          className={`block ring-0 outline-none !focus:ring-0 flex-1 rounded border-0 bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400  sm:text-sm sm:leading-6 `}
                          {...formik.getFieldProps('namespace')}
                        />
                        {formik.errors.namespace && formik.touched.namespace ? (
                          <div className="right-2 top-3 absolute text-xs text-red-500">
                            {formik.errors.namespace}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="data"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Data | hex-coded bytes *
                    </label>
                    <div className="mt-2">
                      <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-1 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        <input
                          type="text"
                          id="data"
                          className="block flex-1 border-0 bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                          {...formik.getFieldProps('data')}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="gas"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Gas limit *
                    </label>
                    <div className="mt-2">
                      <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-1 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        <input
                          type="text"
                          id="gas"
                          className="block flex-1 border-0 bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                          {...formik.getFieldProps('gas')}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="fee"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Fee *
                    </label>
                    <div className="mt-2">
                      <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-1 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        <input
                          type="text"
                          id="fee"
                          className="block flex-1 border-0 bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                          {...formik.getFieldProps('fee')}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-end gap-x-6 border-t border-neutral-400 px-4 py-4 sm:px-8">
                <button
                  type="submit"
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Submit
                </button>
              </div>
            </form>
          )}
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
