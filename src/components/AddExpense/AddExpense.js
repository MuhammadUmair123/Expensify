import React, { Component } from "react";
import { connect } from "react-redux";
import { addExpense } from '../../actions/expenses';
import ExpenseForm from '../ExpenseForm/ExpenseForm';

const AddExpense = (props) => ( 
  <div>
    <ExpenseForm onSubmit={(expense)=>{
      props.dispatch(addExpense(expense));
      props.history.push('/');
    }}/>
  </div>

)

export default connect()(AddExpense);
