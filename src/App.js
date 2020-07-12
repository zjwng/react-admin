import React from 'react';
import { Button, message } from 'antd'
import { HashRouter, Route, Router, Switch } from 'react-router-dom'
import './style/index.less'
import Login from './pages/login/login'
import Admin from './pages/admin/admin'



class App extends React.Component {


  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path='/login' component={ Login } />
          <Route path='/' component={ Admin } />
        </Switch>
      </HashRouter>
    )
 }
}

export default App;
