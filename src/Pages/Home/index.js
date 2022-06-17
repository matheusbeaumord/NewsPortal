/* eslint-disable no-unused-vars */
import React from 'react';
import { NewsCard } from '../../utils';
import SearchBar from '../../components/SearchBar';

const HomePage = () => {
  return (
    <div className='d-flex flex-row-reverse w-100 justify-content-center my-5 flex-wrap min-vh-100'>
      <div className='d-flex'>
        <SearchBar />
      </div>
      <div className='d-flex flex-wrap w-75 h-50'>
        <NewsCard />
      </div>
    </div>
  );
};

export default HomePage;
