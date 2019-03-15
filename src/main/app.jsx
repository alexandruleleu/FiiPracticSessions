import React from "react";

//if you want -- you can use BrowserRouter
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch, Redirect } from "react-router-dom";

//common layout for home component and todo component (header + main)
import MainLayout from "../components/mainLayout/MainLayout";

/*  Our components
    TODO: create a specific route for each of them
 */
import Login from "../containers/login/Login";
import Home from "../containers/home/Home";
import Todo from "../containers/todo/Todo";

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Here should be our Router!!!</h1>
            </div>
        );
    }
}

export default App;
