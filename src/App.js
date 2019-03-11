import React, { Component } from "react";

//components
import ListItem from "./components/listItem";
import LoginComponent from "./components/loginComponent";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "FiiPractic - first session",
            inputValue: "",
            students: [
                {
                    name: "Daniel",
                    age: 21
                },
                {
                    name: "Bogdan",
                    age: 20
                },
                {
                    name: "Lisandru",
                    age: 25
                },
                {
                    name: "Mihaita",
                    age: 18
                }
            ],
            toggle: false,
            value: 0
        };

        // you can bind a new function to "this" of the class component or use arrow function
        //this.toggleButton = this.toggleButton.bind(this);
    }

    toggleButton = () => {
        //setState updates the local state of the componet, in this way the React Component is aware of changes
        this.setState(prevState => ({ toggle: !prevState.toggle }));
    };

    handleIncrease = () => {
        this.setState(prevState => ({ value: prevState.value + 1 }));
    };

    handleInputValue = event => {
        const { value } = event.target;
        this.setState({
            inputValue: value
        });
    };

    render() {
        const { name, toggle, students, inputValue } = this.state;
        return (
            <div className="app">
                <div className="app-container">
                    <div className="app-content">
                        <p>{name}</p>
                        <div>
                            <button
                                className="ui white button"
                                onClick={this.toggleButton}
                            >
                                {toggle ? "ON" : "OFF"}
                            </button>
                        </div>
                        <button
                            className="ui white button "
                            onClick={this.handleIncrease}
                        >
                            Increase
                        </button>
                        <h1>{this.state.value}</h1>
                        <ul>
                            {students.map((item, index) => (
                                <ListItem
                                    key={index}
                                    name={item.name}
                                    age={item.age}
                                />
                            ))}
                        </ul>
                        <div className="ui inverted input">
                            <input
                                type="text"
                                onChange={this.handleInputValue}
                                value={inputValue}
                                placeholder="Insert something..."
                            />
                        </div>
                        <div className="input-value">{inputValue}</div>
                    </div>
                    <div className="app-login-component">
                        <LoginComponent name="loginComonent" />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
