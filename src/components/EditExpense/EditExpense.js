import React, { Component } from "react";
import { connect } from "react-redux";
import { editExpense } from '../../actions/expenses';
import ExpenseForm from '../ExpenseForm/ExpenseForm';

class EditExpense extends Component {
  render() {
    console.log(this.props);
    return (<div>
      <ExpenseForm 
      expense = {this.props.expense}
      onSubmit = {(expense) => {
        this.props.dispatch(editExpense(this.props.expense.id,expense));
        this.props.history.push('/');
      }}
      />
    </div>);
  }
}

const mapPropsToState = (state,props) => {
  return {
    expense : state.expenses.find((expense) => {
      return expense.id === props.match.params.id;
    })
  };
}



export default connect(mapPropsToState)(EditExpense);
