import React from 'react';
import Profilemain from './Profilemain';
import Cusines from './Cusines'
import { Route, BrowserRouter as Router } from "react-router-dom"
function App() {
  return (
    <Router>
      <div className='app'>
      </div>
      <Route path="/profile" component={Profilemain} />

      <Route path="/cusines" component={Cusines} />
    </Router>
  )
}

export default App
