import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SinglePost from '../SinglePost/SinglePost';

const Posts = () => {
  const posts = useLoaderData()
  return (
    <div>
      <h3>This is post {posts.length}</h3>
      <div className='users'>
        {
        posts.map(post=> <SinglePost key={post.userId} post={post}></SinglePost>)
      }
      </div>
    </div>
  );
};

export default Posts;