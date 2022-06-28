import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';


import store from '../store';
import Articles from './Articles';
import Notes from './Notes';
import Twitters from './Twitters';

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainTemplate>
        <Routes>
          <Route path="/" element={<Notes />} />
          <Route path="/twitters" element={<Twitters />} />
          <Route path="/articles" element={<Articles />} />
        </Routes>
      </MainTemplate>
    </BrowserRouter>
  </Provider>
);

export default Root;
