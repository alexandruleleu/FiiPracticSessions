//Hint: Our menu item should be as a Link(from react-router-dom) component to get redirect behaviour
import React, { Component } from "react";
import { Link } from "react-router-dom";
//Menu component from semantic-ui-react !!!
import { Menu } from "semantic-ui-react";

export default class MenuComponent extends Component {
    state = {};

    render() {
        return (
            <div style={{ width: "100%", borderBottom: "1px solid grey" }}>
                Menu Item
            </div>
        );
    }
}
