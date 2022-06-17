import React from 'react';
import { Detail } from '../../components/News';
import SearchBar from '../../components/SearchBar';

const NewsDetail = () => {
  return (
    <div className='d-flex flex-row-reverse justify-content-center my-5 flex-wrap'>
      <div className='d-flex'>
        <SearchBar />
      </div>
      <div className='w-50'>
        <Detail />
      </div>
    </div>
  );
};

export default NewsDetail;
