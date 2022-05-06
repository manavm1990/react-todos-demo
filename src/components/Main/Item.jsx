import apiService from "@/api.service";
import Todo from "@/types/Todo";
import PropTypes from "prop-types";

export default function Item({ todo, dispatch }) {
  return (
    <li className={todo.completed ? "completed" : null}>
      {todo.text}
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => {
          const updatedTodo = { ...todo, completed: !todo.completed };
          apiService.update(updatedTodo);
          dispatch({ type: "UPDATE", payload: updatedTodo });
        }}
      />

      {/* TODO: Add Buttons that will dispatch delete and edits */}
    </li>
  );
}

Item.propTypes = {
  dispatch: PropTypes.func.isRequired,
  todo: Todo.isRequired,
};
