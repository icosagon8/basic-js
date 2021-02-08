module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error;
  }

  let newArray = [];

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-next':
        if (arr[i + 1] !== undefined) {
          i++;
        }
        break;
      case '--discard-prev':
        if (arr[i - 1] !== undefined && arr[i - 2] !== '--discard-next') {
          newArray.pop();
        }
        break;
      case '--double-next':
        if (arr[i + 1] !== undefined) {
          newArray.push(arr[i + 1]);
        }
        break;
      case '--double-prev':
        if (arr[i - 1] !== undefined && arr[i - 2] !== '--discard-next') {
          newArray.push(arr[i - 1]);
        }
        break;
      default:
        newArray.push(arr[i]);
    }
  }

  return newArray;
};

console.log(module.exports([1, 2, 3, '--double-next', 1337, '--discard-prev', 4, 5]));