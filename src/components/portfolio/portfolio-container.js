import React, { Component } from "react";

import PortfolioItem from "./portfolio-item";


export default class PortfolioContainer extends Component {
    constructor() {
        super();

        console.log("Portfolio container has rendered");
    }

    render() {
        return (
            <div>
                <h2>Portfolio items go her updated....</h2>
                <h1>Helloooooooo</h1>
                <PortfolioItem />
            </div>
        )
    }
}
