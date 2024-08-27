// Create a function 'printForecast'
function printForecast(arr){
    let str = '';
    for(let i = 0; i < arr.length; i++){
        str += `${arr[i]}ºC in ${i + 1} days ...`;
    }
    console.log(str);
}

// § Data 1: [17, 21, 23]
// § Data 2: [12, 5, -5, 0, 4]
data1 = [17, 21, 23];
data2 = [12, 5, -5, 0, 4];

printForecast(data1);
printForecast(data2);