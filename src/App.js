
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Login from './Components/Login'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Dashboard from './Components/Dashboard'
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route  path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
