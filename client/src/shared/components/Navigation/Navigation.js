import React from 'react'
import { Link } from 'react-router-dom'

import Header from './Header'

const Navigation = (props) => {
  return (
    <Header>
      <button>
        <span />
        <span />
        <span />
      </button>
      <h1>
        <Link>Activity Planner</Link>
      </h1>
      <nav>...</nav>
    </Header>
  )
}

export default Navigation
