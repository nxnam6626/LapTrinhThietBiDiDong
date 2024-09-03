function mySome(array, callback) {
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i], i, array)) {
        return true;
      }
    }
    return false;
  }
  
  function isPositive(number) {
    return number > 0;
  }
  
  const numbers = [-1, -2, 0, 3, -4];
  
  const hasPositiveNumber = mySome(numbers, isPositive);
  console.log(hasPositiveNumber);
  