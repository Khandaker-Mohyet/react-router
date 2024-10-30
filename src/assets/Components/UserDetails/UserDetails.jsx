import React from 'react';
import { Navigate, useLoaderData, useNavigate } from 'react-router-dom';

const UserDetails = () => {
  const user = useLoaderData()
  const navigate = useNavigate()
  const { id, username, email, phone } = user
  const handleBack = () => {
    navigate(-1)
  }
  return (
    <div className='card'>
      <h1>{id}</h1>
      <h2>{username}</h2>
      <h4>{email}</h4>
      <h4>{phone}</h4>
      <button onClick={handleBack}>Back</button>
    </div>
  );
};

export default UserDetails;