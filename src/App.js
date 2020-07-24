import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Users from './component/Users';

class App extends React.Component {
   state = {
      users: [
         { id: '1', name: 'YYY', salary: '4000', department: 'Eng' },
         { id: '2', name: 'XXXX', salary: '3000', department: 'Eng' },
      ],
   };

   deleteUser = (id) => {
      this.setState({
         users: this.state.users.filter((user) => id !== user.id),
      });
   };
   render() {
      return (
         <div className="container">
            <Navbar title="Navbar" />
            <Users users={this.state.users} deleteUser={this.deleteUser} />
         </div>
      );
   }
}

export default App;
