import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alert from './components/layout/Alert';
import Dashboard from './components/dashboard/Dashboard';
import CreateProfile from './components/profile-forms/CreateProfile';
import EditProfile from './components/profile-forms/EditProfile';
import PrivateRoute from './components/routing/PrivateRoute';
import setAuthToken from './utils/setAuthToken';
import { loadUser } from './actions/auth';
// import Users from './Components/Users';
// import UserModal from './Components/UserModal';

import { Provider } from 'react-redux';
import store from './store';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const App = () => {
  useEffect(() => {
    store.dispatch(loadUser())
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <section className="container">
            <Alert />
            <Switch>
              {/* switch can only have routes */}
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute exact path="/create-profile" component={CreateProfile} />
              <PrivateRoute exact path="/edit-profile" component={EditProfile} />
            </Switch>
          </section>
          {/* <Container>
          <UserModal />
          <Users />
        </Container> */}
        </Fragment>
      </Router>
    </Provider>

  )
};

export default App;
