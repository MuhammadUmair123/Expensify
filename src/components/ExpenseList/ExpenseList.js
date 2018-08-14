import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from '../ExpenseListItem/ExpenseListItem';
import getVisibleExpense from '../../selectors/expenses';

const ExpenseList = (props) => (
  <div>
    <h3>This is ExpenseList</h3>
    {props.expenses.map((expense)=>{
      return <ExpenseListItem key={expense.id} {...expense}/>
    })}
  </div>
);

const mapStateToProps = (state)=>{
  return {
    expenses : getVisibleExpense(state.expenses,state.filters),
  };
}

export default connect(mapStateToProps)(ExpenseList);
