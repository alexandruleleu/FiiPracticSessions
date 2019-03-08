import React, { Component } from "react";

//components

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "FiiPractic",
            toggle: false,
            value: 0
        };

        this.toggleButton = this.toggleButton.bind(this);
    }

    toggleButton() {
        this.setState(prevState => ({ toggle: !prevState.toggle }));
    }

    handleIncrease = () => {
        this.setState(prevState => ({ value: prevState.value + 1 }));
        //this.state.value = this.state.value + 1;
    };

    render() {
        const { toggle } = this.state;
        return (
            <div className="app">
                <div className="app-container">
                    <div className="app-content">
                        <p>{this.state.name}</p>
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
                    </div>
                    <div className="app-login-component" />
                </div>
            </div>
        );
    }
}

export default App;
