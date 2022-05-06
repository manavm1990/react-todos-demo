import PropTypes from "prop-types";

export default function Form({ children, submitHandler }) {
  return <form onSubmit={submitHandler}>{children}</form>;
}

Form.propTypes = {
  children: PropTypes.node.isRequired,
  submitHandler: PropTypes.func.isRequired,
};
