import PropTypes from "prop-types";

export default PropTypes.exact({
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
});
