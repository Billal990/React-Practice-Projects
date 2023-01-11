import { useContext } from "react";
import { todoContext } from "../context/TodoContext";
import React from "react";
const AllTodoList = () => {
  const { state, dispatch } = useContext(todoContext);
  return (
    <ul className="todo-list">
      {state?.todos?.map((todo) => (
        <li key={todo.id}>
          <p className="todo-title"> {todo.todoTitle} </p>
          <div className="action-buttons">
            <button
              onClick={() => dispatch({ type: "edit_todo", payload: todo.id })}
            >
              Edit
            </button>
            <button
              onClick={() =>
                dispatch({ type: "delete_todo", payload: todo.id })
              }
            >
              Delete
            </button>
          </div>
        </li>
      ))}
      {!state.todos.length > 0 ? "No Tasks" : ""}
    </ul>
  );
};

export default AllTodoList;
