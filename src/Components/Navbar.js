import React from 'react';
import img_beers from "../Components/img/beericon.png";
import 
{
    Link
} from "react-router-dom";

const Navbar = () =>
{
    return (

        <section className="homeFooter">
            <div className="roundShape">

                <Link to="/">
                    <img src={img_beers} alt=""></img></Link>
            </div>

        </section >
    );
}

export default Navbar;