import React, {Component} from 'react';
import Filter from './Filter';
import Message from './Message';

export default class Body extends Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
    this.handleComplete = this.handleComplete.bind(this);
  }
  handleClick(){
    this.props.todoReset();
  }
  handleFilter(filter){
    this.props.handleFilter(filter)
  }
  handleComplete(id){
    this.props.handleComplete(id);
  }
  static getDerivedStateFromProps(props, state){
    let todolist = props.todolist;
    if(props.filter === 'active'){
      todolist = Object.entries(props.todolist).filter(([key, val]) => val.completed === false).map((val, key) =>{
        return val[1]
      })
      todolist = Object.assign({}, todolist);
    } else if(props.filter === 'completed'){
      todolist = Object.entries(props.todolist).filter(([key, val]) => val.completed === true).map((val, key) =>{
        return val[1]
      })
      todolist = Object.assign({}, todolist);
    }
    return {todo: todolist}
  }
  render(){
    return(
      <>
      <div className={this.props.dark_mode ? 'todo-body dark': 'todo-body'}>
        <ul>
          {Object.entries(this.state.todo).map(([key, val])=> {
            return (
              <li key={key}>
                <div className={val.completed ? 'round round-checked' : 'round'}>
                  <input
                    id={'checkbox'+val.id}
                    checked={val.completed}
                    type='checkbox'
                    readOnly
                  />
                  <label className={this.props.dark_mode ? 'dark-label' : null} for={'checkbox'+val.id}></label>
                </div>
                <span className={val.completed ? 'strike' : null}>{val.todo}</span>
                <p onClick={()=>{this.handleComplete(val.id)}}>X</p>
              </li>
            )
          })}
        </ul>
        <div className='control'>
          <div className='amount'>{Object.keys(this.state.todo).length} items left</div>
          {!this.props.mobile ? <Filter
            handleFilter={this.handleFilter}
            filter={this.props.filter}
            dark_mode={this.props.dark_mode}
            mobile={this.props.mobile}/> : null}
          <div className='reset' onClick={this.handleClick}>Clear Completed</div>
        </div>
      </div>
      {this.props.mobile ? <Filter
         handleFilter={this.handleFilter}
         filter={this.props.filter}
         dark_mode={this.props.dark_mode}
         mobile={this.props.mobile}/> : null}
      <Message dark_mode={this.props.dark_mode}/>
      </>
    )
  }
}
