import React from 'react';
import App from '../App/App';
import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';
import AddExpense from '../components/AddExpense/AddExpense';
import EditExpense from '../components/EditExpense/EditExpense';
import Help from '../components/Help/Help';
import PageNotFound from '../components/PageNotFound/PageNotFound';
import {BrowserRouter, Route, Switch } from 'react-router-dom';

const AppRouter = () =>(
    <BrowserRouter>
        <div>
        <Header />
        <Navbar />
        <Switch>
            <Route path="/" component={App} exact={true}/>
            <Route path="/create" component={AddExpense}/>
            <Route path="/edit/:id" component={EditExpense}/>
            <Route path="/help" component={Help}/>
            <Route component={PageNotFound}/>
        </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;