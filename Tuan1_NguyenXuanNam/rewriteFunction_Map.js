function myMap(array, callback) {
    const resultArray = [];
    for (let i = 0; i < array.length; i++) {
        const newValue = callback(array[i]);
        resultArray.push(newValue);
    }
    return resultArray;
}


function double(value) {
    return value * 2;
}

const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = myMap(numbers, double);

console.log('map của numbers = [1, 2, 3, 4, 5];' + doubledNumbers);

