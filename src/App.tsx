import React from 'react'
import Main from './layout/Main'

function App(): JSX.Element {
  return (
    <div className="p-4 mt-10 max-w-7xl mx-auto flex flex-col justify-center items-center">
      <div className="h-10 mb-10">
        <img
          src="https://celestia.org/static/celestia-logo-29451ae35d3bb72cc4b0f17712d44c3a.svg"
          alt="Celestia logo"
          className="block w-full h-full"
        />
      </div>

      <Main />
    </div>
  )
}

export default App
