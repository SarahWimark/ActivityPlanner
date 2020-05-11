import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import Calendar from './calendar/pages/Calendar'

const App = () => {
  return <Router>
    <Switch>
      <Route path='/' exact>
        <Calendar />
      </Route>
      <Redirect to='/' />
    </Switch>
  </Router>
}

export default App
