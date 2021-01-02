import React, {Component} from 'react';
import Head from './Component/Head';
import Input from './Component/Input';
import Body from './Component/Body';

export default class FormTodo extends Component{
  constructor(){
    super();
    this.handleMode = this.handleMode.bind(this);
    this.handleTodo = this.handleTodo.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
    this.handleComplete = this.handleComplete.bind(this);
  }
  handleMode(mode){
    this.props.mode(mode);
  }
  handleTodo(todo){
    this.props.todo(todo);
  }
  handleFilter(filter){
    this.props.handleFilter(filter);
  }
  handleComplete(id){
    this.props.handleComplete(id);
  }
  render(){
    return(
      <div className='todo-wrapper'>
        <Head icon={this.props.icon} mode={this.handleMode}/>
        <Input dark_mode={this.props.is_dark} todo={this.props.todo}/>
        <Body dark_mode={this.props.is_dark}
        todolist={this.props.todolist}
        todoReset={this.props.todoReset} 
        filter={this.props.filter}
        handleFilter={this.handleFilter}
        handleComplete={this.handleComplete}
        mobile={this.props.mobile}
      />
      </div>
    )
  }
}
