// Định nghĩa hàm myReduce
function myReduce(array, callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : array[0];
    let startIndex = initialValue !== undefined ? 0 : 1;
  
    for (let i = startIndex; i < array.length; i++) {
      accumulator = callback(accumulator, array[i]);
    }

    return accumulator;
  }
  
  function sumAccumulator(acc, value) {
    return acc + value;
  }
  
  const numbers = [1, 2, 3, 4];
  const sum = myReduce(numbers, sumAccumulator, 0);
  
  console.log('my reduce của numbers = [1, 2, 3, 4]: ' + sum); 

  
  