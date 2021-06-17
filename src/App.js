import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Card from './component/Card'
import Nav from './component/common/Nav'


const App = () => {

  return (
    <>
      <BrowserRouter>

        <Nav />
        <Card />
        <Switch>
          <Route>
            
          </Route>
        </Switch>

      </BrowserRouter>
    </>
  )
}

export default App
