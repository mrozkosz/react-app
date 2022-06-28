import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import Notes from './Notes';
import Twitters from './Twitters';

// eslint-disable-next-line import/extensions
import store from '../store';

const Root = () => (
  <Provider store={store}>
    <MainTemplate>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Notes/>} />
          <Route path="/twitters" element={<Twitters/>} />
          {/* <Route path="/" component={Notes} /> */}
        </Routes>
      </BrowserRouter>
    </MainTemplate>
  </Provider>
);

export default Root;
