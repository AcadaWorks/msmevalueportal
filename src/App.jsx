import { Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// Importing the Bootstrap CSS file

import NavBar from './components/NavBar'

function App() {
  return (
    <Fragment>
      <NavBar activeIndex={0} />
    </Fragment>
  )
}

export default App
