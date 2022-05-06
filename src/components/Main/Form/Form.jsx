import Button from "@components/Button";
import Input from "./Input";
import PropTypes from "prop-types";

export default function Form({ submitHandler }) {
  return (
    <form onSubmit={submitHandler}>
      <Input />
      <Button text="Submit" className="button-add" />
    </form>
  );
}

Form.propTypes = {
  submitHandler: PropTypes.func.isRequired,
};
