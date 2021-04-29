import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from '../../pages/Home';
import NotFound from '../../pages/NotFound';
import Layout from '../Layout';
import Header from '../Header';
import VideoPage from '../../pages/Video/Video.page';

function App() {
  const [value, setValue] = useState('');

  const onchange = (data) => {
    setValue(data);
    console.log('data=', data);
  };

  return (
    <BrowserRouter>
      <Header
        onchange={(e) => {
          onchange(e);
        }}
      />
      <Layout>
        <Switch>
          <Route exact path="/">
            <HomePage txtSearch={value} />
          </Route>
          <Route path="/v/:idVideo">
            <VideoPage />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
