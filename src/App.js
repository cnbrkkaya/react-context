import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Users from './component/Users';
import AddUser from './component/AddUser';
import UpdateUser from './component/UpdateUser';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
class App extends React.Component {
   render() {
      return (
         <Router>
            <div className="container">
               <Navbar title="App" />
               <hr />
               <Switch>
                  <Route exact path="/" component={Users} />
                  <Route exact path="/add" component={AddUser} />
                  <Route exact path="/edit/:id" component={UpdateUser} />
               </Switch>
            </div>
         </Router>
      );
   }
}

export default App;
