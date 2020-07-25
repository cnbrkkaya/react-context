import React, { Component } from 'react';
import User from './User';
import UserConsumer from '../context';
class Users extends Component {
   render() {
      return (
         <UserConsumer>
            {(value) => {
               const { users } = value;
               return (
                  <div>
                     {users.map((item) => (
                        <User key={item.id} name={item.name} salary={item.salary} department={item.department} id={item.id} />
                     ))}
                  </div>
               );
            }}
         </UserConsumer>
      );
   }
}
export default Users;
