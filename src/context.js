import React, { Component } from 'react';

const UserContext = React.createContext();
//returns Provider and Consumer
export class UserProvider extends Component {
   state = {
      users: [
         { id: '1', name: 'YYY', salary: '4000', department: 'Eng' },
         { id: '2', name: 'XXXX', salary: '3000', department: 'Eng' },
         { id: '3', name: 'ZZZ', salary: '3000', department: 'Eng' },
      ],
   };

   render() {
      return (
         <div>
            <UserContext.Provider value={this.state}>{this.props.children}</UserContext.Provider>
         </div>
      );
   }
}

const UserConsumer = UserContext.Consumer;
export default UserConsumer;
