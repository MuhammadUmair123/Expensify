import React, { Component } from 'react';
// import logo from '../logo.svg';
import ExpenseList from '../components/ExpenseList/ExpenseList';
import ExpenseListFilter from '../components/ExpenseListFilter/ExpenseListFilter';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <ExpenseListFilter />
        <ExpenseList />
      </div>
    );
  }
}

export default App;
