import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Users from './component/Users';
import AddUser from './component/AddUser';
class App extends React.Component {
   render() {
      return (
         <div className="container">
            <Navbar title="App" />
            <hr />
            <AddUser />
            <Users />
         </div>
      );
   }
}

export default App;
