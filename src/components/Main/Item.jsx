import apiService from "@/api.service";
import Todo from "@/types/Todo";

export default function Item({ todo }) {
  return (
    <li className={todo.completed ? "completed" : null}>
      {todo.text}
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => {
          const updatedTodo = { ...todo, completed: !todo.completed };
          apiService.update(updatedTodo);
          // TODO: dispatch({ type: "UPDATE", payload: updatedTodo });
        }}
      />

      {/* TODO: Add Buttons that will dispatch delete and edits */}
    </li>
  );
}

Item.propTypes = {
  todo: Todo.isRequired,
};