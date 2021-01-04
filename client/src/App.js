import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navbar from './Components/layout/Navbar';
import Landing from './Components/layout/Landing';
import Users from './Components/Users';
import UserModal from './Components/UserModal';

import { Provider } from 'react-redux';
import store from './store';
import { Container } from 'reactstrap';

const App = () => (
  <Provider store={store}>
    <Fragment>
      <Navbar />
      <Landing />
      <Container>
        <UserModal />
        <Users />
      </Container>
    </Fragment>
  </Provider>
);

export default App;
