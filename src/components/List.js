import React, { Component } from "react";
import { PropTypes } from "prop-types";
import Item from "./Item";

export default class List extends Component {
  // 針對接收的props進行限制
  static propTypes = {
    todos: PropTypes.array.isRequired,
    updateTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
  };
  render() {
    const { todos, updateTodo, deleteTodo } = this.props;
    return (
      <ul className="todo-main">
        {todos.map((todoObj) => {
          // return <Item key={todo.id} id={todo.id} name={todo.name} />; 這一行與下一行等價
          return (
            <Item
              key={todoObj.id}
              {...todoObj}
              updateTodo={updateTodo}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </ul>
    );
  }
}
