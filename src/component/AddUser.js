import React, { Component } from 'react';
import { motion } from 'framer-motion';
// import { v4 as uuidv4 } from 'uuid';
import UserConsumer from '../context';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
class AddUser extends Component {
   state = {
      isVisible: true,
      name: '',
      salary: '',
      department: '',
      redirect: '',
      error: false,
   };

   handleVisible = () => {
      this.setState({
         isVisible: !this.state.isVisible,
      });
   };

   handleChange = (e) => {
      this.setState({
         [e.target.name]: e.target.value,
      });
   };
   validateForm = () => {
      const { name, salary, department } = this.state;

      if (name === '' || salary === '' || department === '') {
         return false;
      }
      return true;
   };
   addUser = async (dispatch, e) => {
      e.preventDefault();
      const { name, department, salary } = this.state;
      const newUser = {
         name,
         salary,
         department,
      };
      if (!this.validateForm()) {
         this.setState({ error: true });
         return;
      }

      const response = await axios.post('http://localhost:3001/users', newUser);
      dispatch({ type: 'ADD_USER', payload: response.data });
      // this.setState({ name: '', salary: '', department: '', redirect: '/' });
      this.props.history.push('/');
   };
   render() {
      const variants = {
         visible: {
            opacity: 1,
            display: 'block',
         },
         hidden: {
            opacity: 0,
            transitionEnd: {
               display: 'none',
            },
         },
      };
      const { isVisible, name, salary, department, error } = this.state;
      // if (this.state.redirect) {
      //    return <Redirect to={this.state.redirect} />;
      // }
      return (
         <UserConsumer>
            {(value) => {
               const { dispatch } = value;
               return (
                  <div className="col-md-8 mb-4">
                     <button onClick={this.handleVisible} className="btn btn-dark btn-block mb-3">
                        {isVisible ? 'Hide Form' : 'Show Form'}
                     </button>
                     <motion.div initial="hidden" animate={isVisible ? 'visible' : 'hidden'} variants={variants}>
                        <div className="card">
                           <div className="card-header">
                              <h4>Add User Form</h4>
                           </div>
                           {error ? <div className="alert alert-danger">alertt</div> : null}
                           <div className="card-body">
                              <form>
                                 <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" name="name" id="name" placeholder="Enter a name" className="form-control" value={name} onChange={this.handleChange} />
                                 </div>
                                 <div className="form-group">
                                    <label htmlFor="department">Department</label>
                                    <input type="text" name="department" id="department" placeholder="Enter a Department" className="form-control" value={department} onChange={this.handleChange} />
                                 </div>
                                 <div className="form-group">
                                    <label htmlFor="salary">Salary</label>
                                    <input type="text" name="salary" id="salary" placeholder="Enter a salary" className="form-control" value={salary} onChange={this.handleChange} />
                                 </div>
                                 <button onClick={(event) => this.addUser(dispatch, event)} type="submit" className="btn btn-danger btn-block">
                                    Add
                                 </button>
                              </form>
                           </div>
                        </div>
                     </motion.div>
                  </div>
               );
            }}
         </UserConsumer>
      );
   }
}
export default AddUser;
