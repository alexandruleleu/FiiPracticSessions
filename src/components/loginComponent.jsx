import React, { Component, Fragment } from "react";

//services
import AuthService from "../services/AuthService";

export default class LoginComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formState: {
                email: "",
                password: ""
            },
            logged: false,
            signUpSuccessMsg: false,
            signUpErrorMsg: false,
            successMsg: "",
            errorMsg: ""
        };

        this.authService = new AuthService();
        //console.log(this);
    }

    componentDidMount() {
        //check if user logged in
    }

    handleInputChange = ev => {
        const field = ev.target.name;
        const value = ev.target.value;
        this.setState(prevState => ({
            formState: {
                ...prevState.formState,
                [field]: value
            }
        }));
    };

    handleOnClickSignUp = () => {
        const { email, password } = this.state.formState;
        if (email !== "" && password !== "") {
            this.authService.onSignUpUser(email, password).then(
                rsp => {
                    this.setState({
                        signUpSuccessMsg: true,
                        signUpErrorMsg: false,
                        successMsg: rsp.message
                    });
                },
                err => {
                    this.setState({
                        signUpSuccessMsg: false,
                        signUpErrorMsg: true,
                        errorMsg: err.message
                    });
                }
            );
        }
    };

    handleOnClickLogin = () => {
        const { email, password } = this.state.formState;
        this.authService.onLoginUser(email, password).then(
            rsp => {
                this.setState({
                    logged: true
                });
            },
            err => {
                console.log(err);
            }
        );
    };

    handleOnClickLogout = () => {
        this.authService.onLogoutUser().then(() => {
            this.setState({
                logged: false
            });
        });
    };

    render() {
        const {
            formState,
            logged,
            signUpSuccessMsg,
            signUpErrorMsg,
            successMsg,
            errorMsg
        } = this.state;
        return (
            <Fragment>
                <div>
                    <h2>Firebase Auth</h2>
                </div>
                <div className="ui inverted left icon input">
                    <input
                        type="email"
                        name="email"
                        value={formState.email}
                        onChange={this.handleInputChange}
                        placeholder="Insert a valid email..."
                    />
                    <i className="envelope icon" />
                </div>
                <div className="ui inverted left icon input">
                    <input
                        type="password"
                        name="password"
                        value={formState.password}
                        onChange={this.handleInputChange}
                        placeholder="Password..."
                    />
                    <i className="lock icon" />
                </div>
                <div className="buttons-container">
                    {!logged ? (
                        <button
                            className="ui blue button"
                            onClick={this.handleOnClickLogin}
                        >
                            Login
                        </button>
                    ) : (
                        <button
                            className="ui orange button"
                            onClick={this.handleOnClickLogout}
                        >
                            Logout
                        </button>
                    )}
                    <button
                        className="ui white button "
                        onClick={this.handleOnClickSignUp}
                    >
                        SignUp
                    </button>
                </div>
                {signUpSuccessMsg ? (
                    <div className="ui success message">
                        <div className="small message">{successMsg}</div>
                    </div>
                ) : (
                    ""
                )}
                {signUpErrorMsg ? (
                    <div className="ui negative message">
                        <div className="small message">{errorMsg}</div>
                    </div>
                ) : (
                    ""
                )}
            </Fragment>
        );
    }
}
