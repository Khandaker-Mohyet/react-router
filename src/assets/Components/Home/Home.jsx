import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Header from '../Header/Header';
import Fooder from '../Fooder/Fooder';
import { InfinitySpin } from 'react-loader-spinner'
;

const Home = () => {
  const navigation = useNavigation()
  return (
    <div>
      <Header></Header>
      {
        navigation.state === 'loading' ?
          <InfinitySpin
  visible={true}
  width="200"
  color="#4fa94d"
  ariaLabel="infinity-spin-loading"
  /> :
          <Outlet></Outlet>
      }
      
      <Fooder></Fooder>
    </div>
  );
};

export default Home;