import { combineReducers, createStore } from 'redux';
import uuid from 'uuid';

// ADD_EXPENSE
const addExpense = ({
    description = '',
    note = '',
    amount = 0,
    createdAt = 0,
} = {}) => ({
    type : 'ADD_EXPENSE',
    expense : {
        id : uuid(),
        description : description,
        note : note,
        amount : amount,
        createdAt : createdAt,
    }
});

// REMOVE_EXPENSE
const removeExpense = ({id} = {}) => ({
    type : 'REMOVE_EXPENSE',
    id
});

// EDIT_EXPENSE
const editExpense = (id,updates) => ({
    type : 'EDIT_EXPENSE',
    id,
    updates
});

// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
    type : 'SET_TEXT_FILTER',
    text
});

// SORT_BY_AMOUNT
const sortByAmount = (sortBy = 'amount') => ({
    type : 'SORT_BY_AMOUNT',
    sortBy
});

// SORT_BY_DATE
const sortByDate = (sortBy = 'date') => ({
    type : 'SORT_BY_DATE',
    sortBy
});

// SET START DATE
const setStartDate = (startDate = undefined) => ({
    type : 'SET_START_DATE',
    startDate,
});

// SET END DATE
const setEndDate = (endDate = undefined) => ({
    type : 'SET_END_DATE',
    endDate,
});

// Expenses Reducer
let expenseReducerDefaultState = [];
const expenseReducer = (state = expenseReducerDefaultState,action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state,action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => {
                return id !== action.id;
            });
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if(expense.id == action.id){
                    return {
                        ...expense,
                        ...action.updates
                    }
                }
                else{
                    return expense;
                }
            });
        default:
            return state;
    }
};

// Filter Reducer
let filterReducerDefaultState = {
    text : '',
    sortBy : 'date',
    startDate : undefined,
    endDate : undefined,
};
const filterReducer = (state = filterReducerDefaultState,action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
        return {
            ...state,
            text : action.text
        };
        case 'SORT_BY_AMOUNT':
        return {
            ...state,
            sortBy : action.sortBy
        };
        case 'SORT_BY_DATE':
        return {
            ...state,
            sortBy : action.sortBy
        };
        case 'SET_START_DATE':
        return {
            ...state,
            startDate : action.startDate,
        }
        case 'SET_END_DATE':
        return {
            ...state,
            endDate : action.endDate,
        }
        default:
            return state;
    }
};

// Create expense store
const expenseStore = createStore(
    combineReducers({
        expenses : expenseReducer,
        filters : filterReducer,
    })
);
// Get visible expenses
const getVisibleExpense = (expenses,{text,sortBy,startDate,endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b)=>{
        if(sortBy === 'date'){
            return a.createdAt - b.createdAt;
        }
        if(sortBy === 'amount'){
            return a.amount - b.amount;
        }
    });
};

expenseStore.subscribe(()=>{
    let state = expenseStore.getState();
    const visibleExpense = getVisibleExpense(state.expenses,state.filters);
    console.log(visibleExpense);    
});

const expenseOne = expenseStore.dispatch(addExpense({description:'Rent',note:'This is rent amount',amount:200, createdAt:37543343}));
const expenseTwo = expenseStore.dispatch(addExpense({description:'Food',note:'This is food amount',amount:700, createdAt:34543343}));

// expenseStore.dispatch(removeExpense({id:expenseOne.expense.id}));
// expenseStore.dispatch(editExpense(expenseTwo.expense.id,{amount : 1200}));

// expenseStore.dispatch(setTextFilter('rENT'));

expenseStore.dispatch(sortByAmount());
// expenseStore.dispatch(sortByDate());

// expenseStore.dispatch(setStartDate(35082018));
// expenseStore.dispatch(setEndDate(35082018));

const expensifyStore =  {
    expenses : [{
        id : '1',
        description : 'Expense One',
        note : 'This is dummy data',
        amount : 500,
        createdAt : 0,
    }],
    filters : {
        text : 'dummy',
        sortBy : 'date',
        startDate : undefined,
        endDate : undefined,
    }
};

export default expensifyStore;