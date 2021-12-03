import React from "react";

import cutX from "./images/icon-cross.svg";
import classes from "./DisplayTodo.module.css";

const DisplayTodo = (props) => {
  return (
    <div className={props.mode ? classes.container : classes.darkContainer}>
      <ul className={props.mode ? classes.itemList : classes.darkItemList}>
        What's the Plan for Today?
        {props.items.map((val) => (
          <li
            key={val.id}
            className={props.mode ? classes.darkItem : classes.item}
          >
            {val.Name}
            {
              <img
                onClick={() => props.removeTodo(val.id)}
                src={cutX}
                alt="x sign"
              />
            }
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayTodo;
