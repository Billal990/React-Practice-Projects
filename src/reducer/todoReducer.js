import { v1 as uId } from "uuid";
function todoReducer(state, action) {
  switch (action.type) {
    case "change_todo": {
      return {
        ...state,
        todoTitle: action.payload,
      };
    }
    case "add_new_todo": {
      console.log(uId());
      const newTodo = {
        id: uId(),
        todoTitle: state.todoTitle,
      };
      return {
        ...state,
        todos: [...state.todos, newTodo],
        todoTitle: "",
      };
    }
    case "edit_todo": {
      const toBeEditedTodo = state.todos.find(
        (item) => item.id === action.payload
      );
      return {
        ...state,
        editableTodo: toBeEditedTodo,
        editableMode: true,
        todoTitle: toBeEditedTodo.todoTitle,
      };
    }
    case "update_todo": {
      const toBeUpdatedTodos = state.todos.map((item) => {
        if (item.id === state.editableTodo.id) {
          item.todoTitle = state.todoTitle;
        }
        return item;
      });

      return {
        ...state,
        todos: toBeUpdatedTodos,
        editableMode: false,
        editableTodo: null,
        todoTitle: "",
      };
    }

    case "delete_todo": {
      const filteredTodo = state.todos.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        todos: filteredTodo,
      };
    }
  }
}
export default todoReducer;
