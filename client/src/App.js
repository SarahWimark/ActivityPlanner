import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Calendar from './calendar/pages/Calendar'

const App = () => {
  return <Router>
    <Route path='/' exact>
      <Calendar />
    </Route>
  </Router>
}

export default App
