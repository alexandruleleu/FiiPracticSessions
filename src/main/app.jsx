import React, { Component } from "react";
import { connect } from "react-redux";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from "react-router-dom";

// our template which contains header and main body
import MainLayout from "../components/mainLayout/MainLayout";

//page components
import Login from "../containers/login/Login";
//import Home from "../containers/home/Home";
import TodoComponent from "../containers/todo/todoComponents/Todo";

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/login" component={Login} />
                    {/* <Route
                        exact
                        path="/home"
                        render={props => (
                            <MainLayout {...props}>
                                <Home />
                            </MainLayout>
                        )}
                    /> */}
                    <Route
                        exact
                        path="/todo"
                        render={props => (
                            <MainLayout {...props}>
                                <TodoComponent />
                            </MainLayout>
                        )}
                    />

                    {/* When you insert a wrong route you will be automatically redirect to login screen */}
                    <Redirect from="/" to="/login" />
                </Switch>
            </Router>
        );
    }
}

export default App;
