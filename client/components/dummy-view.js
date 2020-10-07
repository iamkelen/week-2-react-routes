import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Head from './head'

import Main from './main'
import Profile from './profile'
import Readme from './readme'

const Dummy = () => {
  return (
    <div>
      <Head title="Hello" />
      <Switch>
        <Route exact path="/" component={() => <Main />} />
        <Route exact path="/:userName" component={() => <Profile />} />
        <Route exact path="/:userName/:repositoryName" component={() => <Readme />} />
      </Switch>
    </div>
  )
}

Dummy.propTypes = {}

export default Dummy
