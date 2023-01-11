import React from "react";
import { useContext } from "react";
import { todoContext } from "../context/TodoContext";
const AddTodoForm = () => {
  const { state, dispatch } = useContext(todoContext);
  const submitHandler = (ev) => {
    ev.preventDefault();
    if (state.todoTitle === "") {
      return alert("Please input a data");
    }
    !state.editableMode
      ? dispatch({ type: "add_new_todo" })
      : dispatch({ type: "update_todo" });
  };

  return (
    <form action="#" onSubmit={(ev) => submitHandler(ev)}>
      <input
        type="text"
        onChange={(ev) =>
          dispatch({ type: "change_todo", payload: ev.target.value })
        }
        value={state.todoTitle}
      />
      <input
        type="submit"
        value={!state.editableMode ? "Add Todo" : "Update"}
      />
    </form>
  );
};

export default AddTodoForm;
