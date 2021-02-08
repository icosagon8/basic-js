module.exports = function repeater(str, options) {
  let {
    repeatTimes = 1,
      separator = '+',
      addition = '',
      additionRepeatTimes = 1,
      additionSeparator = '|'
  } = options;

  return (new Array(repeatTimes).fill(String(str) + (new Array(additionRepeatTimes).fill(String(addition))).join(additionSeparator))).join(separator);
};