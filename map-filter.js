const numbers = [3, 4, 5, 6, 7, 8];
//conventional way
// const output = [];

// for (let index = 0; index < numbers.length; index++) {
//     const element = numbers[index];
//     const result = element*element;
//     output.push(result);
// }


const result = numbers.map(function(element, index, array){
    //console.log(element, index, array);
    return element*element;

})
const result1 = numbers.map(element => element*element);
console.log(result);
console.log(result1);

// Filter
const result2 = numbers.filter(x => x>5)
console.log(result2);

// Find
const result3 = numbers.find(element => element > 5)
console.log(result3)
