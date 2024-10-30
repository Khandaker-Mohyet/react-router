import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
  const post = useLoaderData()
  const { userId, id, title, body } = post
  const nav = useNavigate()

  const handalePostBack = () => {
    nav(-1)
  }
  return (
    <div className='card'>
      <h1>{id}</h1>
      <h2>Title: {title}</h2>
      <p>Description: {body}</p>
      <button onClick={handalePostBack}>Back</button>
    </div>
  );
};

export default PostDetails;