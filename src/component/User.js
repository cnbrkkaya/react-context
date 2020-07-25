import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserConsumer from '../context';
import axios from 'axios';
import { Link } from 'react-router-dom';
class User extends Component {
   state = {
      isVisible: false,
   };

   onClickEvent = () => {
      this.setState({ isVisible: !this.state.isVisible });
   };
   handleDelete = async (id, dispatch) => {
      await axios.delete(`http://localhost:3001/users/${id}`);
      dispatch({ type: 'DELETE_USER', payload: id });
   };
   render() {
      // Destructing
      const { name, department, salary, id } = this.props;
      const { isVisible } = this.state;

      return (
         <UserConsumer>
            {(value) => {
               const { dispatch } = value;
               return (
                  <div className="col-md-8 mb-4">
                     <div className="card" style={isVisible ? { backgroundColor: '#62848d', color: 'white' } : null}>
                        <div className="card-header d-flex justify-content-between">
                           <h4 className="d-inline" onClick={this.onClickEvent}>
                              {name}
                           </h4>
                           <h3 onClick={() => this.handleDelete(id, dispatch)}>Delete</h3>
                        </div>
                        {isVisible ? (
                           <div className="card-body">
                              <p className="card-text">Salary : {salary}</p>
                              <p className="card-text">Department : {department}</p>
                              <Link to={`edit/${id}`} className="btn btn-block btn-dark">
                                 Update
                              </Link>
                           </div>
                        ) : null}
                     </div>
                  </div>
               );
            }}
         </UserConsumer>
      );
   }
}

User.propTypes = {
   name: PropTypes.string.isRequired,
   salary: PropTypes.string.isRequired,
   department: PropTypes.string.isRequired,
};
User.defaultProps = {
   name: 'Bilgi Yok',
   salary: 'Bilgi Yok',
   department: 'Bilgi Yok',
};
export default User;
