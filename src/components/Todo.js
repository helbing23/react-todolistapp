import React,{Component} from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todo extends Component {

  render() {
      //console.log(this.props.todo);
    return this.props.todos.map((todo)=>(
      <TodoItem key={todo.id} todo={todo} 
       markComplete={this.props.markComplete} delTodo={this.props.delTodo}/>
    ));
  }
}

// PropTypes
Todo.propTypes = {      //here it should be .propTypes
    todos:PropTypes.array.isRequired
}
export default Todo;
