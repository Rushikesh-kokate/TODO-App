import React, { useState } from "react";

import classes from "./AddTodo.module.css";
import sunIcon from "./images/icon-sun.svg";
import moonIcon from "./images/icon-moon.svg";

const AddTodo = (props) => {
  const [inputValue, setinputValue] = useState("");
  const [Mode, setMode] = useState(!true);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (inputValue.trim().length === 0) {
      return;
    }

    props.onsetTodo(inputValue);
    setinputValue("");
  };

  const inputChangeHandler = (event) => {
    setinputValue(event.target.value);
  };
  const themeChangeHandler = () => {
    setMode(!Mode);
    props.themeChange(Mode);
  };
  return (
    <div className={Mode ? `${classes.lightMode}` : `${classes.darkMode}`}>
      <form onSubmit={formSubmitHandler}>
        <label htmlFor="task">TODO</label>
        <input
          className={Mode ? classes.inputLightMode : classes.input}
          onChange={inputChangeHandler}
          value={inputValue}
          type="text"
          placeholder="Create a new todo..."
        />
      </form>
      <img
        className={classes.theme}
        onClick={themeChangeHandler}
        src={Mode ? moonIcon : sunIcon}
        alt="sun icon"
      />
    </div>
  );
};
export default AddTodo;
