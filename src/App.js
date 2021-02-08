import React from 'react';
import './App.css';
import { BrowserRouter, Route,Switch } from 'react-router-dom';
import Login from './components/Login/Login';
import Demo from './components/Demo/Demo';
import Registration from './components/Registration/RegisterScreen';
import Loan from './components/Loan/Loan';
import Depoist from './components/Deposit/Deposit';
import ProtectedRoute from './ProtectedRoute';
function App() {
 
  return (
  
     <BrowserRouter>
    <div className="App">

    <Switch>
       <Route path='/'exact={true} component={Login}/>
        <Route path='/Loan' exact={true} component={Loan}/>
        <ProtectedRoute path='/DEMO' exact={true} component={Demo}/>
        <Route path='/Login' exact={true} component={Login}/>
        <Route path='/Depoist' exact={true} component={Depoist}/>
        <Route path='/Registration' exact={true} component={Registration}/>
     </Switch>
      </div>
      </BrowserRouter>
     
    
     
  );
}

export default App;
