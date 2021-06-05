import Navbar from './navbar';
import Home from './home';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import Create from './create';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;