import PropTypes from "prop-types";

export default function Item({ todo }) {
  return <li>{todo.text}</li>;
}

Item.propTypes = {
  // TODO: Move this type into its own file and import it
  todo: PropTypes.exact({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }),
};
