import Item from "./Item";

const todos = [
  { id: 1, text: "...", completed: true },
  { id: 2, text: "...", completed: false },
  { id: 3, text: "...", completed: false },
];

export default function List() {
  return (
    <ol>
      {todos.map((todo) => (
        <Item key={todo.id} todo={todo} />
      ))}
    </ol>
  );
}
