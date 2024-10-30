import React from 'react';
import { useNavigate } from 'react-router-dom';

const User = ({ user }) => {
  const { id, name, email } = user
  const navigate = useNavigate()
  
  const handaleUserDetails = () => {
    navigate(`/users/${id}`)
  }
  return (
    <div className='card'>
      <h2>Name: {name}</h2>
      <h3>Email: {email}</h3>
      <button onClick={handaleUserDetails}>Click hear</button>
    </div>
  );
};

export default User;