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
                    <Route exact path="/" component={AllHeoresList} />
                    <Route exact path="/marvel" component={MarvelScreen} />
                    <Route exact path="/hero/:heroId" component={HeroScreen} />
                    <Route exact path="/dc" component={DcScreen} />
                    <Route exact path="/search" component={SeacrhScreen} />
                    <Redirect to="/" />
                </Switch>
            </div>

        </>
    )
}
