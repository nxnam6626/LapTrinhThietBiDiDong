function myFilter(array, callback) {
    const result = [];
    
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i], i, array)) {
        result.push(array[i]);
      }
    }
    return result;
  }

  function isGreaterThanTwo(value) {
    return value > 2;
  }
  
  const numbers = [1, 2, 3, 4, 5];
  
  const filteredNumbers = myFilter(numbers, isGreaterThanTwo);
  
  console.log('filter của numbers = [1, 2, 3, 4, 5]: ' + filteredNumbers);