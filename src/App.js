import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Users from './component/Users';

class App extends React.Component {
   render() {
      return (
         <div className="container">
            <Navbar title="Navbar" />
            <Users />
         </div>
      );
   }
}

export default App;
