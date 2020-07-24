import React, { Component } from 'react';
import User from './User';
class Users extends Component {
   render() {
      const { users, deleteUser } = this.props;
      return (
         <div>
            {users.map((item) => (
               <User deleteUser={deleteUser} key={item.id} name={item.name} salary={item.salary} department={item.department} id={item.id} />
            ))}
         </div>
      );
   }
}
export default Users;
