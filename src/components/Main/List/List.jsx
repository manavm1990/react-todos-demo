import Todo from "@/types/Todo";
import PropTypes from "prop-types";
import Item from "./Item";

export default function List({ todos }) {
  return (
    <ol>
      {todos.map((todo) => (
        <Item key={todo.id} todo={todo} />
      ))}
    </ol>
  );
}

List.propTypes = {
  todos: PropTypes.arrayOf(Todo),
};
