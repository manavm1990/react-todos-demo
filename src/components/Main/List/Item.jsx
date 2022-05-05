import PropTypes from "prop-types";

export default function Item({ todo }) {
  return <li>{todo.text}</li>;
}

Item.propTypes = {
  todo: PropTypes.exact({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }),
};
