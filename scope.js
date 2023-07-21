let bonus = 35; // global scope. can be access from anywhere

function sum(first, second){
    let result = first + second + bonus;
    if(result>9){
        const mood = "happy"; //block scope. Cannot be accessed outside the if-else statement. if you use let or const
        console.log(mood)
    }
    return result; // you cannot access result outside the function
}

const output = sum(3,7);
console.log(bonus);
console.log(output);