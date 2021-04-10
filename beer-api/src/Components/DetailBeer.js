import React from 'react';
// import 
// {
//     Link
// } from "react-router-dom";
import axios from 'axios';

export default class DetailBeer extends React.Component
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


    render()
    {
        return (

            <section className="randomBeersList">

                {this.state.beerList.map((item) => (
                    <div className="randomBeersMainContainer">
                        <div className="imageContainer">
                            <img src={item.image_url} alt="beer"></img>
                        </div>

                        <h2>{item.name}</h2>
                        <p>{item.tagline}</p>
                        <p>First brewed: {item.first_brewed}</p>
                        <p>Attenuation Level: {item.attenuation_level}</p>
                        <p>{item.description}</p>
                        <div className="button"></div>

                    </div>
                ))}


            </section >
        )
    }
}