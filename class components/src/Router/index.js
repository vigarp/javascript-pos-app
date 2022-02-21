import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import History from '../Pages/History'

class Router extends React.Component{
    render(){
        return(
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route 
           path="/History"
           render={(props) => (
                 <History {...props} />
            )}
          />
        </Switch>
        )
    }
}

export default Router

