import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import AuthServices from "../../services/AuthService";

export default class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logout: false
        };
    }

    handleLogoutClick = () => {
        const Auth = new AuthServices();
        Auth.logout().then(() => {
            this.setState({ logout: true });
        });
    };

    redirectToTarget = target => {
        return <Redirect to={target} />;
    };

    render() {
        return (
            <div className="header__component">
                <div className="header__component-logo">
                    <i className="map pin inverted white icon" />
                    Fii<span>Practic - session II</span>
                </div>
                <div className="header__component-profile">
                    <div
                        className="header__component-logout"
                        onClick={this.handleLogoutClick}
                    >
                        Logout
                    </div>
                </div>
                {this.state.logout ? this.redirectToTarget("/login") : ""}
            </div>
        );
    }
}
