import React from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import Navbar from "../Components/Navbar";

export default class AllBeers extends React.Component
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

            <section className="allBeersList">
                <article className="allBeers">
                    {this.state.beerList.map((item, i) => (
                        <><div className="allBeersMainContainer" key={i}>
                            <div className="imageContainer">
                                <img src={item.image_url} alt="beer"></img>
                            </div>

                            <div className="contentContainer">
                                <p>{item.name}</p>
                                <p>{item.tagline}</p>
                                <p>Created by {item.contributed_by}</p>
                                <Link to={"/AllBeers/" + item._id}>Details</Link>
                            </div>


                        </div>
                            <hr></hr></>
                    ))}
                </article>
                <Navbar />

            </section >
        )
    }
}