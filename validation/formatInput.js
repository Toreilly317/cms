const isEmpty = require("./isEmpty");

module.exports = (value, trim) => {
  if (!isEmpty(value)) {
    if (trim) {
      return input.trim();
    }
  } else {
    return "";
  }
};
