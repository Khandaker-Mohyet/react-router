import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Header from '../Header/Header';
import Fooder from '../Fooder/Fooder';

const Home = () => {
  const navigation = useNavigation()
  return (
    <div>
      <Header></Header>
      {
        navigation.state === 'loading' ?
          <p>loading...</p> :
          <Outlet></Outlet>
      }
      
      <Fooder></Fooder>
    </div>
  );
};

export default Home;