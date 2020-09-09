import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Authentication from './Context/Authentication';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import Board from './Pages/Board/Board';
import './App.css';
import PrivateRoute from './PrivateRoute';
import CreateBoard from './Pages/CreateBoard/CreateBoard';

function App() {
  return (
    <Authentication>
      <BrowserRouter>
        <Header />
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute path="/createboard" component={CreateBoard} />
          <PrivateRoute path="/board/:boardid" component={Board} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          {/* <Route exact path="*" component={Home} /> */}
        </Switch>
      </BrowserRouter>
    </Authentication>
  );
}

export default App;
