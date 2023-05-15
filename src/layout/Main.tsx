import React from 'react'
import { FormikHelpers, useFormik } from 'formik'
import { IValues } from '~/types'
import * as Yup from 'yup'
import Loader from '~/components/Loader'
import Input from '~/components/Input'
import { useData } from '~/hooks/useData'
import Table from '~/components/Table'

function generateHexStrings() {
  const nID = Array.from({ length: 16 }, () =>
    Math.floor(Math.random() * 16).toString(16)
  ).join('')

  const lenMsg = Math.floor(Math.random() * 51) * 2

  const msg = Array.from({ length: lenMsg }, () =>
    Math.floor(Math.random() * 16).toString(16)
  ).join('')

  return [nID, msg]
}

const ValidationSchema = Yup.object().shape({
  namespace_id: Yup.string().required('Required'),
  data: Yup.string().required('Required'),
  gas_limit: Yup.number().min(80000).required('Required'),
  fee: Yup.number().min(2000).required('Required'),
})

const Main = () => {
  const { submitData, dataArr, clearData } = useData()

  const formik = useFormik({
    initialValues: {
      namespace_id: '',
      data: '',
      gas_limit: 80000,
      fee: 2000,
    },
    validationSchema: ValidationSchema,
    onSubmit: async (
      values: IValues,
      { setSubmitting }: FormikHelpers<IValues>
    ) => {
      setSubmitting(true)

      await submitData(values)
      setSubmitting(false)
    },
  })

  const handleGenerate = () => {
    const [nID, msg] = generateHexStrings()

    formik.setFieldValue('namespace_id', nID)
    formik.setFieldValue('data', msg)
  }

  return (
    <div className="space-y-10 w-full">
      <div className="flex flex-col justify-center  md:flex-row gap-8 w-full ">
        <form
          onSubmit={formik.handleSubmit}
          className="bg-white shadow-sm border border-neutral-200 rounded w-full sm:w-8/12 md:w-5/12 mx-auto h-min"
        >
          <div className="px-4 py-6 sm:p-8">
            <Input
              errors={formik.errors.namespace_id}
              touched={formik.touched.namespace_id}
              getFieldProps={formik.getFieldProps}
              name="namespace_id"
              title="Namespace | ID *"
              className="mb-4"
            />
            <Input
              errors={formik.errors.data}
              touched={formik.touched.data}
              getFieldProps={formik.getFieldProps}
              name="data"
              title="Data | hex-coded bytes *"
              className="mb-4"
            />
            <Input
              errors={formik.errors.gas_limit}
              touched={formik.touched.gas_limit}
              getFieldProps={formik.getFieldProps}
              name="gas_limit"
              title="Gas limit *"
              className="mb-4"
            />
            <Input
              errors={formik.errors.fee}
              touched={formik.touched.fee}
              getFieldProps={formik.getFieldProps}
              name="fee"
              title="Fee *"
              className="mb-4"
            />
          </div>
          <div className="flex items-center justify-end gap-x-6 border-t border-neutral-200 px-4 py-4 sm:px-8">
            <button
              onClick={handleGenerate}
              type="button"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-indigo-600 text-center"
            >
              Generate
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-20 text-center"
            >
              {formik.isSubmitting ? <Loader /> : 'Submit'}
            </button>
          </div>
        </form>

        <div className="sm:px-0 md:w-7/12">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              My history
            </h2>
            <button
              onClick={clearData}
              type="button"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-indigo-600  text-center"
            >
              Clear history
            </button>
          </div>
          <Table data={dataArr} />
        </div>
      </div>
    </div>
  )
}

export default Main
