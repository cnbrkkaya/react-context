import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
   const { title } = props;
   return (
      <div>
         <h3>{title}</h3>

         <Link to="/">Home </Link>
         <Link to="/add">Add User </Link>
      </div>
   );
};

Navbar.propTypes = {
   title: PropTypes.string.isRequired,
};

export default Navbar;
