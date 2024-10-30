import React from 'react';
import { useNavigate } from 'react-router-dom';

const SinglePost = ({post}) => {
  const { id, title, body, userId } = post
  const navigate = useNavigate()

  const showPostDetails = () => {
    navigate(`/post/${id}`)
  }
  return (
    <div className='card'>
      <h1>Id: {id}</h1>
      <h3>Title: {title}</h3>
      <button onClick={showPostDetails}>See details</button>
    </div>
  );
};

export default SinglePost;