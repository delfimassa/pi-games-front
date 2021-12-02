import './App.css'; 
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import Home from './Components/Home';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path='/' component={LandingPage}></Route>
        <Route path='/home' component={Home}></Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;