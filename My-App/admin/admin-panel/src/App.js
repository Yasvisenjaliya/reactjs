import React from 'react'
import Navbar from './components/Navbar'
import Admin from './pages/Admin'

const App = () => {
  return (
    <div className=' overflow-hidden'>
      <Navbar/>
      <Admin/>
    </div>
  )
}

export default App