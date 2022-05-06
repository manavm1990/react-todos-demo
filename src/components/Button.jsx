import PropTypes from 'prop-types';

export default function Button({className, text}) {
  return <button className={className}>{text}</button>
}

Button.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired
}