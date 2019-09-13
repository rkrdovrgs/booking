import React from 'react';
import ReactDOM from 'react-dom';
import Header from './src/components/Header/Header.dom';
import { BrowserRouter, Route, Switch, history } from 'react-router-dom';
import SearchScreen from './src/components/SearchScreen/SearchScreen.dom';
import BookProScreen from './src/components/BookProScreen/BookProScreen.dom';
import ConfirmBookProScreen from './src/components/ConfirmBookProScreen/ConfirmBookProScreen.dom';
import BookingConfirmedScreen from './src/components/BookingConfirmedScreen/BookingConfirmedScreen.dom';

ReactDOM.render(
    <BrowserRouter history={history}>
        <div>
            <Header>Demo</Header>
            <Switch>
                <Route exact path="/" component={SearchScreen} />
                <Route path="/booking/:bookingId/at/:proFriendlyId/confirmed" component={BookingConfirmedScreen} />
                <Route path="/book/:proFriendlyId/at/:fromUnix/confirm" component={ConfirmBookProScreen} />
                <Route path="/book/:proFriendlyId" component={BookProScreen} />
            </Switch>
        </div>
    </BrowserRouter>,
    document.getElementById("app")
);