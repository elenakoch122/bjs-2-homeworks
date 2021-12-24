function compareArrays(arr1, arr2) {
  let result = arr1.every((item, idx) => arr1.length === arr2.length && item === arr2[idx]);
  return result;
}

function advancedFilter(arr) {
  let resultArr = arr.filter(number => number > 0 && number % 3 === 0).map(number => number*10);
  return resultArr;
}
