import React from 'react';
import { Navbar } from '../components/ui/Navbar';
import { Switch, Route, Redirect } from "react-router-dom";
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { HeroScreen } from '../components/heroes/HeroScreen';
import { DcScreen } from '../components/dc/DcScreen';
import { SeacrhScreen } from '../components/search/SeacrhScreen';
import AllHeoresList from '../components/heroes/AllHeoresList';

export const DashBoardRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="container mt-2">
                <Switch>
                    <Route exact path="/HeroesApp" component={AllHeoresList} />
                    <Route exact path="/HeroesApp/marvel" component={MarvelScreen} />
                    <Route exact path="/HeroesApp/hero/:heroId" component={HeroScreen} />
                    <Route exact path="/HeroesApp/dc" component={DcScreen} />
                    <Route exact path="/HeroesApp/search" component={SeacrhScreen} />
                    <Redirect to="/HeroesApp" />
                </Switch>
            </div>

        </>
    )
}
