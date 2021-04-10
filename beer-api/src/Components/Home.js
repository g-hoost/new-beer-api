import React from 'react';
import img_allbeers from "../Components/img/christin-hume-08tX2fsuSLg-unsplash.png";
import img_randombeer from "../Components/img/proriat-hospitality-flENqflm6xU-unsplash.png";
import img_beers from "../Components/img/beericon.png";
import 
{
    Link
} from "react-router-dom";

const Home = () =>
{
    return (

        <section className="home">
            <Link to="/AllBeers">
                <div className="allBeers">
                    <img src={img_allbeers} alt="bottles of beer"></img>
                    <div className="headerContainer">
                        <h2>All Beers</h2>
                    </div>
                    <p>This is a large variety of beers to compare and try. </p>
                </div>
            </Link>
            <Link to="/RandomBeers">
                <div className="randomBeer">
                    <img src={img_randombeer} alt="full glasses of beer"></img>
                    <div className="headerContainer">
                        <h2>Random Beer</h2>
                    </div>
                    <p>Don't know what to search for? Bored? Wanna have fun? Let the AI present you a beer of its own choice. </p>

                </div>
            </Link>
            <div className="homeFooter">
                <Link to="/home">
                    <button></button>
                    <img src={img_beers} alt=""></img></Link>
            </div>

        </section >
    );
}

export default Home;