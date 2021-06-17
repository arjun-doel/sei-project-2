import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Card from './component/Card'
import Nav from './component/common/Nav'
import SearchBar from './component/SearchBar'
import Footer from './component/common/Footer'


const App = () => {

  return (
    <>
      <BrowserRouter>

        <Nav />
        <SearchBar />
        <Card />

        <Switch>
          <Route>

          </Route>
        </Switch>

      </BrowserRouter>
      <Footer/>
    </>
  )
}

export default App
