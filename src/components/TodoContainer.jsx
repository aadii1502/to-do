import React, { Component } from 'react';
import TodoList from './TodoList';
// import Header from './Header';
import InputTodo from './InputToDo';
 class TodoContainer extends Component {

    state = 
    {
        todos:
        [
            {
                id:1,
                title:"Setup Development Environment",
                completed:true
            },
            {
                id:2,
                title:"Devlop website and add content",
                completed:true
            },
            {
                id:3,
                title:"Deploy to Live Server ",
                completed:false
            },
        ]
    };
    handleChange = (id) =>
    {
        this.setState((prevState) =>
        {
            return {
                todos: prevState.todos.map((todo) =>
                {
                  if(todo.id === id)
                  {
                    return {
                        ...todo,
                        completed : !todo.completed,
                    };
                  }
                  return todo;
                }),
            }
        })
    }

    //Add function

    handleAdd = (e,newTodo) => {
        e.preventDefault();
        this.setState((prevState) => {
            return {
                todos: [
                    ...prevState.todos,
                    {
                        id:prevState.todos.length+1,
                        title:newTodo,
                        completed:false,
                    },
                ],
            }
        })
    }

    //Remove function

    handleRemove =(e,id) => {
        this.setState((prevState) => {
            return {
                todos:prevState.todos.filter((obj) => {
                    return obj.id !==id;
                }),
            }
        })
    }
  render() {
    return (
        <>
        <div className='overall'>
         {/* <Header/> */}
         <InputTodo handleSubmit={this.handleAdd} handleDelete={this.handleRemove}/>
         <TodoList
          todos={this.state.todos}
          handleChangeProps={this.handleChange}
          handleTodoRemove={this.handleRemove}/>
        </div>
        </>
    )
  }
}

export default TodoContainer;