import React from 'react';
import { useParams } from 'react-router-dom';
// import 
// {
//     Link
// } from "react-router-dom";


const AllBeers = (props) =>
{

    return (

        <section className="allBeersList">
            <article className="allBeers">
                {this.props.beerList((item, i) => (
                    <div key={i}>
                        <div className="imageContainer">
                            <img src={item.image_url} alt="beer"></img>
                        </div>
                        <div className="contentContainer">
                            <p>{item.name}</p>
                            <p>{item.tagline}</p>
                            <p>Created by {item.contributed_by}</p>
                            <div className="button"></div>
                        </div>

                    </div>
                ))}
            </article>

        </section >
    )
}
export default AllBeers;