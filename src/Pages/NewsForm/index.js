/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import uniqid from 'uniqid';

import { NewsContext } from '../../components/context/NewsContext';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function NewsForm() {
  const { news } = useContext(NewsContext);

  const [newPost, setNewPost] = useState({
    id: uniqid(),
    img_url:
      'https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010_960_720.jpg',
    date: new Date(),
    title: '',
    description: '',
    tag: [],
  });

  const handleSubmit = (event) => {
    event.stopPropagation();
    localStorage.setItem('News', JSON.stringify([...news, newPost]));
  };

  return (
    <div
      className='d-flex flex-column w-100 align-items-md-center min-vh-100'
      style={{ marginTop: '2%' }}
    >
      <Form
        className='d-flex flex-column flex-fill w-75'
        onSubmit={handleSubmit}
      >
        <h1 className='fs-4'>Adicionar notícia</h1>
        <Form.Group className='mb-3' controlId='titulo'>
          <Form.Label>Titulo</Form.Label>
          <Form.Control
            type='text'
            onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='conteudo'>
          <Form.Label>Conteudo</Form.Label>
          <Form.Control
            as='textarea'
            rows={3}
            onChange={(e) =>
              setNewPost({ ...newPost, description: e.target.value })
            }
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='tag'>
          <Form.Label>Tags</Form.Label>
          <Form.Control
            type='text'
            onChange={(e) => setNewPost({ ...newPost, tag: e.target.value })}
          />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default NewsForm;
