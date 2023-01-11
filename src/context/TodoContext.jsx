import { createContext, useReducer } from "react";
import todoReducer from "../reducer/todoReducer";
export const todoContext = createContext();
const TodoContextProvider = ({ children }) => {
  let initialState = {
    todoTitle: "",
    todos: [],
    editableMode: false,
    editableTodo: null,
  };
  const [state, dispatch] = useReducer(todoReducer, initialState);
  return (
    <todoContext.Provider value={{ state, dispatch }}>
      {children}
    </todoContext.Provider>
  );
};
export default TodoContextProvider;
