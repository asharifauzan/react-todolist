import React, {Component} from 'react';

export default class Input extends Component{
  constructor(){
    super();
    this.state = {
      todo: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(e){
    e.preventDefault();
    if (!this.state.todo) {
      return;
    }
    this.props.todo(this.state.todo);
    this.setState({todo: ''});
  }
  handleChange(e){
    this.setState({todo: e.target.value});
  }
  render(){
    return (
      <form className={this.props.dark_mode ? 'todo-input dark': 'todo-input'} onSubmit={this.handleSubmit}>
        <div className='round'>
          <input type='checkbox' id='todo-input' readOnly/>
          <label className={this.props.dark_mode ? 'dark-label' : null} for='todo-input'></label>
        </div>
        <input type='text' onChange={this.handleChange} value={this.state.todo} placeholder='Create a new todo..' />
      </form>
    )
  }
}
