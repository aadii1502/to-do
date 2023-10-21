import React from "react";
class TodoItem extends React.Component
{
    render()
    {
        return <li className=" bg-black font-sans text-white flex px-4 uppercase font-semibold py-2">{this.props.todo.title}</li>
    }
}

export default TodoItem;