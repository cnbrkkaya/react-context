import React, { Component } from 'react';
import { motion } from 'framer-motion';
// import { v4 as uuidv4 } from 'uuid';
import UserConsumer from '../context';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
class UpdateUser extends Component {
   state = {
      isVisible: true,
      name: '',
      salary: '',
      department: '',
      redirect: '',
      error: false,
   };
   componentDidMount() {
      this.getUser();
   }

   getUser = async () => {
      const userId = this.props.match.params.id;
      const response = await axios.get(`http://localhost:3001/users/${userId}`);
      this.setState({
         name: response.data.name,
         salary: response.data.salary,
         department: response.data.department,
      });
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

   validateUser = () => {
      const { name, salary, department } = this.state;

      if (name === '' || salary === '' || department === '') {
         return false;
      }
      return true;
   };
   updateUser = async (dispatch, e) => {
      e.preventDefault();
      const { id } = this.props.match.params;
      const { name, department, salary } = this.state;
      const updatedUser = {
         name,
         salary,
         department,
      };
      if (!this.validateUser()) {
         this.setState({ error: true });
         return;
      }
      const response = await axios.put(`http://localhost:3001/users/${id}`, updatedUser);

      dispatch({ type: 'UPDATE_USER', payload: response.data });
      // this.setState({ name: '', salary: '', department: '', redirect: '/' });
      this.props.history.push('');
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
                              <h4>Update User Form</h4>
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
                                 <button onClick={(event) => this.updateUser(dispatch, event)} type="submit" className="btn btn-danger btn-block">
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
export default UpdateUser;
