import React, { Component } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
class InputTodo extends Component {
  state = { title: "" };
  onChange = (e) => {
    e.preventDefault();
    this.setState({
      title: e.target.value,
    });
  };
  render() {
    return (
      <form className="form flex justify-center my-4">
        <input
          className="textbox px-2 border border-black bg-black text-white"
          type="text"
          placeholder="Add Todo..."
          value={this.state.title}
          onChange={this.onChange}
        />
        <button
          className="button"
          onClick={(e) => {
            this.state.title.length > 0 &&
              this.props.handleSubmit(e, this.state.title);
          }}
        >
          <AiOutlinePlusCircle size={35} />
        </button>
        <button 
        className="button border border-black  px-4 mx-2 bg-black text-white rounded-xl"
        onClick={(e) => {
          this.state.title.length > 0 &&
            this.props.handleDelete(e, this.state.title);
        }}
        >
            Remove
        </button>
      </form>
    );
  }
}
export default InputTodo;
