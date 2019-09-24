import React,{Component} from 'react';
import './App.css'; //external css
import {BrowserRouter as Router,Route} from 'react-router-dom'; //to route the pages
import Header from './components/layout/Header';
import AddTodo  from './components/AddTodo';
import Todo from './components/Todo';
import About from './components/pages/About';
import uuid from 'uuid'; //creating random id's when adding todos



class App extends Component {
  state={
    todos: [
      {
        id:uuid.v4(), // uuid version 4
        title: 'Get up early',
        completed:false //intially kept falsed(checkbox unchecked)
      },
      {
        id:uuid.v4(),
        title: 'Have breakfast',
        completed:false
      },
      {
        id:uuid.v4(),
        title: 'Have Lunch',
        completed:false 
      },
      {
        id:uuid.v4(),
        title: 'Have Dinner',
        completed:false
      },
      {
        id:uuid.v4(),
        title: 'Go sleep Early',
        completed:false
      }
    ]
  }

  //Toggle mark complete
  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  //Delete Todo
  delTodo= (id) => {
    this.setState({todos: [...this.state.todos.filter(todo => todo.id
    !== id
    )]});
  }

  // Add Todo
  addTodo = (title) =>{
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    }
    this.setState({todos: [...this.state.todos,newTodo]});
  }

  render() {
    return (
      <Router basename = "/react-todolistapp/">
      <div className='App'>
        <div className='container'>
          <Header/>
          <Route exact path='/' render ={props => ( //Route exact path is used to direct exact location of /
              <React.Fragment> {/* instead of using div ,we can wrap everything inside React.Fragment */}
              <AddTodo addTodo={this.addTodo}/> 
              <Todo todos={this.state.todos} markComplete ={this.markComplete} delTodo={this.delTodo} />
            </React.Fragment>
          )} />
          <Route path='/about' component ={About} />
        </div>
      </div>
      </Router>
    );
  }
}
export default App;
