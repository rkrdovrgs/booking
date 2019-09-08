import React from 'react';
import ReactDOM from 'react-dom';
import Header from './src/components/Header/Header.dom';
import { BrowserRouter, Route, Switch, history } from 'react-router-dom';
import SearchScreen from './src/components/SearchScreen/SearchScreen.dom';
import ArticleScreen from './src/components/ArticleScreen/ArticleScreen.dom';

ReactDOM.render(
    <BrowserRouter history={history}>
        <div>
            <Header>MERRnN</Header>
            <Switch>
                <Route exact path="/" component={SearchScreen} />
                <Route path="/article/:id" component={ArticleScreen} />
            </Switch>
        </div>
    </BrowserRouter>,
    document.getElementById("app")
);
