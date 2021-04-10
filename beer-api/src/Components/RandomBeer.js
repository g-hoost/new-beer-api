import React from 'react';
import 
{
    Link
} from "react-router-dom";
import axios from 'axios';
import { withRouter } from "react-router";
import vector from "../Components/img/Vector.png";
import Navbar from "../Components/Navbar";
import img_beers from "../Components/img/beericon.png";

class RandomBeer extends React.Component
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

        axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
            .then(res =>
            {
                const beerList = res.data;
                this.setState({ beerList });

            })
    }


    render()
    {
        const item = this.state.beerList;
        return (

            <section className="randomBeerList">

                <div className="detailImageContainer">
                    <img src={item.image_url} alt="beer"></img>
                </div>
                <div className="detailData">
                    <h2>{item.name}</h2>
                    <p>{item.tagline}</p>
                    <p>First brewed: </p><p>{item.first_brewed}</p>
                    <p>Attenuation Level: </p><p>{item.attenuation_level}</p>
                    <p>{item.description}</p>
                    <div className="button"></div>
                </div>
                <div className="backButton">
                    <Link to="/">
                        <img src={vector} alt=""></img></Link>
                </div>
                <Link to="/Navbar"><Navbar /></Link>
            </section >

        )
    }
}
export default withRouter(RandomBeer);