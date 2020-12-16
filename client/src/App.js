import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import AppNavbar from './Components/AppNavbar';
import Users from './Components/Users';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar />
        <Users />
      </div>
    </Provider>
  );
}

export default App;
