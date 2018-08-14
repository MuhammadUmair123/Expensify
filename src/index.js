import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import configStore from './store/configStore';
import AppRouter from './routers/AppRouter';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpense from './selectors/expenses';
import registerServiceWorker from './registerServiceWorker';
// import expensifyStore from './redux-expensify/expensify';

const store = configStore();

store.dispatch(addExpense({description:'Water Bill',amount: 4500}));
store.dispatch(addExpense({description:'Gas Bill', amount: 3000, createdAt: 1400}));
store.dispatch(addExpense({description:'Electric Bill', amount: 6000, createdAt: 1000}));


const state = store.getState();
const visibleExpense = getVisibleExpense(state.expenses,state.filters);

console.log(visibleExpense);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));
registerServiceWorker();
