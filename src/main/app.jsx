import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// our template which contains header and main body
import MainLayout from "../components/mainLayout/MainLayout";

//page components
import Login from "../containers/login/Login";
import Home from "../containers/home/Home";
import Todo from "../containers/todo/Todo";

class App extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/login" component={Login} />

                <Route
                    exact
                    path="/home"
                    render={props => (
                        <MainLayout {...props}>
                            <Home />
                        </MainLayout>
                    )}
                />
                <Route
                    exact
                    path="/todo"
                    render={props => (
                        <MainLayout {...props}>
                            <Todo />
                        </MainLayout>
                    )}
                />

                {/* When you insert a wrong route you will be automatically redirect to login screen */}
                <Redirect from="/" to="/login" />
            </Switch>
        );
    }
}

export default App;
