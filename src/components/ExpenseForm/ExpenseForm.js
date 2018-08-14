import React, { Component } from "react";
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

const now = moment();
console.log(now.format('MMM Do,YYYY'));
class ExpenseForm extends Component {
  constructor (props){
    super(props);
    this.state = {
      description : props.expense?props.expense.description:'',
      amount : props.expense?props.expense.amount:'',
      note : props.expense?props.expense.note:'',
      createdAt : props.expense?moment(props.expense.createdAt):moment(),
      focused : false,
      error : '',
    };
  }
  
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({description}));
  };
  onAmountChange = (e) => {
    const amount = e.target.value;
    this.setState(() => ({amount}));
  };
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({note}));
  };
  onDateChange = (createdAt) => {
    this.setState(() => ({createdAt}));
  };
  onFocusChange = ({focused}) => {
    this.setState(() => ({focused}));
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    if(!this.state.description || !this.state.amount){
      this.setState(()=>({
        error : 'Description or Amount field is required.'
      }));
    }
    else{      
      this.setState(()=>({
        error : 'Expense added submitted successfully.'
      }));
      this.props.onSubmit({
        description : this.state.description,
        amount : parseFloat(this.state.amount,10),
        createdAt : this.state.createdAt.valueOf(),
        note : this.state.note,
      });
    }
  };

  render() {
    return (
    <div className="container" style={{marginTop:'30px'}}>
      <div className="row">
        {this.state.error && <p className="text-center" style={{color:'red'}}>{this.state.error}</p>}
        <div className="col-sm-2"></div>
        <div className="col-sm-8">
          <form className="form-horizontal" onSubmit={this.onFormSubmit}>
            
            <div className="form-group">
              <div className="col-sm-12">
                <input type="text" className="form-control" 
                placeholder="Enter Description" value={this.state.description} 
                onChange={this.onDescriptionChange} autoFocus/>
              </div>
            </div>

            <div className="form-group">
              <div className="col-sm-12">
                <input type="number" className="form-control" 
                placeholder="Enter Amount" value={this.state.amount} 
                onChange={this.onAmountChange}/>
              </div>
            </div>

            <SingleDatePicker
              date={this.state.createdAt} 
              onDateChange={this.onDateChange} 
              focused={this.state.focused}
              onFocusChange={this.onFocusChange} 
              numberOfMonths={1}
              isOutsideRange={() => false}
            />

            <div className="form-group" style={{marginTop:'15px'}}>
              <div className="col-sm-12">
              <textarea className="form-control" rows="5" 
              placeholder="Enter Note" value={this.state.note} 
              onChange={this.onNoteChange}></textarea>
              </div>
            </div>

            <div className="col-sm-12 text-center">
              <button type="submit" className="btn btn-primary">Save</button>
            </div>

          </form>
        </div>
        <div className="col-sm-2"></div>

      </div>   
    </div>);
  }
}

export default ExpenseForm;
