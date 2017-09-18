import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
  return (
    <div>
      <Link to='/all'>All</Link>
      <Link to='/active'>Active</Link>
      <Link to='/completed'>Completed</Link>
    </div> 
  )
};