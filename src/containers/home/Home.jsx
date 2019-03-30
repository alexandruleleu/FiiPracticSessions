import React, { Component } from "react";
import { Button, Icon } from "semantic-ui-react";

import { connect } from "react-redux";

class HomeComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    handleButtonClick = target => {
        console.log(target);
        if (target === "increment") {
            this.props.onIncrement();
        }
        if (target === "incrementAsync") {
            this.props.onIncrementAsync();
        }
        if (target === "decrement") {
            this.props.onDecrement();
        }
        if (target === "decrementAsync") {
            this.props.onDecrementAsync();
        }
    };

    handleInputChange = ev => {
        // Update form elements
        const propPath = ev.target.name;
        const payload = ev.target.value;
        this.props.onUpdateFormState(propPath, payload);
    };

    render() {
        const { firstName, lastName } = this.props.home.formState;
        return (
            <div className="home__container">
                <section className="home__container--form">
                    <div className="ui huge input">
                        <input
                            name="firstName"
                            placeholder="First Name"
                            type="text"
                            value={firstName}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <div className="ui huge input">
                        <input
                            name="lastName"
                            placeholder="Last Name"
                            type="text"
                            value={lastName}
                            onChange={this.handleInputChange}
                        />
                    </div>
                </section>

                <section className="home__container--header">
                    <h1>Asynchronous Redux Actions Using Redux Thunk</h1>
                    <h3>Count: {this.props.home.count}</h3>
                </section>

                <section className="home__container--buttons">
                    <div className="first-row">
                        <Button
                            className={`big ${
                                this.props.home.isIncrementing ? "disabled" : ""
                            }`}
                            color="blue"
                            onClick={() => {
                                this.handleButtonClick("increment");
                            }}
                        >
                            <Icon name="plus" /> Increment
                        </Button>
                        <Button
                            className={`big ${
                                this.props.home.isIncrementing ? "disabled" : ""
                            }`}
                            color="blue"
                            onClick={() => {
                                this.handleButtonClick("incrementAsync");
                            }}
                        >
                            <Icon name="plus" /> Increment Async
                        </Button>
                    </div>
                    <div className="second-row">
                        <Button
                            className={`big ${
                                this.props.home.isDecrementing ? "disabled" : ""
                            }`}
                            color="blue"
                            onClick={() => {
                                this.handleButtonClick("decrement");
                            }}
                        >
                            <Icon name="minus" /> Decrement
                        </Button>
                        <Button
                            className={`big ${
                                this.props.home.isDecrementing ? "disabled" : ""
                            }`}
                            color="blue"
                            onClick={() => {
                                this.handleButtonClick("decrementAsync");
                            }}
                        >
                            <Icon name="minus" /> Decrement Async
                        </Button>
                    </div>
                </section>
            </div>
        );
    }
}

const mapStateProps = state => ({
    home: state.home
});

const mapDispatchToProps = dispatch => ({
    onUpdateFormState: (propPath, payload) => {
        dispatch({
            type: "UPDATE_FORM_STATE",
            propPath: propPath,
            data: payload
        });
    },
    onIncrement: () => {
        dispatch({
            type: "INCREMENT_REQUESTED"
        });
        dispatch({
            type: "INCREMENT"
        });
    },
    onIncrementAsync: () => {
        dispatch({
            type: "INCREMENT_REQUESTED"
        });

        return setTimeout(() => {
            dispatch({
                type: "INCREMENT"
            });
        }, 3000);
    },
    onDecrement: () => {
        dispatch({
            type: "DECREMENT_REQUESTED"
        });

        dispatch({
            type: "DECREMENT"
        });
    },
    onDecrementAsync: () => {
        dispatch({
            type: "DECREMENT_REQUESTED"
        });

        return setTimeout(() => {
            dispatch({
                type: "DECREMENT"
            });
        }, 3000);
    }
});

const Home = connect(
    mapStateProps,
    mapDispatchToProps
)(HomeComponent);

export default Home;
