import React from "react";
import { connect } from "react-redux";
import { NavLink} from 'react-router-dom';
import { removeExpense } from '../../actions/expenses';
const ExpenseListItem = ({id,dispatch,description,amount,createdAt}) => (
  <div>
    <h3>{description}</h3>
    <p>{amount} - {createdAt}</p>
    <button onClick={()=>{
      dispatch(removeExpense({id}));
    }}>Remove</button>
    <NavLink to={`/edit/${id}`}><button>Edit</button></NavLink>
  </div>
);

export default connect()(ExpenseListItem);
