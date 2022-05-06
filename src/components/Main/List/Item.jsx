import Todo from "@/types/Todo";

export default function Item({ todo }) {
  return (
    <li className={todo.completed ? "completed" : null}>
      {todo.text}
      <input type="checkbox" checked={todo.completed} />
    </li>
  );
}

Item.propTypes = {
  todo: Todo.isRequired,
};
