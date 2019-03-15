import React from "react";

export default class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount = () => {};

    render() {
        return (
            <div className="home__container">
                <h1>Home page!</h1>
            </div>
        );
    }
}
