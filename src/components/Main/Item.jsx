import apiService from "@/api.service";
import Todo from "@/types/Todo";
import Button from "@components/Button";
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

      <Button
        className="button-del"
        handleClick={() => {
          console.log("delete");
        }}
      />

      <Button
        className="button-edit"
        handleClick={() => {
          console.log("edit");
        }}
      />
    </li>
  );
}

Item.propTypes = {
  dispatch: PropTypes.func.isRequired,
  todo: Todo.isRequired,
};
