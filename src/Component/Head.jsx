import React, {Component} from 'react';

export default class Head extends Component{
  constructor(){
    super();
    this.handleMode = this.handleMode.bind(this);
  }
  handleMode(){
    this.props.mode(this.props.icon);
  }
  render(){
    return(
      <div className='todo-head'>
        <h1>TODO</h1>
        <div className={this.props.icon} onClick={this.handleMode}></div>
      </div>
    )
  }
}
