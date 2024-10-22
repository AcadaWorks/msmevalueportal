import { Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// Importing the Bootstrap CSS file

import NavBar from './components/NavBar'
import DotMap from './routes/DotMap'

function App() {
  return (
    <Fragment>
      <DotMap />
    </Fragment>
  )
}

export default App
