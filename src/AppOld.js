import './App.css';
import axios from 'axios';
import { Component } from 'react';
import
{
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Home from "./Components/Home";
import AllBeers from "./Components/AllBeers";

class App extends Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      beerList: []
    }

  }

  componentDidMount()
  {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers`)
      .then(res =>
      {
        const beerList = res.data;
        this.setState({ beerList });
      })
  }

  getBeer()
  {
    return this.state.beerList.find(id => this.props.id);
  }
  getAllBeer()
  {
    return this.state.beerList.find(id => this.props.id);
  }
  render()
  {
    return (
      <Router>
        <div className="App">
          {/* <Header></Header> */}
          <Switch>

            <Route exact path="/"><Home /></Route>
            <Route path="/AllBeers"><AllBeers getAllBeer="{this.getAllBeer}" /></Route>


          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;