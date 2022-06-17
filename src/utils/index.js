/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { NewsContext } from '../components/context/NewsContext';
import { Detail } from '../components/News';

const NewsCard = () => {
  const { news } = useContext(NewsContext);

  return news.map((news) => (
    <Card style={{ width: '15rem' }} key={news.id} className='m-2'>
      <Card.Img variant='top' src={news.img_url} />
      <Card.Body>
        <Card.Subtitle>{JSON.stringify(news.date)}</Card.Subtitle>
        <Card.Title>{`${news.title.slice(0, 50)}`}</Card.Title>
        <Card.Text>{`${news.description.slice(0, 150)}...`}</Card.Text>
        <Button variant='primary' href={`details/${news.id}`}>
          Ver mais
        </Button>
      </Card.Body>
    </Card>
  ));
};

export { NewsCard };
