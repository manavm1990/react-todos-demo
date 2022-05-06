import PropTypes from "prop-types";

export default PropTypes.exact({
  id: PropTypes.number,
  text: PropTypes.string,
  completed: PropTypes.bool,
});
