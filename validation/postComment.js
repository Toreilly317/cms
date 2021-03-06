const Validator = require("validator");
const isEmpty = require("./isEmpty");

module.exports = validatePostComment = data => {
  let errors = {};

  data.text = !isEmpty(data.text) ? data.text : "";

  if (!Validator.isLength(data.text, { min: 10, max: 300 })) {
    errors.text = "Post must be between 10 and 300 characters";
  }

  if (Validator.isEmpty(data.text)) {
    errors.password = "Text field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
