import React, { Fragment, useState } from "react";
import AddTodo from "./components/AddTodo";
import DisplayTodo from "./components/DisplayTodo";

const App = () => {
  const [todoList, settodoList] = useState([]);
  const [modeChange, setModeChange] = useState([]);

  const setTodoHandler = (name) => {
    settodoList((prevState) => {
      return [...prevState, { Name: name, id: Math.random().toString() }];
    });
  };

  const removeTodoHandler = (id) => {
    const removeArr = [...todoList].filter(
      (removeItem) => removeItem.id !== id
    );
    settodoList(removeArr);
  };

  const themeChangeHandler = (mode) => {
    setModeChange(mode);
  };

  return (
    <Fragment>
      <AddTodo onsetTodo={setTodoHandler} themeChange={themeChangeHandler} />
      <DisplayTodo
        items={todoList}
        removeTodo={removeTodoHandler}
        mode={modeChange}
      />
    </Fragment>
  );
};

export default App;
