import React, { Component } from 'react'
import TodoItem from './TodoItems'

export class TodoList extends Component {
  render() {
    return (
      <ul>
        {this.props.todos.map(todo =>(
            <TodoItem key={todo.id} todo={todo}
            handleChangeProps={this.props.handleChangeProps} 
            onChange={() => this.props.handleChangeProps()}
            handleRemove={this.props.handleTodoRemove}/>
        )
            )}
      </ul>
    )
  }
}

export default TodoList