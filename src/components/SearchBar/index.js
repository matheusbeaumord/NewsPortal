/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { NewsContext } from '../context/NewsContext';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Nav } from 'react-bootstrap';

function SearchBar() {
  const { news, setNews } = useContext(NewsContext);

  const [search, setSearch] = useState([]);

  const getLocalStorage = JSON.parse(localStorage.getItem('News'));

  const tags = news.map((value) => {
    if (value.tag > 0) {
      return value.tag.split(' ');
    }
    return value.tag;
  });

  const searchFunction = (searchValue) => {
    const hasResult = getLocalStorage.some((value) =>
      value.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    if (hasResult && searchValue.length > 0 && searchValue !== undefined) {
      setNews(
        getLocalStorage.filter((value) =>
          value.title.toLowerCase().includes(searchValue.toLowerCase())
        )
      );
    } else {
      return setNews(getLocalStorage);
    }
  };

  const searchTagFunction = (searchValue) => {
    const hasResult = getLocalStorage.some((value) =>
      value.tag.includes(searchValue)
    );

    if (hasResult && searchValue.length > 0 && searchValue !== undefined) {
      setNews(
        getLocalStorage.filter((value) => value.tag.includes(searchValue))
      );
    } else {
      return setNews(getLocalStorage);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    searchFunction(search);
  };

  return (
    <Form className='me-4 d-flex flex-column' onSubmit={handleSubmit}>
      <Form.Label>Pesquisar</Form.Label>
      <Form.Group className='mb-3 d-flex' controlId='formSearch' role='form'>
        <Form.Control
          type='text'
          placeholder='Digite um nome'
          onChange={(search) => {
            setSearch(search.target.value);
          }}
        />
        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form.Group>

      <Form.Group className='mb-3'>
        <Nav onSelect={(selectedValue) => searchTagFunction(selectedValue)}>
          <Nav.Item>
            {tags.map((tag, index) => (
              <Nav.Link key={index} eventKey={tag}>
                {tag}
              </Nav.Link>
            ))}
          </Nav.Item>
        </Nav>
      </Form.Group>

      <Form.Group
        className='mb-3 d-flex justify-content-center '
        controlId='formReset'
        role='formReset'
      >
        <Button
          variant='danger'
          type='button'
          onClick={() => setNews(getLocalStorage)}
        >
          Reset
        </Button>
      </Form.Group>
    </Form>
  );
}

export default SearchBar;
