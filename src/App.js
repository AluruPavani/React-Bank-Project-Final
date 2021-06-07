import './App.css';
import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Link, Switch, Route, Redirect } from 'react-router-dom';
import UserLogin from './UserLogin';
import Home from './Home';
import Register from './Register';
import Adduser from './adduser';
import Adminaxios from './adminaxios';
import Edituser from './edituser';
import Viewuser from './viewuser';
import Useraxios from './useraxios';
import AddAmount from './addamount';
import Navbar from './components/Navbar';
import CurrentBalance from './currentadd';
import MiniStatement from './mini';
import SubAmount from './SubAmount';
import CurrentWithBalance from './CurrentWithBalance';
import About from './About';
import Support from './Support';
import UserView from './UserView';


function App(props){
  return(
    <Fragment>
       <Router>
           
    <Navbar/>
    <Switch>
          <Route exact path="/" > <Redirect to='/Home' /></Route>
          <Route path="/userview/:id" component={UserView}></Route>
            <Route path="/UserLogin" component={UserLogin}></Route>
            <Route path="/Home" component={Home}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/support" component={Support}></Route>
            <Route path="/register" component={Register}></Route>
            <Route path="/adduser" component={Adduser}></Route>
          <Route path="/adminaxios" component={Adminaxios}></Route>
          <Route path="/edituser/:id" component={Edituser}></Route>
          <Route path="/viewuser/:id" component={Viewuser}></Route>
          <Route path="/useraxios" component={Useraxios}></Route>
          <Route path="/addamount" component={AddAmount}></Route>
          <Route path="/currentadd" component={CurrentBalance}></Route>
          <Route path="/subamount" component={SubAmount}></Route>
          <Route path="/currentsub" component={CurrentWithBalance}></Route>
          <Route path="/mini/:id" component={MiniStatement}></Route>
          <Route exact path="/logout"><Redirect to="/" /></Route>


          </Switch>
          </Router>
    </Fragment>
  )
}

export default App;

