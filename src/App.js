/* eslint-disable no-unused-vars */
import React, { useState, useCallback } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { NewsContext } from './components/context/NewsContext';
import logo from './assets/puc_news.jpg';
import uniqid from 'uniqid';

import HomePage from './Pages/Home';
import NewsForm from './Pages/NewsForm';
import Header from './components/Header';
import NewsDetail from './Pages/NewsDetail';
import Footer from './components/Footer';
import Contact from './Pages/Contact';

const initialState = [
  {
    id: uniqid(),
    img_url:
      'https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010_960_720.jpg',
    date: new Date(),
    title: 'What is Lorem Ipsum?',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    tag: ['ipsum'],
  },
  {
    id: uniqid(),
    img_url:
      'https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010_960_720.jpg',
    date: new Date(),
    title: 'What is Lorem Ipsum?',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    tag: ['lorem', 'ipsum'],
  },
  {
    id: uniqid(),
    img_url:
      'https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010_960_720.jpg',
    date: new Date(),
    title: 'What is Lorem Ipsum?',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    tag: ['dummy'],
  },
];

export default function App() {
  const [news, setNews] = useState(
    localStorage.getItem('News')
      ? JSON.parse(localStorage.getItem('News'))
      : localStorage.setItem('News', JSON.stringify(initialState))
  );

  return (
    <BrowserRouter>
      <NewsContext.Provider value={{ news, setNews }}>
        <Header />
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path='/add-news' element={<NewsForm />} />
          <Route path={`/details/:id`} element={<NewsDetail />} />
          <Route path={`/contact`} element={<Contact />} />
        </Routes>
        <Footer />
      </NewsContext.Provider>
    </BrowserRouter>
  );
}
