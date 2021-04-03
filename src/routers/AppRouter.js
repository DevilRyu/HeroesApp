import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { LoginScreen } from '../components/login/LoginScreen';
import { DashBoardRoutes } from './DashBoardRoutes';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/HeroesApp/login" component={LoginScreen} />
                    <Route path="/HeroesApp" component={DashBoardRoutes} />
                </Switch>
            </div>
        </Router>
    )
}
