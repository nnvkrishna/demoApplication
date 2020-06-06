import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    
    Route,
    Switch
} from 'react-router-dom';
import { createBrowserHistory } from "history";

import LoginComponent from "../Components/Login/index";
import SignUpComponent from "../Components/Signup/index"; 

const history = createBrowserHistory();

class AppRoutes extends Component {
    constructor(props) {
        super(props);
    }

    render() {
       

        console.log('App Render called')

        return (

            <Router history={history}>
                <Switch>
                <Route exact path="/" component={LoginComponent} />
                <Route exact path="/login" component={LoginComponent} />
                <Route exact path="/signup" component={SignUpComponent} />
               
                </Switch>
            </Router>
            

        );

    }
}

export default AppRoutes;


