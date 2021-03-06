import React from 'react';
import axios from 'axios';
import { withRouter } from "react-router";
import vector from "../Components/img/Vector.png";
import Navbar from "../Components/Navbar";

class DetailBeer extends React.Component
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

        axios.get(`https://ih-beers-api2.herokuapp.com/beers/` + this.props.match.params.id)
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

            <section className="detailBeerList">

                <div className="detailImageContainer">
                    <img src={item.image_url} alt="beer"></img>
                </div>
                <div className="detailData">
                    <h2>{item.name}</h2>
                    <h3>{item.tagline}</h3>
                    <p className="textLeft">First brewed: </p><p className="textRight">{item.first_brewed}</p>
                    <p className="textLeft">Attenuation Level: </p><p className="textRight">{item.attenuation_level}</p>
                    <p className="description">{item.description}</p>
                    <div className="button"></div>
                </div>
                <div className="backButton">
                    <p className="buttonStyle" onClick={() => this.props.history.goBack()}>
                        <img src={vector} alt=""></img></p>
                </div>
                <Navbar />
            </section >
        )
    }
}
export default withRouter(DetailBeer);