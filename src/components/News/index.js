/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { NewsContext } from '../context/NewsContext';

export const Detail = () => {
  const { news } = useContext(NewsContext);
  const [newsDetail, setNewsDetail] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    setNewsDetail(news.filter((item) => item.id === id));
  }, [id]);

  console.log(newsDetail);
  if (newsDetail) {
    return (
      <article className='d-flex flex-column justify-content-center w-75'>
        <img src={newsDetail[0].img_url} className='img-fluid' alt='' />
        <div>
          <p className='text-secondary mt-3 mb-0'>{newsDetail[0].date}</p>
          <h2 className='m-0'>{newsDetail[0].title}</h2>
          <p className='text-muted mb-5'>{newsDetail[0].description}</p>
        </div>
      </article>
    );
  }
};
