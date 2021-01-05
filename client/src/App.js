import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './Components/layout/Navbar';
import Landing from './Components/layout/Landing';
import Register from './Components/auth/Register';
import Login from './Components/auth/Login';
import Alert from './Components/layout/Alert';
// import Users from './Components/Users';
// import UserModal from './Components/UserModal';

import { Provider } from 'react-redux';
import store from './store';
// import { Container } from 'reactstrap';

const App = () => (
  <Router>
    <Provider store={store}>
      <Fragment>
        <Navbar />
        <Route exact path="/" component={Landing} />
        <section className="container">
          <Alert />
          <Switch>
            {/* switch can only have routes */}
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </section>
        {/* <Container>
          <UserModal />
          <Users />
        </Container> */}
      </Fragment>
    </Provider>
  </Router>
);

export default App;
