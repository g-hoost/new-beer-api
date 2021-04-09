import React from 'react';
import img_allbeers from "../Components/img/christin-hume-08tX2fsuSLg-unsplash.png";
import img_randombeer from "../Components/img/proriat-hospitality-flENqflm6xU-unsplash.png";
import img_beers from "../Components/img/beericon.png";
import 
{
    Link
} from "react-router-dom";
import Axios from 'axios';

export default class BeerList extends React.Component
{
    state = {
        beerList: []
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


    render()
    {
        return (

            <section className="home">
                <div className="allBeers">
                    <img src={img_allbeers} alt="bottles of beer"></img>
                    <div className="headerContainer">
                        <h2>All Beers</h2>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, a, eleifend vitae varius venenatis. </p>
                </div>
                <div className="randomBeer">
                    <img src={img_randombeer} alt="full glasses of beer"></img>
                    <div className="headerContainer">
                        <h2>Random Beer</h2>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, a, eleifend vitae varius venenatis. </p>

                </div>
                <div className="homeFooter">
                    <Link to="/home">
                        <button></button>
                        <img src={img_beers}></img></Link>
                </div>

            </section >
        )
    }
}
