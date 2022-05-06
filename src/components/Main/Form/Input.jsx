import Todo from "@/types/Todo";
import PropTypes from "prop-types";

export default function Input({ changeHandler, inputTodo }) {
  return (
    <div>
      <input
        type="text"
        placeholder="What needs to be done?"
        id="new-todo"
        name="text"
        value={inputTodo.text || ""}
        onChange={changeHandler}
        required
      />
      <label htmlFor="new-todo">What needs to be done?</label>
    </div>
  );
}

Input.propTypes = {
  changeHandler: PropTypes.func.isRequired,
  inputTodo: Todo,
};
