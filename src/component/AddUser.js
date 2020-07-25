import React, { Component } from 'react';
import { motion } from 'framer-motion';
class AddUser extends Component {
   state = {
      isVisible: true,
   };

   handleVisible = () => {
      this.setState({
         isVisible: !this.state.isVisible,
      });
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
      const { isVisible } = this.state;
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
                  <div className="card-body">
                     <form action="">
                        <div className="form-group">
                           <label htmlFor="name">Name</label>
                           <input type="text" name="name" id="name" placeholder="Enter a name" className="form-control" />
                        </div>
                        <div className="form-group">
                           <label htmlFor="department">Department</label>
                           <input type="text" name="department" id="department" placeholder="Enter a Department" className="form-control" />
                        </div>
                        <div className="form-group">
                           <label htmlFor="salary">Salary</label>
                           <input type="text" name="salary" id="salary" placeholder="Enter a salary" className="form-control" />
                        </div>
                        <button type="submit" className="btn btn-danger btn-block">
                           Add
                        </button>
                     </form>
                  </div>
               </div>
            </motion.div>
         </div>
      );
   }
}
export default AddUser;
