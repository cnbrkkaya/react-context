import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserConsumer from '../context';
class User extends Component {
   state = {
      isVisible: false,
   };

   onClickEvent = () => {
      this.setState({ isVisible: !this.state.isVisible });
   };
   handleDelete = (id, dispatch) => {
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
                              <p className="card-text">Maaş : {salary}</p>
                              <p className="card-text">Department : {department}</p>
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
