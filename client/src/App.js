import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import AppNavbar from './Components/AppNavbar';
import Users from './Components/Users';
import UserModal from './Components/UserModal';

import { Provider } from 'react-redux';
import store from './store';
import { Container } from 'reactstrap';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar />
        <Container>
          <UserModal />
          <Users />
        </Container>
      </div>
    </Provider>
  );
}

export default App;
