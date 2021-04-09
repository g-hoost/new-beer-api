import './App.css';
import
{
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Home from "./Components/Home";
import AllBeers from "./Components/AllBeers";

export default function App()
{
  return (
    <Router>
      <div className="App">
        {/* <Header></Header> */}
        <Switch>

          <Route exact path="/"><Home /></Route>
          <Route path="/AllBeers"><AllBeers /></Route>


        </Switch>
      </div>
    </Router>
  );
}

