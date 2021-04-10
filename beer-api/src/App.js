import './App.css';
import
{
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Home from "./Components/Home";
import AllBeers from "./Components/AllBeers";
import RandomBeer from "./Components/RandomBeer";
import DetailBeer from "./Components/DetailBeer";

export default function App()
{
  return (
    <Router>
      <div className="App">

        <Switch>

          <Route exact path="/"><Home /></Route>
          <Route path="/AllBeers/:id"><DetailBeer /></Route>
          <Route path="/AllBeers"><AllBeers /></Route>
          <Route path="/RandomBeer"><RandomBeer /></Route>


        </Switch>
      </div>
    </Router>
  );
}