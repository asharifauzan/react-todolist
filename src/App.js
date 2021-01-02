import React, {Component} from 'react';
import './assets/style/style.css';
import FormTodo from './FormTodo';

export default class App extends Component{
  constructor(){
    super();
    this.state = {
      todo: {},
      filter: 'all',
      header_background: 'desktop-light',
      icon_mode: 'icon-moon',
      dark_mode: false,
      key: 0,
      mobile: null
    }
    this.handleMode = this.handleMode.bind(this);
    this.handleTodo = this.handleTodo.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleComplete = this.handleComplete.bind(this);
  }
  handleFilter(mode_filter){
    this.setState({filter: mode_filter})
  }
  handleTodo(todo){
    let todolist = this.state.todo
    let newTodo = {id: this.state.key, todo, completed: false}
    todolist[this.state.key] = newTodo
    this.setState({
      todo: todolist,
      key: this.state.key+1
    })
  }
  handleReset(){
    this.setState({
      todo: {}
    })
  }
  handleComplete(id){
    let todolist = this.state.todo
    todolist[id].completed = !todolist[id].completed
    this.setState({todo: todolist})
  }
  handleMode(mode){
    // set dark mode
    if(mode === 'icon-moon'){
      this.setState({
        header_background: 'desktop-dark',
        icon_mode: 'icon-sun',
        dark_mode: true
      });
      document.body.style.background = 'hsl(235, 24%, 19%)';
      return;
    }
    // set light mode
    this.setState({
      header_background: 'desktop-light',
      icon_mode: 'icon-moon',
      dark_mode: false
    });
    document.body.style.background = 'hsl(0, 0%, 98%)';
  }
  componentDidMount(){
    window.addEventListener('resize', ()=>{
      let mobile = window.innerWidth > 375 ? false : true;
      this.setState({mobile})
    })
  }
  componentWillUnmount(){
    let mobile = window.innerWidth > 375 ? false : true;
    this.setState({mobile})
  }
  render(){
    return(
      <React.Fragment>
        <header className={this.state.header_background}></header>
        <FormTodo
          icon={this.state.icon_mode}
          mode={this.handleMode}
          is_dark={this.state.dark_mode}
          todo={this.handleTodo}
          filter={this.state.filter}
          handleFilter={this.handleFilter}
          todolist={this.state.todo}
          todoReset={this.handleReset}
          handleComplete={this.handleComplete}
          mobile={this.state.mobile}
        />
      </React.Fragment>
    )
  }
}
