import React, { Component } from "react";

export default class Todo extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount = () => {};

    componentWillUnmount = () => {};

    render() {
        return (
            <div className="todo__container">
                <h1>Todo page!</h1>
            </div>
        );
    }
}
