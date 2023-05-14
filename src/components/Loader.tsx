import * as React from 'react'
import { TailSpin } from 'react-loader-spinner'

const Loader = () => {
  return (
    <TailSpin
      height="20"
      width="20"
      color="#fff"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperClass="flex justify-center"
      visible={true}
    />
  )
}

export default Loader
