import React, { Component } from 'react';

import { Routes, Route, BrowserRouter, Switch } from 'react-router-dom';
import LoginPage from './components/Login/login';

export default class Rotas extends Component {

    render() {

        const routes = [
            { route : "/login", view : LoginPage, exact : false}
        ]


        return (
            <BrowserRouter>
                <Switch>
                    {routes.map((route, index) => (
                        <Route key={index} path={route.route} exact={route.exact} component={route.view} />
                    ))}
                </Switch>
            </BrowserRouter>
        );
    }
}