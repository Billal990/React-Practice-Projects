import React from "react";
import { useState } from "react";
import AddTodoForm from "./components/AddTodoForm";
import AllTodoList from "./components/AllTodoList";
import "./css/App.css";
const App = () => {
  return (
    <div className="app">
      <AddTodoForm />
      <AllTodoList />
    </div>
  );
};

export default App;
