import './App.css'; 
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import Home from './Components/Home';
import Detail from './Components/Detail';
import CreateForm from './Components/CreateForm';
import About from './Components/About';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path='/' component={LandingPage}></Route>
        <Route path='/home' component={Home}></Route>
        <Route path='/videogames/:id' render={({match})=> <Detail id={match.params.id}/> } />
        <Route path='/game' component={CreateForm}></Route>
        <Route path='/about' component={About}></Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
