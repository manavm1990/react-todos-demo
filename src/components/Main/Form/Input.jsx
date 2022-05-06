export default function Input() {
  return (
    <div>
      <input
        type="text"
        placeholder="What needs to be done?"
        id="new-todo"
        name="text"
      />
      <label htmlFor="new-todo">What needs to be done?</label>
    </div>
  );
}
