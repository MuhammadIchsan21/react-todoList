import React from "react";
import PropTypes from "prop-types";
import Todo from "../todo/Todo";
import styles from "./todos.module.css";
const Todos = ({ todos, completeTodo }) => {
  return (
    <section className={styles.todos}>
      {todos.length > 0 &&
        todos.map((todo, index) => {
          return (
            <Todo
              key={index}
              text={todo.text}
              isCompleted={todo.isCompleted}
              completeTodo={completeTodo}
              index={index}
            />
          );
        })}
      {todos.length === 0 && (
        <div className={styles.todoPlaceholderText}>
          Add Todo by clicking{" "}
          <span className={styles.addButtonPlaceholderText}>Add</span> button on
          the top left corner
        </div>
      )}
    </section>
  );
};
Todos.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string
    })
  ),
  completeTodo: PropTypes.func.isRequired
};
export default Todos;
