import React from 'react';
import img_allbeers from "../Components/img/christin-hume-08tX2fsuSLg-unsplash.png";
import img_randombeer from "../Components/img/proriat-hospitality-flENqflm6xU-unsplash.png";
// import
// {
//     Link
// } from "react-router-dom";

const Home = () =>
{
    return (

        <section className="home">
            <div className="allBeers">
                <img src={img_allbeers} alt="bottles of beer"></img>
                <div className="headerContainer">
                    <h2>All Beers</h2>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, a, eleifend vitae varius venenatis. </p>
                {/* <Link to="/blog"><button>Go to Articles</button ></Link> */}
            </div>
            <div className="randomBeer">
                <img src={img_randombeer} alt="full glasses of beer"></img>
                <div className="headerContainer">
                    <h2>Random Beer</h2>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, a, eleifend vitae varius venenatis. </p>
                {/* <Link to="/blog"><button>Go to Articles</button ></Link> */}
            </div>


        </section >
    );
}

export default Home;