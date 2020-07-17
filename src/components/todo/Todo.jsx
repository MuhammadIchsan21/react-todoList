import React from "react";
import PropTypes from "prop-types";
import styles from "./todo.module.css";
const Todo = props => {
  return (
    <div className={styles.todo}>
      <span className={styles.todoText}>{props.text}</span>
    </div>
  );
};

Todo.propTypes = {
  text: PropTypes.string.isRequired
};
export default Todo;
