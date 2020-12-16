import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import AppNavbar from './Components/AppNavbar';
import Users from './Components/Users';

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <Users />
    </div>
  );
}

export default App;
