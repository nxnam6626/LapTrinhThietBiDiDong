function myForEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i);
    }
}
function printElement(value, index) {
    console.log(`Element at index ${index}: ${value}`);
}

const numbers = [1, 2, 3, 4, 5];

myForEach(numbers, printElement);