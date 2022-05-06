import Todo from "@/types/Todo";

export default function Item({ todo }) {
  return <li>{todo.text}</li>;
}

Item.propTypes = {
  todo: Todo.isRequired,
};
