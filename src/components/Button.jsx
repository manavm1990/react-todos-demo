import PropTypes from "prop-types";

export default function Button({ className, text, handleClick }) {
  return (
    <button className={className} onClick={handleClick}>
      {text}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  handleClick: PropTypes.func,
  text: PropTypes.string,
};
