import React, {Component} from 'react';

export default class Filter extends Component{
  constructor(props){
    super(props);
    this.state = {
      filter: ['all', 'active', 'completed'],
      todo: props.todolist
    }
  }
  handleFilter(filter){
    this.props.handleFilter(filter)
  }
  render(){
    return(
      <div className={this.props.mobile ? 'filter-mobile' : 'filter'}>
        {this.state.filter.map((val, key)=>{
          return <p
                  key={key}
                  className={this.props.filter === val && this.props.dark_mode ? 'active-dark'
                              : this.props.filter === val && !this.props.dark_mode ? 'active'
                              : null}
                  onClick={()=>{this.handleFilter(val)}}>
                  {val}
                </p>
        })}
      </div>
    )
  }
}
