import { combineReducers, createStore } from 'redux';
import expenseReducer from '../reducers/expenses';
import filterReducer from '../reducers/filters';
// Create expense store

export default () => {
    const expenseStore = createStore(
        combineReducers({
            expenses : expenseReducer,
            filters : filterReducer,
        })
    );
    return expenseStore;
}
