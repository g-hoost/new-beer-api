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


            <Link to="/">
                {/* <button></button> */}
                <img src={img_beers} alt=""></img></Link>


        </section >
    );
}

export default Navbar;