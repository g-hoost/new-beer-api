import './App.css';
import
{
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Home from "./Components/Home";
import AllBeers from "./Components/AllBeers";
import RandomBeers from "./Components/RandomBeers";
import DetailBeer from "./Components/DetailBeer";

export default function App()
{
  return (
    <Router>
      <div className="App">
        {/* <Header></Header> */}
        <Switch>

          <Route exact path="/"><Home /></Route>
          <Route path="/AllBeers"><AllBeers /></Route>
          <Route path="/RandomBeers"><RandomBeers /></Route>
          <Route path="/DetailBeer"><DetailBeer /></Route>

        </Switch>
      </div>
    </Router>
  );
}