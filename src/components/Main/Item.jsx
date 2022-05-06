import apiService from "@/api.service";
import Todo from "@/types/Todo";
import Button from "@components/Button";
import PropTypes from "prop-types";

export default function Item({ todo, dispatch, setInputTodo }) {
  return (
    <li className={todo.completed ? "completed" : null}>
      {todo.text}
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => {
          const updatedTodo = { ...todo, completed: !todo.completed };
          apiService.update(updatedTodo).then((updatedTodoResp) => {
            dispatch({ type: "UPDATE", payload: updatedTodoResp });
          });
        }}
      />

      <Button
        className="button-del"
        handleClick={() => {
          apiService.delete(todo).then(() => {
            dispatch({ type: "DELETE", payload: todo });
          });
        }}
      />

      <Button
        className="button-edit"
        handleClick={() => {
          setInputTodo(todo);
        }}
      />
    </li>
  );
}

Item.propTypes = {
  dispatch: PropTypes.func.isRequired,
  setInputTodo: PropTypes.func.isRequired,
  todo: Todo.isRequired,
};
