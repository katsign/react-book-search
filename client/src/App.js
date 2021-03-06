import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './utils/index.css';
import Home from './pages/Home';
import Saved from './pages/Saved';
import Header from './components/Header';

function App() {
  return (
    <div className="container">
      <div className="row" style={{ margin: 'auto' }}>
      <Header />
        <div className="col-xs-12">
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/saved" component={Saved} />
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
