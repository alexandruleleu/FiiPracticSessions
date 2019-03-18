import React, { Component } from "react";

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount = () => {};

    render() {
        return (
            <div className="home__container">
                <h1>Home screen!!!</h1>
            </div>
        );
    }
}
